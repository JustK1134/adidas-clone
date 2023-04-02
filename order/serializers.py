from rest_framework import serializers
from .models import Order, OrderItem, ShippingAddress
from customer.models import Customer
from shop.models import Shop

class OrderSerializer(serializers.ModelSerializer):
    order_item = serializers.SerializerMethodField('get_order_item')
    total_price = serializers.SerializerMethodField('get_total_price')
    total_item = serializers.SerializerMethodField('get_total_item')
    

    def get_order_item(self, obj):
        query1 = list(OrderItem.objects.filter(order = obj.id).values())
        query = OrderItem.objects.filter(order = obj.id)
        data = OrderItemSerializer(query, many = True).data
        return data

    def get_total_price(self, obj):
        total = 0
        query = OrderItem.objects.filter(order = obj.id)
        data = OrderItemSerializer(query, many = True).data
        for x in data:
            total = total + x['total_order_item']
        return total
    
    def get_total_item(self, obj):
        total = 0
        query = OrderItem.objects.filter(order = obj.id)
        data = OrderItemSerializer(query, many = True).data
        for x in data:
            total = total + x['quantity']
        return total

    class Meta:
        model = Order
        fields = ['id','customer','transaction_id', 'date_order','complete','total_item','total_price','order_item']



class OrderItemSerializer(serializers.ModelSerializer):
    detail = serializers.SerializerMethodField('get_detail')
    total_order_item = serializers.SerializerMethodField('get_total_order_item')
    delete_link = serializers.SerializerMethodField('get_delete_link')

    def get_detail (self,obj):
        query = list(Shop.objects.filter(id = obj.product_id).values())[0]
        return {'productname':query['productname'],'price': query['price'], 'color': query['color'],'main_image':query['main_image']}


    def get_total_order_item(self, obj):
        query = list(Shop.objects.filter(id = obj.product_id).values())[0]
        return query['price']*obj.quantity

    def get_delete_link(self, obj):
        return f"http://127.0.0.1:8000/api/cart/delete/{obj.id}/"

    class Meta:
        model = OrderItem
        fields = ['id','product','order','quantity','size','total_order_item','detail','delete_link']


class ShippingAddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShippingAddress
        fields = '__all__'