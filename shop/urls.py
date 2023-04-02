from django.urls import path
from .views import product_query, product_filter, product_search

urlpatterns = [
    path('',product_query, name='all'),
    path('filter',product_filter, name='filter'),
    path('search',product_search, name='filter'),
    path('product/<product_id>/',product_query, name ='item')
]