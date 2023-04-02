from django.urls import path
from . import views
from .views import MyTokenObtainPairView, register

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

urlpatterns = [

    path('', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/',register, name='register')
]