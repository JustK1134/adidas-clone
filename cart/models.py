from django.db import models
from django.conf import settings
User = settings.AUTH_USER_MODEL 
# Create your models here.

class Cart(models.Model):
    product_id = models.IntegerField(default=0)
    product_name = models.CharField(max_length=200)
    color = models.CharField(max_length=200)
    size = models.CharField(max_length=200)
    quantity = models.IntegerField(default=0)
    

