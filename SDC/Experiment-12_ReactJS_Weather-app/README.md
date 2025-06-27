# 🌤️ Weathering with You - Advanced React Weather Application

<div align="center">

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Three.js](https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=three.js&logoColor=white)
![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chart.js&logoColor=white)
![Leaflet](https://img.shields.io/badge/Leaflet-199900?style=for-the-badge&logo=leaflet&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

*Advanced Weather Visualization Platform*

</div>

---

## 🎯 Overview

An immersive weather visualization platform that transforms traditional weather data into stunning 3D experiences. Built with cutting-edge React technologies, this application features interactive globes, real-time animations, and intelligent theming that responds to weather conditions and time of day.

## 🌟 Signature Features

- **Interactive 3D Globe** - Navigate weather patterns on a responsive 3D Earth
- **Dynamic Weather Animations** - Real-time visual effects matching current conditions
- **Intelligent Theming** - Adaptive UI that responds to time and weather
- **Advanced Data Visualization** - Interactive charts and forecasting analytics
- **Dual-View System** - Seamless switching between 2D maps and 3D globe
- **Atmospheric Effects** - Immersive animations for rain, snow, wind, and celestial events

---

## 🚀 Technology Stack

### Core Framework
- **React.js** v18.2.0 - Modern component architecture
- **React Context API** - Global state management
- **Axios** v1.6.0 - HTTP client for API integration

### Visualization Libraries
- **Three.js** v0.150.1 - 3D graphics and rendering engine
- **react-globe.gl** v2.28.0 - Interactive 3D globe component
- **Leaflet.js** v1.9.4 - 2D mapping and geospatial visualization
- **react-leaflet** v4.2.1 - React integration for Leaflet maps

### Data & Charts
- **Chart.js** v4.4.0 - Advanced data visualization
- **react-chartjs-2** v5.2.0 - React wrapper for Chart.js
- **OpenWeatherMap API** - Real-time weather data integration

### Styling & Animation
- **CSS3** - Advanced animations and responsive design
- **Canvas API** - Custom weather effect rendering

---

## 🏗️ Architecture

```
Experiment-12_ReactJS_Weather-app/
├── output/                    # Visual demonstrations
├── public/
│   ├── index.html            # Application template
│   ├── favicon.ico           # Branding assets
│   └── manifest.json         # PWA configuration
├── src/
│   ├── App.js               # Main application orchestrator
│   ├── App.css              # Global theming system
│   ├── index.js             # React DOM entry point
│   ├── context/
│   │   └── WeatherContext.js # Global weather state management
│   ├── components/
│   │   ├── WeatherInfo.js   # Weather data visualization
│   │   ├── Map2D.js         # Leaflet map integration
│   │   ├── GlobeMap.js      # Three.js globe component
│   │   ├── WeatherAnimator.js# Dynamic weather effects
│   │   ├── ThemeSwitcher.js # Adaptive theming system
│   │   └── ViewModeSwitcher.js# 2D/3D view controller
│   └── assets/              # Static resources & animations
├── package.json             # Dependencies & build configuration
└── README.md               # Technical documentation
```

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** v16+
- **npm** or **yarn**
- **OpenWeatherMap API Key** (free registration required)

### Environment Setup

Create a `.env` file in the root directory:
```env
REACT_APP_WEATHER_API_KEY=your_openweathermap_api_key
REACT_APP_API_BASE_URL=https://api.openweathermap.org/data/2.5
```

### Installation & Launch

```bash
# Install dependencies
npm install

# Start development server
npm start

# Application available at http://localhost:3000
```

### Production Deployment

```bash
# Create optimized build
npm run build

# Deploy to hosting platform
npm run deploy
```

---

## 🌈 Interactive Experience

<details>
<summary>🏠 Dashboard Overview</summary>

![Home Interface](output/Home.png)
*Modern dashboard featuring search functionality, quick weather access, and intuitive navigation*

</details>

<details>
<summary>📊 Advanced Analytics</summary>

![Weather Statistics](output/Weather_stats.png)
*Comprehensive weather metrics with interactive charts, trend analysis, and forecast visualization*

</details>

<details>
<summary>🌍 3D Globe Experience</summary>

![3D Weather Globe](output/Weather_stats_in_3D.png)
*Immersive 3D globe with real-time weather overlays, atmospheric effects, and interactive navigation*

</details>

---

## 🎨 Advanced Features

### 🌍 Interactive Mapping System
- **3D Globe Navigation** - Auto-rotating Earth with smooth camera controls
- **Location-Based Weather** - Real-time data visualization on geographic coordinates
- **Weather Overlay Systems** - Satellite imagery, precipitation, and wind patterns
- **Zoom & Pan Controls** - Intuitive navigation with location search integration

### 🌦️ Dynamic Weather Animations
- **Precipitation Effects** - Realistic rain and snow animations with varying intensity
- **Atmospheric Conditions** - Wind particles, cloud movement, and visibility effects
- **Celestial Animation** - Day/night cycles with moon phases and star fields
- **Weather Transitions** - Smooth animations between different weather states

### 🎭 Intelligent Theming Engine
- **Time-Responsive Gradients** - Automatic color schemes based on local time
- **Weather-Adaptive Styling** - UI elements that respond to current conditions
- **Mood-Based Interfaces** - Visual atmosphere matching weather personality
- **User-Controlled Themes** - Manual light/dark mode with preference persistence

### 📈 Data Visualization & Analytics
- **Real-Time Weather Metrics** - Temperature, humidity, pressure, wind speed
- **Extended Forecasting** - 5-day predictions with trend analysis
- **Interactive Charts** - Clickable data points with detailed information
- **Historical Comparisons** - Weather pattern analysis and seasonal trends

---

## 🔧 Technical Implementation

### State Management Architecture
```jsx
// Weather Context Provider
const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [theme, setTheme] = useState('auto');
  
  return (
    <WeatherContext.Provider value={{
      weatherData, setWeatherData,
      currentLocation, setCurrentLocation,
      theme, setTheme
    }}>
      {children}
    </WeatherContext.Provider>
  );
};
```

### 3D Globe Integration
```jsx
// Globe Component with Three.js
const GlobeMap = () => {
  const globeRef = useRef();
  
  useEffect(() => {
    // Initialize Three.js scene
    const globe = new ThreeGlobe()
      .globeImageUrl('/earth-texture.jpg')
      .atmosphereColor('#ffffff')
      .atmosphereAltitude(0.1);
    
    // Add weather data points
    globe.pointsData(weatherLocations)
      .pointColor(location => getWeatherColor(location.weather));
  }, []);
  
  return <Globe ref={globeRef} />;
};
```

### Weather Animation System
```jsx
// Dynamic weather effects
const WeatherAnimator = ({ weatherType, intensity }) => {
  const canvasRef = useRef();
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    const animateWeather = () => {
      // Render weather particles based on type
      switch(weatherType) {
        case 'rain':
          renderRaindrops(ctx, intensity);
          break;
        case 'snow':
          renderSnowflakes(ctx, intensity);
          break;
        default:
          renderClearSky(ctx);
      }
    };
    
    const animation = requestAnimationFrame(animateWeather);
    return () => cancelAnimationFrame(animation);
  }, [weatherType, intensity]);
  
  return <canvas ref={canvasRef} className="weather-animation" />;
};
```

---

## 🎯 Performance Optimizations

### Rendering Efficiency
- **React.memo** - Component memoization for expensive renders
- **useCallback** - Function memoization for event handlers
- **Lazy Loading** - Code splitting for 3D components
- **WebGL Optimization** - Efficient Three.js rendering pipeline

### Data Management
- **API Response Caching** - Intelligent weather data caching
- **Debounced Search** - Optimized location search requests
- **Progressive Loading** - Staged data loading for better UX
- **Error Boundaries** - Graceful error handling and recovery

---

## 🌟 User Experience Design

### Accessibility Features
- **WCAG 2.1 Compliance** - Full accessibility standard adherence
- **Keyboard Navigation** - Complete keyboard interaction support
- **Screen Reader Support** - Comprehensive ARIA labels and descriptions
- **High Contrast Themes** - Accessibility-focused color schemes

### Responsive Design
- **Mobile-First Architecture** - Optimized for all screen sizes
- **Touch Interactions** - Gesture support for mobile devices
- **Adaptive Layouts** - Flexible component arrangements
- **Performance Monitoring** - Real-time performance metrics

---

## 🎓 Technical Learning Outcomes

This project demonstrates advanced frontend development skills:

- **3D Graphics Programming** - Three.js integration and WebGL optimization
- **Real-Time Data Visualization** - Live weather data processing and display
- **Advanced React Patterns** - Context API, custom hooks, and performance optimization
- **API Integration** - RESTful service consumption and error handling
- **Responsive Design** - Cross-platform compatibility and mobile optimization
- **Animation Systems** - Complex CSS and Canvas-based animations

---

<div align="center">

## 🔗 Connect

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/bavish007)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/bavishreddymuske)

---

*Built with ❤️ by M. Bavish Reddy*

© 2025 M. Bavish Reddy. All rights reserved.

</div>
