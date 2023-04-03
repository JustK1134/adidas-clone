from django.urls import path
from . import views
from .views import MyTokenObtainPairView, register, get_customer

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

urlpatterns = [

    path('', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/',register, name='register'),
    path('customer/', get_customer, name ='get-customer')
]