from django.urls import path, path

from . import views

urlpatterns = [
    path('signup', views.signup),
    path('login', views.login),
    path('test_token', views.test_token),
    path('test_session', views.test_session),
    path('dds', views.CreateDummyAPI.as_view()),
    path("create_update_flight", views.CreateFlightView.as_view()),
    path('flights/<int:pk>/', views.RetriveUpdateView.as_view(), ),
    
]