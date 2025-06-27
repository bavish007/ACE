import React, { createContext, useContext, useState, useEffect } from 'react';

const WeatherContext = createContext();

export const useWeather = () => {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error('useWeather must be used within a WeatherProvider');
  }
  return context;
};

// Time-based gradient mapping
const getTimeBasedGradient = (hour) => {
  if (hour >= 5 && hour <= 8) {
    return { name: 'morning', colors: ['#FFDEE9', '#B5FFFC'] };
  } else if (hour >= 11 && hour <= 14) {
    return { name: 'noon', colors: ['#87CEFA', '#ffffff'] };
  } else if (hour >= 15 && hour <= 17) {
    return { name: 'afternoon', colors: ['#FAD0C4', '#FFD1FF'] };
  } else if (hour >= 17 && hour <= 19) {
    return { name: 'evening', colors: ['#FFC371', '#FF5F6D'] };
  } else {
    return { name: 'night', colors: ['#0d0c1d', '#1e1e2f'] };
  }
};

export const WeatherProvider = ({ children }) => {
  const [weatherState, setWeatherState] = useState({
    weatherType: 'clear',
    isDaytime: true,
    isTwilight: false,
    location: null,
    temperature: null,
    humidity: null,
    windSpeed: null,
    weatherData: null,
    theme: 'dark',
    timeGradient: { name: 'night', colors: ['#0d0c1d', '#1e1e2f'] }
  });

  const [error, setError] = useState(null);

  // Apply theme to body element
  useEffect(() => {
    document.body.classList.remove('dark-theme', 'light-theme');
    document.body.classList.add(`${weatherState.theme}-theme`);
    
    // Apply gradient background
    const gradient = weatherState.timeGradient;
    document.body.style.background = `linear-gradient(135deg, ${gradient.colors[0]} 0%, ${gradient.colors[1]} 50%, ${gradient.colors[0]} 100%)`;
  }, [weatherState.theme, weatherState.timeGradient]);

  // Determine day/night and twilight from weather API data
  const calculateTimeState = (weatherData) => {
    if (!weatherData || !weatherData.sys) return { isDaytime: true, isTwilight: false };

    const { dt, timezone, sys } = weatherData;
    const localTime = dt + timezone;
    const sunrise = sys.sunrise + timezone;
    const sunset = sys.sunset + timezone;
    
    const isDaytime = localTime > sunrise && localTime < sunset;
    const isTwilight = Math.abs(localTime - sunset) <= 1200 || Math.abs(localTime - sunrise) <= 1200;
    
    // Calculate local hour for gradient
    const localDate = new Date(localTime * 1000);
    const localHour = localDate.getHours();
    const timeGradient = getTimeBasedGradient(localHour);
    
    return { isDaytime, isTwilight, timeGradient };
  };

  // Update weather state and automatically determine theme
  const updateWeather = (weatherData, location) => {
    if (!weatherData) return;

    const weatherMain = weatherData.weather?.[0]?.main?.toLowerCase() || 'clear';
    const weatherDesc = weatherData.weather?.[0]?.description?.toLowerCase() || '';
    const { isDaytime, isTwilight, timeGradient } = calculateTimeState(weatherData);
    
    // Determine weather type for animations
    let weatherType = 'clear';
    if (weatherDesc.includes('rain') || weatherDesc.includes('drizzle')) {
      weatherType = 'rain';
    } else if (weatherDesc.includes('snow')) {
      weatherType = 'snow';
    } else if (weatherData.wind?.speed > 10) {
      weatherType = 'windy';
    } else if (weatherData.clouds?.all > 70) {
      weatherType = 'cloudy';
    } else if (weatherMain === 'clear' && !isDaytime) {
      weatherType = 'clear-night';
    } else {
      weatherType = weatherMain;
    }

    // Determine theme based on weather and time
    let theme = 'dark';
    if (weatherType === 'clear' && isDaytime && !isTwilight) {
      theme = 'light';
    } else if (weatherType === 'clear-night' || isTwilight) {
      theme = 'dark';
    } else if (weatherType === 'rain' || weatherType === 'snow') {
      theme = 'dark';
    } else {
      theme = isDaytime ? 'light' : 'dark';
    }

    setWeatherState(prev => ({
      ...prev,
      weatherType,
      isDaytime,
      isTwilight,
      location,
      temperature: weatherData.main?.temp,
      humidity: weatherData.main?.humidity,
      windSpeed: weatherData.wind?.speed,
      weatherData,
      theme,
      timeGradient
    }));

    setError(null);
  };

  const setErrorState = (errorMessage) => {
    setError(errorMessage);
    console.error('Weather Context Error:', errorMessage);
  };

  const clearError = () => {
    setError(null);
  };

  // Update theme manually
  const setTheme = (theme) => {
    setWeatherState(prev => ({
      ...prev,
      theme
    }));
  };

  // Update location
  const updateLocation = (location) => {
    setWeatherState(prev => ({
      ...prev,
      location
    }));
  };

  const value = {
    ...weatherState,
    updateWeather,
    setError: setErrorState,
    clearError,
    setTheme,
    updateLocation,
    error
  };

  return (
    <WeatherContext.Provider value={value}>
      {children}
    </WeatherContext.Provider>
  );
}; 