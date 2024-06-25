from rest_framework import serializers
from django.contrib.auth.models import User
from .models import  Flight

class UserSerializer(serializers.ModelSerializer):
    class Meta(object):
        model = User 
        fields = ['id', 'username', 'password', 'email']
     
class FlightModelSerializer(serializers.ModelSerializer):
     class Meta:
        model = Flight
        fields = '__all__'

