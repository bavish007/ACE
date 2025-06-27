import React, { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import axios from 'axios';
import { useWeather } from '../context/WeatherContext';
import 'leaflet/dist/leaflet.css';

// Fix for default markers in react-leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const API_KEY = "171e009cae7e126fcbcec49c3a5cee6a";

// Custom marker icon
const customIcon = new L.Icon({
  iconUrl: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyQzIgMTcuNTIgNi40OCAyMiAxMiAyMkMxNy41MiAyMiAyMiAxNy41MiAyMiAxMkMyMiA2LjQ4IDE3LjUyIDIgMTIgMloiIGZpbGw9IiMwMGZmZmYiLz4KPHBhdGggZD0iTTEyIDZDNi40OCA2IDIgMTAuNDggMiAxNkMyIDIxLjUyIDYuNDggMjYgMTIgMjZDMjEuNTIgMjYgMjYgMjEuNTIgMjYgMTZDMjYgMTAuNDggMjEuNTIgNiAxMiA2WiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDA5OWNjIiBzdHJva2Utd2lkdGg9IjIiLz4KPC9zdmc+',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

// Component to handle map center updates
function MapUpdater({ center }) {
  const map = useMap();
  
  useEffect(() => {
    if (center) {
      map.setView(center, 10);
    }
  }, [center, map]);
  
  return null;
}

const Map2D = ({ onLocationSelect }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [markers, setMarkers] = useState([]);
  const [center, setCenter] = useState([20, 0]);
  const [isSatellite, setIsSatellite] = useState(false);
  const [loading, setLoading] = useState(false);
  const { setError } = useWeather();

  const searchLocation = async () => {
    if (!searchQuery.trim()) return;

    setLoading(true);
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

        const newMarker = {
          position: [lat, lon],
          popup: `${name}, ${country}`,
          location: { lat, lon, name, country }
        };

        setMarkers([newMarker]);
        setCenter([lat, lon]);
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

  const toggleSatellite = () => {
    setIsSatellite(!isSatellite);
  };

  return (
    <div className="map-2d-container">
      <div className="map-controls">
        <div className="search-section">
          <input
            type="text"
            placeholder="Search for a city..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            className="map-search-input"
            disabled={loading}
          />
          <button 
            onClick={searchLocation} 
            className="map-search-btn"
            disabled={loading}
          >
            {loading ? 'Searching...' : 'Search'}
          </button>
        </div>
        
        <div className="map-options">
          <button 
            className={`satellite-toggle ${isSatellite ? 'active' : ''}`}
            onClick={toggleSatellite}
          >
            {isSatellite ? '🗺️ Map' : '🛰️ Satellite'}
          </button>
        </div>
      </div>
      
      <div className="map-content">
        <MapContainer
          center={center}
          zoom={2}
          style={{ height: '100%', width: '100%' }}
          className="leaflet-map"
        >
          <MapUpdater center={center} />
          
          {isSatellite ? (
            <TileLayer
              url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
              attribution='Tiles © Esri — Source: Esri, Maxar, Earthstar Geographics, CNES/Airbus DS, USDA, USGS, AeroGRID, IGN, and the GIS User Community'
            />
          ) : (
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
          )}
          
          {markers.map((marker, index) => (
            <Marker
              key={index}
              position={marker.position}
              icon={customIcon}
              eventHandlers={{
                click: () => {
                  if (marker.location) {
                    onLocationSelect(marker.location);
                  }
                }
              }}
            >
              <Popup>{marker.popup}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Map2D; 