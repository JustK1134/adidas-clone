from django.shortcuts import render
from .models import Api
from .serializers import ApiSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
# Create your views here.

@api_view(['GET','POST'])
def test(request,*args,**kwargs):
    method = request.method
    if method == "GET":
        queryset = Api.objects.all()
        data = ApiSerializer(queryset, many=True).data
        return Response({'data':data,'200':'get success',}, status=200)