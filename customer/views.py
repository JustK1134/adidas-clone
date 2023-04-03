from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.contrib.auth.models import User
from .models import Customer
from rest_framework import status

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
# Create your views here.

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['first_name'] =  Customer.objects.filter(user = user).values()[0]['first_name']
        # ...

        return token


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


@api_view(['POST'])
def register(request, *args, **kwargs):
    method = request.method
    if method == 'POST':
        data= request.data
        user = User.objects.create_user(username=data['username'], password=data['password'])
        user.save()
        print("--------------this is user id",user.id)
        print("--------------this is user id",type(user.id))
        new_customer = Customer.objects.create(user = user, email =user.username, first_name=data['firstname'], last_name=data['lastname'])
        print(request.data)
        return Response({"detail":"Welcome to the club, "+data['firstname']}, status=status.HTTP_201_CREATED)
    return Response({"detail":"something wrong"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['POST'])
def get_customer(request,*args, **kwargs):
    method = request.method
    if method == 'POST':
        data = request.data
        cusomter_name = Customer.objects.filter(user = data['user_id']).values()[0]
        print(cusomter_name['first_name'])
        return Response(cusomter_name)