from django.db import models
from django.conf import settings
User = settings.AUTH_USER_MODEL 
from customer.models import Customer
from shop.models import Shop
# Create your models here.

class Order(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.SET_NULL, blank=True, null=True)
    date_order = models.DateTimeField(auto_now_add=True)
    complete = models.BooleanField(max_length=200, null=True)
    transaction_id = models.CharField(max_length=200, null=True)


class OrderItem(models.Model):
    product = models.ForeignKey(Shop, on_delete=models.SET_NULL, null=True)
    order = models.ForeignKey(Order, on_delete=models.SET_NULL, null=True)
    quantity = models.IntegerField(default=1,null=True, blank=True)
    size = models.CharField(max_length=200, null=True, blank=True)
    date_added = models.DateTimeField(auto_now_add=True)

class ShippingAddress(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.SET_NULL, blank=True, null=True)
    order = models.ForeignKey(Order, on_delete=models.SET_NULL, blank=True, null=True)
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    street = models.CharField(max_length=200)
    building = models.CharField(max_length=200)
    province = models.CharField(max_length=200)
    district = models.CharField(max_length=200)
    ward = models.CharField(max_length=200)
    postal = models.CharField(max_length=200)
    province = models.CharField(max_length=200)
    email = models.CharField(max_length=200,  blank=True, null=True)
    phone = models.CharField(max_length=200)
