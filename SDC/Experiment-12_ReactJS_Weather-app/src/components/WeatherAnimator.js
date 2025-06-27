import React from 'react';
import { useWeather } from '../context/WeatherContext';

const WeatherAnimator = () => {
  const { weatherType, isDaytime, isTwilight, theme } = useWeather();

  const renderWeatherAnimation = () => {
    switch (weatherType) {
      case 'rain':
        return (
          <div className="weather-animation rain-animation">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="raindrop"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${0.5 + Math.random() * 0.5}s`
                }}
              />
            ))}
          </div>
        );

      case 'snow':
        return (
          <div className="weather-animation snow-animation">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="snowflake"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${3 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>
        );

      case 'windy':
        return (
          <div className="weather-animation wind-animation">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="wind-particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${2 + Math.random() * 1}s`
                }}
              />
            ))}
          </div>
        );

      case 'cloudy':
        return (
          <div className="weather-animation cloud-animation">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="cloud-layer"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${10 + Math.random() * 20}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${20 + Math.random() * 10}s`,
                  opacity: 0.3 + Math.random() * 0.4
                }}
              >
                <svg viewBox="0 0 200 60" className="cloud-svg">
                  <defs>
                    <radialGradient id={`cloudGradient${i}`} cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="rgba(255,255,255,0.8)" />
                      <stop offset="100%" stopColor="rgba(255,255,255,0.2)" />
                    </radialGradient>
                  </defs>
                  <path
                    d="M20,40 Q40,20 60,40 Q80,20 100,40 Q120,20 140,40 Q160,20 180,40 L180,50 Q160,60 140,50 Q120,60 100,50 Q80,60 60,50 Q40,60 20,50 Z"
                    fill={`url(#cloudGradient${i})`}
                    filter="blur(1px)"
                  />
                </svg>
              </div>
            ))}
          </div>
        );

      case 'clear-night':
        return (
          <div className="weather-animation night-animation">
            <div className="moon" />
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="star"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${1 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>
        );

      case 'clear':
        if (isDaytime) {
          return (
            <div className="weather-animation sun-animation">
              <div className="sun" />
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className="sunbeam"
                  style={{
                    transform: `rotate(${i * 36}deg)`,
                    animationDelay: `${i * 0.1}s`
                  }}
                />
              ))}
            </div>
          );
        }
        return null;

      default:
        return null;
    }
  };

  // Render starfield overlay for night/twilight
  const renderStarfieldOverlay = () => {
    if (!isDaytime || isTwilight) {
      return (
        <div className="starfield-overlay">
          <div className="moon"></div>
          <div className="stars"></div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className={`weather-animator ${theme}-theme`}>
      {renderWeatherAnimation()}
      {renderStarfieldOverlay()}
    </div>
  );
};

export default WeatherAnimator; 