from django.shortcuts import render
from .models import Customer
from rest_framework.decorators import api_view
from rest_framework.response import Response
# from rest_framework import status
from .serializer import CustomerSerializer
# Create your views here.

@api_view(['GET', 'POST'])
def customers(request):
    if request.method == 'GET':
        customers = Customer.objects.all()
    # context = {
    #     "customer_list": customers
    # }
        serializer = CustomerSerializer(customers, many=True)
    # return render(request, "customer_list.html", context)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = CustomerSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
        #     return Response(serializer.data, status=status.HTTP_201_CREATED)
        # return Response(serializer.errors, status.status.HTTP_400_BAD_REQUEST)
