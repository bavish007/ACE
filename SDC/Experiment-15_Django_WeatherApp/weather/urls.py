from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('current/', views.current, name='current'),
    path('map/', views.map_view, name='map'),
    path('about/', views.about, name='about'),
    path('help/', views.help_page, name='help'),
] 