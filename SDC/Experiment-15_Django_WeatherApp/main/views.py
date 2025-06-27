from django.shortcuts import render
import requests

API_KEY = '171e009cae7e126fcbcec49c3a5cee6a'
BASE_URL = 'https://api.openweathermap.org/data/2.5'


def index(request):
    city = request.GET.get('city', 'Hyderabad')
    current = None
    trend = []
    error = ''
    
    if city:
        try:
            # Fetch current weather
            curr_res = requests.get(
                f'{BASE_URL}/weather', 
                params={'q': city, 'appid': API_KEY, 'units': 'metric'},
                timeout=10
            )
            curr_res.raise_for_status()
            current = curr_res.json()
            
            # Check if API returned an error
            if current.get('cod') != 200:
                raise Exception(f"City '{city}' not found. Please check the spelling and try again.")
            
            # Fetch forecast data
            forecast_res = requests.get(
                f'{BASE_URL}/forecast', 
                params={'q': city, 'appid': API_KEY, 'units': 'metric'},
                timeout=10
            )
            forecast_res.raise_for_status()
            forecast = forecast_res.json()
            
            # Process forecast data for trend chart
            daily = {}
            for item in forecast['list']:
                date = item['dt_txt'].split(' ')[0]
                if date not in daily and '12:00:00' in item['dt_txt']:
                    daily[date] = {'date': date, 'temp': item['main']['temp']}
            trend = list(daily.values())[:5]
            
        except requests.exceptions.Timeout:
            error = '⚠️ Request timeout. Please check your internet connection and try again.'
        except requests.exceptions.ConnectionError:
            error = '⚠️ Connection error. Please check your internet connection and try again.'
        except requests.exceptions.RequestException as e:
            error = f'⚠️ Network error: {str(e)}'
        except KeyError as e:
            error = f'⚠️ Invalid response format: {str(e)}'
        except Exception as e:
            error = f'⚠️ Failed to fetch weather data: {str(e)}'
    
    return render(request, 'index.html', {
        'current': current, 
        'trend': trend, 
        'city': city, 
        'error': error
    })
