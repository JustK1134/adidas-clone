from django.contrib import admin
from .models import Shop, ShopInfo, CategoryInfo
# Register your models here.
admin.site.register(Shop)
admin.site.register(ShopInfo)
admin.site.register(CategoryInfo)