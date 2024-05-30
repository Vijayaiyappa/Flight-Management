from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Vendor, PurchaseOrder, DummyModel, Flight

class UserSerializer(serializers.ModelSerializer):
    class Meta(object):
        model = User 
        fields = ['id', 'username', 'password', 'email']

class VendorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vendor
        fields = '__all__'

class PurchaseOrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = PurchaseOrder
        fields = '__all__'

class DummyModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = DummyModel
        fields = '__all__'
        
class FlightModelSerializer(serializers.ModelSerializer):
     class Meta:
        model = Flight
        fields = '__all__'

