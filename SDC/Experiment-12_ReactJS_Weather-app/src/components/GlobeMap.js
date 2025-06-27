import React, { useRef, useEffect, useState } from 'react';
import Globe from 'react-globe.gl';
import axios from 'axios';
import { useWeather } from '../context/WeatherContext';

const API_KEY = "171e009cae7e126fcbcec49c3a5cee6a";

const GlobeMap = ({ onLocationSelect, weatherData }) => {
  const globeEl = useRef();
  const [searchQuery, setSearchQuery] = useState('');
  const [markers, setMarkers] = useState([]);
  const [loading, setLoading] = useState(false);
  const { setError, clearError } = useWeather();

  useEffect(() => {
    if (globeEl.current) {
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 0.5;
    }
  }, []);

  const searchLocation = async () => {
    if (!searchQuery.trim()) return;

    setLoading(true);
    clearError();

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/geo/1.0/direct`,
        {
          params: {
            q: searchQuery,
            limit: 1,
            appid: API_KEY
          },
          headers: {
            Accept: "application/json"
          }
        }
      );

      if (response.data && response.data.length > 0) {
        const location = response.data[0];
        const { lat, lon, name, country } = location;

        // Add marker
        const newMarker = {
          lat,
          lng: lon,
          size: 0.5,
          color: '#00ffff',
          label: `${name}, ${country}`
        };

        setMarkers([newMarker]);

        // Rotate globe to location
        globeEl.current.pointOfView({
          lat,
          lng: lon,
          altitude: 2
        }, 1000);

        // Call parent callback
        onLocationSelect({ lat, lon, name, country });
      } else {
        setError("Location not found. Please try a different search term.");
      }
    } catch (error) {
      console.error('❌ Error searching location:', error.response || error.message || error);
      setError("⚠️ Could not search for location. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      searchLocation();
    }
  };

  return (
    <div className="globe-container">
      <div className="globe-search">
        <input
          type="text"
          placeholder="Search for a city..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          className="globe-search-input"
          disabled={loading}
        />
        <button 
          onClick={searchLocation} 
          className="globe-search-btn"
          disabled={loading}
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </div>
      
      <Globe
        ref={globeEl}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        pointsData={markers}
        pointColor="color"
        pointLabel="label"
        pointAltitude={0.01}
        pointRadius="size"
        atmosphereColor="#00ffff"
        atmosphereAltitude={0.15}
        width={800}
        height={600}
      />
    </div>
  );
};

export default GlobeMap; 