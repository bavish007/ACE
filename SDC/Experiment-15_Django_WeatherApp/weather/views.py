from django.shortcuts import render
import requests
import json
from datetime import datetime
import pytz

API_KEY = '171e009cae7e126fcbcec49c3a5cee6a'
BASE_URL = 'https://api.openweathermap.org/data/2.5'

def get_weather_data(city):
    """Fetch weather data from OpenWeatherMap API"""
    try:
        # Get current weather
        current_url = f'{BASE_URL}/weather'
        current_params = {
            'q': city,
            'appid': API_KEY,
            'units': 'metric'
        }
        current_response = requests.get(current_url, params=current_params, timeout=10)
        current_response.raise_for_status()
        current_data = current_response.json()
        
        # Get 5-day forecast
        forecast_url = f'{BASE_URL}/forecast'
        forecast_params = {
            'q': city,
            'appid': API_KEY,
            'units': 'metric'
        }
        forecast_response = requests.get(forecast_url, params=forecast_params, timeout=10)
        forecast_response.raise_for_status()
        forecast_data = forecast_response.json()
        
        # Process forecast data for chart
        daily_forecast = {}
        for item in forecast_data['list']:
            date = item['dt_txt'].split(' ')[0]
            if date not in daily_forecast and '12:00:00' in item['dt_txt']:
                daily_forecast[date] = {
                    'date': date,
                    'temp': item['main']['temp'],
                    'humidity': item['main']['humidity'],
                    'wind_speed': item['wind']['speed'],
                    'description': item['weather'][0]['description']
                }
        
        # Get local time for the city
        timezone_offset = current_data['timezone']
        local_time = datetime.utcnow().timestamp() + timezone_offset
        local_datetime = datetime.fromtimestamp(local_time)
        hour = local_datetime.hour
        
        return {
            'current': current_data,
            'forecast': list(daily_forecast.values())[:5],
            'local_time': local_datetime,
            'hour': hour,
            'error': None
        }
    except requests.RequestException as e:
        return {
            'current': None,
            'forecast': [],
            'local_time': None,
            'hour': None,
            'error': f'Could not fetch weather data: {str(e)}'
        }
    except Exception as e:
        return {
            'current': None,
            'forecast': [],
            'local_time': None,
            'hour': None,
            'error': f'An error occurred: {str(e)}'
        }

def home(request):
    """Home page with search functionality"""
    city = request.GET.get('city', '')
    weather_data = None
    
    if city:
        weather_data = get_weather_data(city)
    
    context = {
        'city': city,
        'weather_data': weather_data
    }
    return render(request, 'weather/home.html', context)

def current(request):
    """Current weather page with detailed information"""
    city = request.GET.get('city', 'Hyderabad')
    weather_data = get_weather_data(city)
    
    context = {
        'city': city,
        'weather_data': weather_data
    }
    return render(request, 'weather/current.html', context)

def map_view(request):
    """Interactive map page"""
    city = request.GET.get('city', 'Hyderabad')
    weather_data = get_weather_data(city)
    
    # Get coordinates for map
    coordinates = None
    if weather_data['current']:
        coordinates = {
            'lat': weather_data['current']['coord']['lat'],
            'lon': weather_data['current']['coord']['lon']
        }
    
    context = {
        'city': city,
        'weather_data': weather_data,
        'coordinates': coordinates
    }
    return render(request, 'weather/map.html', context)

def about(request):
    """About page"""
    return render(request, 'weather/about.html')

def help_page(request):
    """Help page"""
    return render(request, 'weather/help.html')
