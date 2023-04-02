from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from .models import Order, OrderItem, ShippingAddress
from .serializers import OrderSerializer, OrderItemSerializer, ShippingAddressSerializer
from customer.models import Customer
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
import random
# Create your views here.

@api_view(['GET','POST'])
@permission_classes([IsAuthenticated])
def cart(request, *args, **kwargs):
    method = request.method
    if method == 'GET':
        print(request.user)
        if request.user.is_authenticated:
            customer = request.user.customer
            query = Order.objects.filter(customer=customer).filter(complete = False)
            if len(list(query.values())) == 0:
                return Response({"detail":"Cart is empty"}, status=status.HTTP_404_NOT_FOUND)
            data = OrderSerializer(query,many=True).data
        return Response(data, status=status.HTTP_200_OK)
    
    if method == 'POST':
        print(request.user)
        query = list(Order.objects.filter(customer = request.user.customer).filter(complete = False).values())
        if len(query) == 0:
            new_order = Order.objects.create(customer = request.user.customer, complete = False, transaction_id = random.randrange(1000,9999))
        order_id = list(Order.objects.filter(customer = request.user.customer).filter(complete = False).values())[0]['id']
        form = OrderItemSerializer(data=request.data, many = False)
        order_query = OrderItemSerializer(data={"order":order_id}, many =False)
        if form.is_valid(raise_exception=True):
            product = form.validated_data.get('product')
            quantity = form.validated_data.get('quantity')
            print("product:",type(product.productname))
            print("quantity:",quantity)
        if order_query.is_valid(raise_exception=True):
            order = order_query.validated_data.get('order')
        form.save(product = product, quantity = quantity, order = order)
        update_order = Order.objects.filter(customer = request.user.customer).filter(complete = False)
        data = OrderSerializer(update_order, many = True).data
        return Response(data, status=status.HTTP_201_CREATED)
        

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def cart_delete_item(request, *args, **kwargs):
    query = Order.objects.filter(customer = request.user.customer).filter(complete = False)
    if len(list(query.values())) == 0:
        return Response({"detail":"Cart is empty"}, status=status.HTTP_404_NOT_FOUND)
    delete_id = kwargs['delete_order_item_id']
    delete_item = OrderItem.objects.filter(id = delete_id)
    delete_item.delete()
    
    return Response({"data":delete_item.values()}, status=status.HTTP_201_CREATED)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def cart_update_quantity(request, *args, **kwargs):
    method = request.method
    if method == 'POST':
        print(request.data)
        for index,pk in enumerate(request.data['order_item_id']):
            try:
                order_item = OrderItem.objects.get(id = pk)
            except OrderItem.DoesNotExist:
                return Response({"detail":"Order item not found"}, status=status.HTTP_404_NOT_FOUND)
            serializer = OrderItemSerializer(order_item, data = {"quantity":request.data['quantity'][index]}, partial=True)
            if serializer.is_valid():
                serializer.save()
    
        update_order = Order.objects.filter(customer = request.user.customer).filter(complete = False)
        if len(list(update_order.values())) == 0:
            return Response({"detail":"Cart is empty"}, status=status.HTTP_404_NOT_FOUND)
        data = OrderSerializer(update_order, many = True).data
        return Response(data, status=status.HTTP_201_CREATED)

@api_view(['GET','POST'])
@permission_classes([IsAuthenticated])
def checkout(request, *args, **kwargs):
    method = request.method
    if method == 'GET':
        order = Order.objects.filter(customer = request.user.customer).filter(complete = False)
        if len(list(order.values())) == 0:
            return Response({"detail":"Cart is empty"}, status=status.HTTP_404_NOT_FOUND)
        data = OrderSerializer(order, many = True).data
        return Response(data, status=status.HTTP_200_OK)
    
    if method == 'POST':
        print(request.data)
        query = Order.objects.filter(customer = request.user.customer).filter(complete = False)
        if len(query) == 0:
            return Response({"detail":"This cart is already been confirmed"}, status=status.HTTP_404_NOT_FOUND)
        serializer = ShippingAddressSerializer(data=request.data, many = False)
        if serializer.is_valid():            
            update_order_status = OrderSerializer(Order.objects.get(id = request.data['order']), data = {"complete":True}, partial = True)
            if update_order_status.is_valid():
                update_order_status.save()
                print("OK")
                serializer.save()
                print("OK")
                return Response(request.data, status=status.HTTP_201_CREATED)
            

@api_view(['GET'])
def order_status(request, *args, **kwargs):
    method = request.method
    if method == 'GET':
        if len(kwargs) == 0:
            return Response({"detail":"no order is sent"}, status=status.HTTP_404_NOT_FOUND)
        if len(kwargs) > 0:
            
            orderQuery = Order.objects.filter(id = kwargs['order_id'])
            if len(list(orderQuery.values())) == 0:
                return Response({"detail":"no Order with ID " +kwargs['order_id'] + " is found"}, status=status.HTTP_404_NOT_FOUND)
            
            orderData = OrderSerializer(orderQuery, many = True).data
            print(kwargs['order_id'])
            addressQuery = ShippingAddress.objects.filter(order = kwargs['order_id'])
            addressData = ShippingAddressSerializer(addressQuery, many = True).data
            print("OK")
            # return Response(request.data)
            return Response({"order":orderData,"address":addressData}, status=status.HTTP_200_OK)