import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { useWeather } from '../context/WeatherContext';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const API_KEY = "171e009cae7e126fcbcec49c3a5cee6a";

const WeatherInfo = ({ location, onWeatherData }) => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [overlays, setOverlays] = useState({
    satellite: false,
    rainfall: false,
    wind: false
  });

  const { updateWeather, setError, clearError } = useWeather();

  useEffect(() => {
    if (location) {
      fetchWeatherData();
    }
  }, [location]);

  const fetchWeatherData = async () => {
    if (!location) return;
    
    setLoading(true);
    clearError();

    try {
      // Fetch current weather
      const weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather`,
        {
          params: {
            lat: location.lat,
            lon: location.lon,
            appid: API_KEY,
            units: "metric"
          },
          headers: {
            Accept: "application/json"
          }
        }
      );

      // Fetch 5-day forecast
      const forecastResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast`,
        {
          params: {
            lat: location.lat,
            lon: location.lon,
            appid: API_KEY,
            units: "metric"
          },
          headers: {
            Accept: "application/json"
          }
        }
      );

      setWeather(weatherResponse.data);
      
      // Process forecast data for chart
      const dailyData = forecastResponse.data.list.filter((item, index) => index % 8 === 0);
      const chartData = dailyData.map(item => ({
        date: new Date(item.dt * 1000).toLocaleDateString(),
        temp: item.main.temp,
        humidity: item.main.humidity,
        windSpeed: item.wind.speed
      }));

      setForecast(chartData);
      onWeatherData(weatherResponse.data);
      
      // Update global weather context
      updateWeather(weatherResponse.data, location);

    } catch (error) {
      console.error("❌ Error fetching weather:", error.response || error.message || error);
      setError("⚠️ Could not load weather data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const toggleOverlay = (overlay) => {
    setOverlays(prev => ({
      ...prev,
      [overlay]: !prev[overlay]
    }));
  };

  const getWeatherAnimation = () => {
    if (!weather) return null;

    const weatherMain = weather.weather[0].main.toLowerCase();
    const weatherDesc = weather.weather[0].description.toLowerCase();

    if (weatherDesc.includes('rain') || weatherDesc.includes('drizzle')) {
      return 'rain-animation';
    } else if (weatherDesc.includes('snow')) {
      return 'snow-animation';
    } else if (weather.wind.speed > 10) {
      return 'wind-animation';
    } else if (weather.clouds.all > 70) {
      return 'cloud-animation';
    }

    return null;
  };

  const chartData = {
    labels: forecast.map(item => item.date),
    datasets: [
      {
        label: 'Temperature (°C)',
        data: forecast.map(item => item.temp),
        borderColor: '#00ffff',
        backgroundColor: 'rgba(0, 255, 255, 0.1)',
        tension: 0.4,
      },
      {
        label: 'Humidity (%)',
        data: forecast.map(item => item.humidity),
        borderColor: '#ff6b6b',
        backgroundColor: 'rgba(255, 107, 107, 0.1)',
        tension: 0.4,
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#ffffff'
        }
      },
      title: {
        display: true,
        text: '5-Day Weather Forecast',
        color: '#ffffff'
      }
    },
    scales: {
      y: {
        ticks: { color: '#ffffff' },
        grid: { color: 'rgba(255, 255, 255, 0.1)' }
      },
      x: {
        ticks: { color: '#ffffff' },
        grid: { color: 'rgba(255, 255, 255, 0.1)' }
      }
    }
  };

  if (loading) {
    return (
      <div className="weather-info loading">
        <div className="loading-spinner"></div>
        <p>Loading weather data...</p>
      </div>
    );
  }

  if (!weather) {
    return (
      <div className="weather-info">
        <p>Search for a location to see weather information</p>
      </div>
    );
  }

  return (
    <div className={`weather-info ${getWeatherAnimation()}`}>
      <div className="weather-header">
        <h2>{location.name}, {location.country}</h2>
        <div className="weather-main">
          <div className="temperature">
            {Math.round(weather.main.temp)}°C
          </div>
          <div className="weather-desc">
            {weather.weather[0].description}
          </div>
        </div>
      </div>

      <div className="weather-details">
        <div className="detail-item">
          <span className="label">Humidity:</span>
          <span className="value">{weather.main.humidity}%</span>
        </div>
        <div className="detail-item">
          <span className="label">Wind Speed:</span>
          <span className="value">{weather.wind.speed} m/s</span>
        </div>
        <div className="detail-item">
          <span className="label">Pressure:</span>
          <span className="value">{weather.main.pressure} hPa</span>
        </div>
        <div className="detail-item">
          <span className="label">Visibility:</span>
          <span className="value">{weather.visibility / 1000} km</span>
        </div>
      </div>

      <div className="overlay-controls">
        <button 
          className={`overlay-btn ${overlays.satellite ? 'active' : ''}`}
          onClick={() => toggleOverlay('satellite')}
        >
          Satellite
        </button>
        <button 
          className={`overlay-btn ${overlays.rainfall ? 'active' : ''}`}
          onClick={() => toggleOverlay('rainfall')}
        >
          Rainfall
        </button>
        <button 
          className={`overlay-btn ${overlays.wind ? 'active' : ''}`}
          onClick={() => toggleOverlay('wind')}
        >
          Wind Patterns
        </button>
      </div>

      {overlays.satellite && (
        <div className="overlay satellite-overlay">
          <div className="overlay-content">
            <h3>Satellite View</h3>
            <p>Cloud coverage: {weather.clouds.all}%</p>
          </div>
        </div>
      )}

      {overlays.rainfall && weather.rain && (
        <div className="overlay rainfall-overlay">
          <div className="overlay-content">
            <h3>Rainfall Data</h3>
            <p>1h: {weather.rain['1h'] || 0}mm</p>
            <p>3h: {weather.rain['3h'] || 0}mm</p>
          </div>
        </div>
      )}

      {overlays.wind && (
        <div className="overlay wind-overlay">
          <div className="overlay-content">
            <h3>Wind Information</h3>
            <p>Speed: {weather.wind.speed} m/s</p>
            <p>Direction: {weather.wind.deg}°</p>
          </div>
        </div>
      )}

      {forecast.length > 0 && (
        <div className="forecast-chart">
          <Line data={chartData} options={chartOptions} />
        </div>
      )}
    </div>
  );
};

export default WeatherInfo; 