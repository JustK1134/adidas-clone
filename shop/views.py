from django.shortcuts import render
from .models import Shop, CategoryInfo
from .serializers import ShopSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.shortcuts import get_list_or_404
from rest_framework import status
# Create your views here.

@api_view(['GET'])
def product_query(request, *args, **kwargs):
    method = request.method
    if method == 'GET':
        if len(kwargs) == 0:
            print("all")
            queryset = Shop.objects.all()
            data = ShopSerializer(queryset, many = True).data
            data_header = CategoryInfo.objects.filter(division = 'MEN').values()[0]
            data_header['quantity']= len(data)

            return Response({"data_header":data_header, "data":data}, status=status.HTTP_200_OK)
        elif len(kwargs) > 0:
            product_id = kwargs['product_id']
            # object = Shop.objects.filter(small_id_1 = product_id)
            object = Shop.objects.filter(id = product_id)
            if len(list(object.values())) == 0:
                return Response({"detail":"No product found"}, status=status.HTTP_404_NOT_FOUND)
            # queryset = Shop.objects.all().values()
            data = ShopSerializer(object, many=True).data
            return Response(data, status=status.HTTP_200_OK)
        else:
            return Response({"detail":"something wrong"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['POST'])
def product_filter(request, *args, **kwargs):
    method = request.method


    full_division = ['Shoes', 'Clothing', 'Accessory']
    full_color = ['Black', 'Red', 'White', 'Blue', 'Yellow']
    full_size = ['5UK', '7UK', '8UK', '6UK', '9UK', '12UK', '11UK','10UK']
    sort_price = ['Price(low-high)', 'Price(high-low)']
    full_sport = ['Lifestyle', 'Running', 'Training', 'Basketball']
    full_type = ['Sneakers', 'Tshirts', 'Sock', 'Hoodies']

    filter_division = request.data['division']
    filter_color = request.data['color']
    filter_size = request.data['size']
    filter_sort = request.data['sort']
    filter_sport = request.data['sport']
    filter_type = request.data['type']
    filter_price = request.data['price']


    if method == 'POST':
        filter = Shop.objects.filter(division__in = filter_division if len(filter_division) != 0 else full_division).filter(sport__in = filter_sport if len(filter_sport) != 0 else full_sport).filter(product_type__in = filter_type if len(filter_type) != 0 else full_type).filter(color__in = filter_color if len(filter_color) != 0 else full_color)
        if len(filter_sort) != 0:
            if filter_sort[0] == 'Price(low-high)':
                filter = filter.order_by('price')
            else:
                filter = filter.order_by('-price')

        data = ShopSerializer(filter, many = True).data
        size_filter = []

        if len(filter_size) != 0:
            for x in data:        
                for i in x['size']:
                    if i['size'] in filter_size and i['quantity'] != 0 and x['price'] >= filter_price[0] and x['price'] <= filter_price[1] :
                        size_filter.append(x)
                        break
        else:
            size_filter =data
        
        if len(size_filter) == 0:
            return Response({"detail":"No product found. Filter again"}, status=status.HTTP_404_NOT_FOUND)
        return Response(size_filter, status=status.HTTP_200_OK)
    return Response({"detail":"method not allow"}, status=status.HTTP_405_METHOD_NOT_ALLOWED)

@api_view(['POST'])
def product_search(request, *args, **kwargs):
    method = request.method
    if method == 'POST':
        search_request = request.data['search'].lower().split()
        query = Shop.objects.all()
        data = ShopSerializer(query, many = True).data

        list_item = []
        for x in data:
            if all(item in x['search_key'] for item in search_request):
                list_item.append(x)

        if len(list_item) == 0:
            return Response({"detail":"No product found. Search again"}, status=status.HTTP_404_NOT_FOUND)
        return Response(list_item,status=status.HTTP_200_OK)
    return Response({"detail":"Method not allow"}, status=status.HTTP_405_METHOD_NOT_ALLOWED)

@api_view(['GET'])
def category_query(request, *args, **kwargs):

    full_division = ['Shoes', 'Clothing', 'Accessory']
    full_sport = ['Lifestyle', 'Running', 'Training', 'Basketball']


    method = request.method
    category_list =[]
    if method == 'GET':
        if len(kwargs) > 0:
            category = kwargs['category']
            split = category.split("-")
            category_list.append(split[1] if len(split) > 1 else split[0])
            data_header = CategoryInfo.objects.filter(division = category).values()
            print(len(list(data_header)))
            if len(list(data_header)) == 0:
                return Response({"detail":"No product found"},status=status.HTTP_404_NOT_FOUND)
            data_header = data_header[0]
            data_product_query = Shop.objects.filter(division__in = category_list if category_list[0] in full_division  else full_division)
            data_product = ShopSerializer(data_product_query, many = True).data
            data_header['quantity'] = len(data_product)
            return Response({"data_header":data_header, "data_product":data_product}, status=status.HTTP_200_OK)            
