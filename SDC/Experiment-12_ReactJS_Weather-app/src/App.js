import React, { useState } from 'react';
import './App.css';
import { WeatherProvider, useWeather } from './context/WeatherContext';
import Map2D from './components/Map2D';
import GlobeMap from './components/GlobeMap';
import WeatherInfo from './components/WeatherInfo';
import ViewModeSwitcher from './components/ViewModeSwitcher';
import WeatherAnimator from './components/WeatherAnimator';
import ThemeSwitcher from './components/ThemeSwitcher';

const AppContent = () => {
  const [viewMode, setViewMode] = useState('2d');
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const { theme, error } = useWeather();

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
  };

  const handleWeatherData = (data) => {
    setWeatherData(data);
  };

  const handleViewChange = (newView) => {
    setViewMode(newView);
  };

  return (
    <div className={`App ${theme}-theme`}>
      <WeatherAnimator />
      
      <header className="app-header">
        <div className="header-content">
          <h1 className="app-title">Weathering with You</h1>
          <div className="header-controls">
            <ViewModeSwitcher 
              currentView={viewMode} 
              onViewChange={handleViewChange} 
            />
            <ThemeSwitcher />
          </div>
        </div>
      </header>

      {error && (
        <div className="error-banner">
          <span>{error}</span>
          <button onClick={() => window.location.reload()} className="retry-btn">
            Retry
          </button>
        </div>
      )}

      <main className="app-main">
        <div className="map-section">
          {viewMode === '2d' ? (
            <Map2D onLocationSelect={handleLocationSelect} />
          ) : (
            <GlobeMap 
              onLocationSelect={handleLocationSelect}
              weatherData={weatherData}
            />
          )}
        </div>

        <div className="weather-section">
          <WeatherInfo 
            location={selectedLocation}
            onWeatherData={handleWeatherData}
          />
        </div>
      </main>

      <footer className="app-footer">
        <p>&copy; 2025 Weathering with You. Powered by OpenWeatherMap API.</p>
      </footer>
    </div>
  );
};

function App() {
  return (
    <WeatherProvider>
      <AppContent />
    </WeatherProvider>
  );
}

export default App;
