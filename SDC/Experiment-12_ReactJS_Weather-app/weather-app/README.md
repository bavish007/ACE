# 12. 🌤️ React Weather Services

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chart.js&logoColor=white)
![OpenWeatherMap](https://img.shields.io/badge/OpenWeatherMap-FF6B35?style=for-the-badge&logo=weather&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

---

### 🎯 AIM
To develop a weather information web application using React that fetches current and historical weather data from OpenWeatherMap API and visualizes it using Chart.js.

---

## 📖 DESCRIPTION

This experiment demonstrates how to create a real-time weather service using React.js. The application displays the current weather and temperature trends from the past 5 days in a graphical format. It utilizes OpenWeatherMap API for weather data and Chart.js for plotting charts.

### ✨ Key Features
- **🌡️ Real-Time Weather Data** - Current weather conditions
- **📊 Historical Trends** - 5-day temperature visualization
- **📈 Interactive Charts** - Chart.js integration
- **🎨 Canvas-Style UI** - Modern and clean layout
- **🔄 API Integration** - OpenWeatherMap API consumption

The project also includes a Canvas-style user interface using CSS for a modern and clean layout. This experiment helps in understanding API integration, asynchronous data fetching, chart rendering, and component-based UI design in React.

---

## 📁 PROJECT STRUCTURE

```
weather-app/
│
├── public/
│   └── index.html                     # 🌐 HTML template
│
├── src/
│   ├── components/
│   │   └── WeatherChart.js            # 📊 Chart.js graph component
│   ├── services/
│   │   └── weatherService.js          # 🌐 API service to fetch weather data
│   ├── App.js                         # 🚀 Main component with logic and UI
│   ├── App.css                        # 🎨 Canvas-style CSS styling
│   ├── index.js                       # 🏁 Entry point of the React app
│   └── index.css                      # 🌍 Global styles
│
├── package.json                       # 📦 Project metadata and dependencies
└── README.md                          # 📚 Project documentation
```

---

## 🚀 INSTALLATION & SETUP

### 📋 PREREQUISITES

| Requirement | Description |
|-------------|-------------|
| **Node.js & npm** | 📦 JavaScript runtime and package manager |
| **VS Code** | 💻 Code editor or any preferred IDE |
| **React & APIs** | 📚 Basic knowledge of React and APIs |

---

### 🔧 STEPS TO RUN THE PROJECT

#### **Step 1: Create Project using Create React App**
```bash
npx create-react-app weather-app
cd weather-app
```

#### **Step 2: Install Required Libraries**
```bash
npm install chart.js react-chartjs-2
```

#### **Step 3: Set Up File Structure**
Create folders: `src/components/` and `src/services/`

#### **Step 4: Implement Weather Service**
Inside `src/services/weatherService.js`, add API logic using OpenWeatherMap.

#### **Step 5: Create Chart Component**
Inside `src/components/WeatherChart.js`, implement a Line chart using Chart.js.

#### **Step 6: Build the App**
- Use `App.js` to integrate current and historical weather data.
- Style using `App.css` to achieve canvas-style card UI.

#### **Step 7: Run the Project**
```bash
npm start
```

#### **Step 8: Visit in Browser**
```
🌐 http://localhost:3000
```

---

## 🌤️ WEATHER FEATURES

### 📊 **Data Visualization**

| Feature | Implementation | Purpose |
|---------|----------------|---------|
| **🌡️ Current Weather** | Real-time API call | Display current conditions |
| **📈 Temperature Trends** | 5-day historical data | Show temperature patterns |
| **📊 Interactive Charts** | Chart.js line graphs | Visual data representation |
| **🎨 Canvas UI** | CSS styling | Modern card-based layout |

---

## 🔌 API INTEGRATION

### 🌐 **OpenWeatherMap API**

#### Current Weather Endpoint
```
https://api.openweathermap.org/data/2.5/weather
```

#### Historical Weather Endpoint
```
https://api.openweathermap.org/data/2.5/forecast
```

#### Required Parameters
| Parameter | Description |
|-----------|-------------|
| **API Key** | 🔑 Your OpenWeatherMap API key |
| **City** | 🏙️ Location for weather data |
| **Units** | 🌡️ Temperature units (metric/imperial) |

---

## 📊 CHART IMPLEMENTATION

### 📈 **Chart.js Configuration**

#### Chart Types Used
- **📉 Line Chart** - Temperature trends over time
- **📊 Bar Chart** - Daily temperature comparison
- **🎯 Responsive Design** - Mobile-friendly charts

#### Chart Features
| Feature | Purpose |
|---------|---------|
| **🎨 Custom Styling** | Branded color scheme |
| **📱 Responsive** | Mobile and desktop compatible |
| **⚡ Real-time Updates** | Dynamic data loading |
| **🖱️ Interactive** | Hover effects and tooltips |

---

## 🔍 HOW IT WORKS

### 🌤️ **Weather App Flow**
1. **🚀 App Initialization** - React app loads with default city
2. **🌐 API Call** - Fetch current weather data
3. **📊 Data Processing** - Format data for chart rendering
4. **📈 Chart Rendering** - Display temperature trends
5. **🔄 Real-time Updates** - Refresh data periodically

### 🎨 **UI Components**
| Component | Responsibility |
|-----------|----------------|
| **App.js** | Main logic and state management |
| **WeatherChart.js** | Chart rendering and visualization |
| **weatherService.js** | API calls and data fetching |

---

## 🛠️ Technologies Used

- **⚛️ React.js** - Frontend framework
- **📊 Chart.js** - Data visualization library
- **🌐 react-chartjs-2** - React wrapper for Chart.js
- **🌤️ OpenWeatherMap API** - Weather data source
- **🎨 CSS3** - Canvas-style UI design
- **📦 npm** - Package management

---

## 📚 Key Features Implemented

### Core Functionality
| Feature | Implementation |
|---------|----------------|
| **🌡️ Current Weather** | Real-time temperature display |
| **📅 5-Day Forecast** | Historical temperature trends |
| **📊 Data Visualization** | Interactive Chart.js graphs |
| **🎨 Modern UI** | Canvas-style card design |
| **📱 Responsive Design** | Mobile-friendly interface |

---

## 🎯 Learning Objectives

- ✅ Integrate third-party APIs in React
- ✅ Handle asynchronous data fetching
- ✅ Implement data visualization with Chart.js
- ✅ Create responsive UI components
- ✅ Manage application state effectively
- ✅ Style with modern CSS techniques
- ✅ Handle API errors and loading states

---

## 🔧 Configuration

### 🔑 **API Setup**
1. **Register** at [OpenWeatherMap](https://openweathermap.org/api)
2. **Get API Key** from your dashboard
3. **Add to Environment** variables or service file
4. **Configure Endpoints** in weatherService.js

---

## 📦 Package Dependencies

### Core Dependencies
```json
{
  "react": "React library for building UI",
  "react-dom": "React DOM rendering",
  "chart.js": "Chart.js for data visualization",
  "react-chartjs-2": "React wrapper for Chart.js"
}
```

---

## 🌐 Available Scripts

| Command | Purpose |
|---------|---------|
| `npm start` | 🚀 Start development server |
| `npm build` | 📦 Build for production |
| `npm test` | 🧪 Run test suite |
| `npm eject` | ⚙️ Eject from Create React App |

---

## 🚀 Getting Started

### Quick Start Commands
```bash
# Create new React app
npx create-react-app weather-app

# Navigate to project
cd weather-app

# Install Chart.js
npm install chart.js react-chartjs-2

# Start development server
npm start
```

---

## 📄 LICENSE

```
MIT License

This project is licensed under the MIT License.
See LICENSE file for details.
```

---

## 👨‍💻 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

<div align="center">

⭐ **Star this repository if it helped you!** ⭐

</div>
