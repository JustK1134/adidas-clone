from django.urls import path
from .views import cart, cart_delete_item, cart_update_quantity, checkout, order_status
urlpatterns = [
    path('', cart, name = 'cart'),
    path('update/',cart_update_quantity, name = 'cart-update-quantity'),
    path('checkout/',checkout, name = 'cart-checkou'),
    path('delete/<delete_order_item_id>/',cart_delete_item,name='cart-delete'),
    path('orderstatus/<order_id>/', order_status, name = 'order-status')

]