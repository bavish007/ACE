import React from 'react';
import { useWeather } from '../context/WeatherContext';

const ThemeSwitcher = () => {
  const { theme, setTheme, isDaytime, isTwilight, timeGradient } = useWeather();

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  const getTimeLabel = () => {
    if (isTwilight) {
      return isDaytime ? 'Dawn' : 'Dusk';
    }
    return timeGradient.name.charAt(0).toUpperCase() + timeGradient.name.slice(1);
  };

  return (
    <div className="theme-switcher">
      <div className="time-indicator">
        <span className="time-label">{getTimeLabel()}</span>
        <div 
          className="gradient-preview"
          style={{
            background: `linear-gradient(45deg, ${timeGradient.colors[0]}, ${timeGradient.colors[1]})`
          }}
        />
      </div>
      <button 
        className={`theme-toggle-btn ${theme}-theme`}
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
      >
        <div className="theme-icon">
          {theme === 'dark' ? (
            <span className="sun-icon">☀️</span>
          ) : (
            <span className="moon-icon">🌙</span>
          )}
        </div>
        <span className="theme-label">
          {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </span>
      </button>
    </div>
  );
};

export default ThemeSwitcher; 