// Weathering You - Dynamic Weather Visualization - Enhanced ES6 Version
class WeatherVisualization {
    constructor() {
        this.apiKey = 'demo'; // Using demo data since we don't have a real API key
        this.toast = null;
        this.temperatureChart = null;
        this.humidityWindChart = null;
        this.animationContainer = null;
        this.currentWeather = null;
        this.currentCity = null;
        this.isInitialized = false;
        this.map = null;
        this.currentMarker = null;
        this.init();
    }

    init() {
        this.initializeToast();
        this.bindEvents();
        this.initializeAnimationContainer();
        this.initializeApp();
    }

    initializeToast() {
        this.toast = new bootstrap.Toast(document.getElementById('notificationToast'));
    }

    initializeAnimationContainer() {
        this.animationContainer = document.getElementById('weatherAnimationContainer');
    }

    bindEvents() {
        // Search button
        document.getElementById('searchBtn').addEventListener('click', () => {
            this.searchWeather();
        });

        // Enter key in search input
        document.getElementById('cityInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.searchWeather();
            }
        });

        // Input focus to clear placeholder
        document.getElementById('cityInput').addEventListener('focus', () => {
            if (!this.isInitialized) {
                document.getElementById('cityInput').value = '';
                this.isInitialized = true;
            }
        });

        // Map control buttons
        document.getElementById('zoomInBtn').addEventListener('click', () => {
            if (this.map) {
                this.map.zoomIn();
            }
        });

        document.getElementById('zoomOutBtn').addEventListener('click', () => {
            if (this.map) {
                this.map.zoomOut();
            }
        });

        document.getElementById('locateBtn').addEventListener('click', () => {
            this.locateUser();
        });
    }

    async initializeApp() {
        // Try to get user's location first
        if (navigator.geolocation) {
            try {
                const position = await this.getCurrentPosition();
                const { latitude, longitude } = position.coords;
                await this.getWeatherByCoordinates(latitude, longitude);
            } catch (error) {
                console.log('Geolocation not available or denied:', error);
                this.showWelcomeState();
            }
        } else {
            this.showWelcomeState();
        }
    }

    getCurrentPosition() {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject, {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 60000
            });
        });
    }

    async getWeatherByCoordinates(lat, lon) {
        // Simulate reverse geocoding to get city name
        const cities = ['New York', 'London', 'Tokyo', 'Paris', 'Sydney', 'Mumbai', 'Berlin', 'Rome'];
        const randomCity = cities[Math.floor(Math.random() * cities.length)];
        
        await this.searchWeatherByCity(randomCity, lat, lon);
    }

    showWelcomeState() {
        // Clear the input and show welcome message
        const cityInput = document.getElementById('cityInput');
        cityInput.value = '';
        cityInput.placeholder = 'Enter city name to get started...';
        
        // Show welcome message
        this.showNotification('Welcome! Enter a city name to get weather information.', 'info');
    }

    async searchWeather() {
        const cityInput = document.getElementById('cityInput');
        const city = cityInput.value.trim();
        
        if (!city) {
            this.showNotification('Please enter a city name', 'warning');
            return;
        }

        await this.searchWeatherByCity(city);
    }

    async searchWeatherByCity(city, lat = null, lon = null) {
        this.showLoading(true);
        this.hideError();

        try {
            // Simulate API call with demo data
            const weatherData = await this.getWeatherData(city);
            this.currentWeather = weatherData;
            this.currentCity = city;
            
            // Store the city in localStorage for persistence
            localStorage.setItem('lastSearchedCity', city);
            
            this.displayWeatherData(weatherData);
            this.applyWeatherTheme(weatherData);
            
            // Update map with new location
            if (lat && lon) {
                this.updateMapLocation(lat, lon, city, weatherData);
            } else {
                // Generate random coordinates for demo
                const demoLat = 40.7128 + (Math.random() - 0.5) * 20;
                const demoLon = -74.0060 + (Math.random() - 0.5) * 20;
                this.updateMapLocation(demoLat, demoLon, city, weatherData);
            }
            
            this.showNotification(`Weather data loaded for ${city}`, 'success');
        } catch (error) {
            this.showError('Failed to fetch weather data. Please try again.');
            console.error('Weather API Error:', error);
        } finally {
            this.showLoading(false);
        }
    }

    async getWeatherData(city) {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Generate demo weather data
        return this.generateDemoWeatherData(city);
    }

    generateDemoWeatherData(city) {
        const weatherConditions = [
            { name: 'Clear', icon: 'fa-sun', temp: 25, humidity: 45, wind: 8, intensity: 'light' },
            { name: 'Cloudy', icon: 'fa-cloud', temp: 18, humidity: 65, wind: 12, intensity: 'medium' },
            { name: 'Rainy', icon: 'fa-cloud-rain', temp: 12, humidity: 85, wind: 15, intensity: 'heavy' },
            { name: 'Partly Cloudy', icon: 'fa-cloud-sun', temp: 22, humidity: 55, wind: 10, intensity: 'light' },
            { name: 'Sunny', icon: 'fa-sun', temp: 28, humidity: 40, wind: 6, intensity: 'light' },
            { name: 'Windy', icon: 'fa-wind', temp: 20, humidity: 50, wind: 25, intensity: 'heavy' },
            { name: 'Stormy', icon: 'fa-bolt', temp: 15, humidity: 90, wind: 30, intensity: 'heavy' }
        ];

        const currentCondition = weatherConditions[Math.floor(Math.random() * weatherConditions.length)];
        
        // Generate 5-day forecast
        const forecast = [];
        for (let i = 1; i <= 5; i++) {
            const condition = weatherConditions[Math.floor(Math.random() * weatherConditions.length)];
            const date = new Date();
            date.setDate(date.getDate() + i);
            
            forecast.push({
                date: date,
                temp: condition.temp + Math.floor(Math.random() * 10) - 5,
                condition: condition.name,
                icon: condition.icon,
                humidity: condition.humidity + Math.floor(Math.random() * 20) - 10,
                wind: condition.wind + Math.floor(Math.random() * 8) - 4
            });
        }

        return {
            city: city,
            country: this.getRandomCountry(),
            current: {
                temp: currentCondition.temp,
                feels_like: currentCondition.temp + Math.floor(Math.random() * 6) - 3,
                humidity: currentCondition.humidity,
                wind_speed: currentCondition.wind,
                description: currentCondition.name,
                icon: currentCondition.icon,
                intensity: currentCondition.intensity,
                visibility: 10,
                pressure: 1013 + Math.floor(Math.random() * 20) - 10
            },
            forecast: forecast
        };
    }

    getRandomCountry() {
        const countries = ['US', 'UK', 'CA', 'AU', 'DE', 'FR', 'JP', 'IN', 'BR', 'IT'];
        return countries[Math.floor(Math.random() * countries.length)];
    }

    // Map functionality
    initializeMap() {
        if (this.map) {
            this.map.remove();
        }

        // Initialize map with default location (New York)
        this.map = L.map('weatherMap').setView([40.7128, -74.0060], 10);

        // Add OpenStreetMap tiles
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors',
            maxZoom: 18
        }).addTo(this.map);

        // Add map controls
        this.map.on('zoomend', () => {
            this.updateMapInfo();
        });

        this.map.on('moveend', () => {
            this.updateMapInfo();
        });
    }

    updateMapLocation(lat, lon, city, weatherData) {
        if (!this.map) {
            this.initializeMap();
        }

        // Remove existing marker
        if (this.currentMarker) {
            this.map.removeLayer(this.currentMarker);
        }

        // Add new marker
        const customIcon = L.divIcon({
            className: 'custom-marker',
            html: `<div style="background: #e74c3c; color: white; border-radius: 50%; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; font-size: 20px; box-shadow: 0 2px 10px rgba(0,0,0,0.3);">
                    <i class="fas fa-map-marker-alt"></i>
                   </div>`,
            iconSize: [40, 40],
            iconAnchor: [20, 40]
        });

        this.currentMarker = L.marker([lat, lon], { icon: customIcon }).addTo(this.map);

        // Create popup content
        const popupContent = `
            <div class="weather-popup">
                <div class="popup-icon">
                    <i class="fas ${weatherData.current.icon}"></i>
                </div>
                <div class="popup-temp">${weatherData.current.temp}°C</div>
                <div class="popup-desc">${weatherData.current.description}</div>
                <div class="popup-location">${city}</div>
            </div>
        `;

        this.currentMarker.bindPopup(popupContent);

        // Center map on new location
        this.map.setView([lat, lon], 12);

        // Update map info
        this.updateMapInfo(lat, lon, city);
    }

    updateMapInfo(lat = null, lon = null, city = null) {
        const mapLocation = document.getElementById('mapLocation');
        const mapCoordinates = document.getElementById('mapCoordinates');

        if (lat && lon && city) {
            mapLocation.textContent = city;
            mapCoordinates.textContent = `Lat: ${lat.toFixed(4)}, Lon: ${lon.toFixed(4)}`;
        } else if (this.map) {
            const center = this.map.getCenter();
            const zoom = this.map.getZoom();
            mapLocation.textContent = 'Map centered on current view';
            mapCoordinates.textContent = `Lat: ${center.lat.toFixed(4)}, Lon: ${center.lng.toFixed(4)}, Zoom: ${zoom}`;
        }
    }

    async locateUser() {
        if (navigator.geolocation) {
            try {
                this.showNotification('Getting your location...', 'info');
                const position = await this.getCurrentPosition();
                const { latitude, longitude } = position.coords;
                
                // Update map to user location
                this.map.setView([latitude, longitude], 15);
                
                // Add user location marker
                const userIcon = L.divIcon({
                    className: 'user-marker',
                    html: `<div style="background: #2ecc71; color: white; border-radius: 50%; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; font-size: 20px; box-shadow: 0 2px 10px rgba(0,0,0,0.3);">
                            <i class="fas fa-crosshairs"></i>
                           </div>`,
                    iconSize: [40, 40],
                    iconAnchor: [20, 40]
                });

                const userMarker = L.marker([latitude, longitude], { icon: userIcon }).addTo(this.map);
                userMarker.bindPopup('<div class="weather-popup"><div class="popup-desc">Your Location</div></div>');

                this.updateMapInfo(latitude, longitude, 'Your Location');
                this.showNotification('Location found!', 'success');
            } catch (error) {
                this.showNotification('Unable to get your location', 'warning');
                console.error('Geolocation error:', error);
            }
        } else {
            this.showNotification('Geolocation is not supported by this browser', 'warning');
        }
    }

    applyWeatherTheme(weatherData) {
        const body = document.getElementById('weatherBody');
        const weatherCard = document.querySelector('.weather-card');
        const current = weatherData.current;
        
        // Get current time for day/night detection
        const now = new Date();
        const hour = now.getHours();
        const isNight = hour < 7 || hour >= 19;

        // Clear previous themes
        body.className = 'bg-gradient';
        weatherCard.className = 'card weather-card';

        // Apply day/night theme first
        if (isNight) {
            body.classList.add('theme-night');
            weatherCard.classList.add('theme-night');
            this.createNightAnimation();
        } else {
            body.classList.add('theme-day');
            weatherCard.classList.add('theme-day');
        }

        // Apply weather-specific theme
        if (current.description.toLowerCase().includes('rain') || current.description.toLowerCase().includes('storm')) {
            body.classList.add('bg-rainy');
            weatherCard.classList.add('rainy');
            this.createRainAnimation(current.intensity);
        } else if (current.description.toLowerCase().includes('cloud')) {
            body.classList.add('bg-cloudy');
            weatherCard.classList.add('cloudy');
            this.createCloudAnimation();
        } else if (current.description.toLowerCase().includes('wind')) {
            body.classList.add('bg-windy');
            weatherCard.classList.add('windy');
            this.createWindAnimation();
        } else if (current.description.toLowerCase().includes('sun') || current.description.toLowerCase().includes('clear')) {
            body.classList.add('bg-sunny');
            if (!isNight) {
                this.createSunAnimation();
            }
        }
    }

    createNightAnimation() {
        this.clearAnimations();
        
        // Create stars
        for (let i = 0; i < 50; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 60 + '%';
            star.style.animationDelay = Math.random() * 3 + 's';
            star.style.animationDuration = (2 + Math.random() * 2) + 's';
            this.animationContainer.appendChild(star);
        }

        // Create moon
        const moon = document.createElement('div');
        moon.className = 'moon';
        this.animationContainer.appendChild(moon);
    }

    createRainAnimation(intensity) {
        this.clearAnimations();
        
        const rainCount = intensity === 'heavy' ? 50 : intensity === 'medium' ? 30 : 20;
        const rainClass = intensity === 'heavy' ? 'rain-heavy' : intensity === 'medium' ? 'rain' : 'rain-light';
        
        for (let i = 0; i < rainCount; i++) {
            const raindrop = document.createElement('div');
            raindrop.className = `rain ${rainClass}`;
            raindrop.style.left = Math.random() * 100 + '%';
            raindrop.style.animationDelay = Math.random() * 2 + 's';
            this.animationContainer.appendChild(raindrop);
        }
    }

    createCloudAnimation() {
        this.clearAnimations();
        
        for (let i = 0; i < 5; i++) {
            const cloud = document.createElement('div');
            cloud.className = 'cloud';
            cloud.style.width = (60 + Math.random() * 40) + 'px';
            cloud.style.height = (30 + Math.random() * 20) + 'px';
            cloud.style.top = Math.random() * 60 + '%';
            cloud.style.animationDelay = Math.random() * 10 + 's';
            cloud.style.animationDuration = (15 + Math.random() * 10) + 's';
            this.animationContainer.appendChild(cloud);
        }
    }

    createWindAnimation() {
        this.clearAnimations();
        
        for (let i = 0; i < 8; i++) {
            const wind = document.createElement('div');
            wind.className = 'wind';
            wind.style.top = Math.random() * 80 + '%';
            wind.style.animationDelay = Math.random() * 3 + 's';
            wind.style.animationDuration = (2 + Math.random() * 2) + 's';
            this.animationContainer.appendChild(wind);
        }
    }

    createSunAnimation() {
        this.clearAnimations();
        
        const sunRays = document.createElement('div');
        sunRays.className = 'sun-rays';
        this.animationContainer.appendChild(sunRays);
        
        const lensFlare = document.createElement('div');
        lensFlare.className = 'sun-lens-flare';
        this.animationContainer.appendChild(lensFlare);
    }

    clearAnimations() {
        if (this.animationContainer) {
            this.animationContainer.innerHTML = '';
        }
    }

    displayWeatherData(data) {
        this.displayCurrentWeather(data);
        this.displayForecast(data.forecast);
        this.createCharts(data);
        this.showAllSections();
    }

    displayCurrentWeather(data) {
        const current = data.current;
        
        document.getElementById('temperature').textContent = `${current.temp}°C`;
        document.getElementById('weatherDescription').textContent = current.description;
        document.getElementById('cityName').textContent = `${data.city}, ${data.country}`;
        document.getElementById('dateTime').textContent = new Date().toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        
        document.getElementById('feelsLike').textContent = `${current.feels_like}°C`;
        document.getElementById('humidity').textContent = `${current.humidity}%`;
        document.getElementById('windSpeed').textContent = `${current.wind_speed} km/h`;
        document.getElementById('visibility').textContent = `${current.visibility} km`;
        
        // Update weather icon with animation
        const weatherIcon = document.getElementById('weatherIcon');
        weatherIcon.className = `fas ${current.icon} fa-4x animated`;
        
        // Add weather-specific color class
        weatherIcon.className += this.getWeatherColorClass(current.description);
    }

    getWeatherColorClass(description) {
        const weatherColors = {
            'Clear': ' weather-sunny',
            'Sunny': ' weather-sunny',
            'Cloudy': ' weather-cloudy',
            'Rainy': ' weather-rainy',
            'Partly Cloudy': ' weather-cloudy',
            'Windy': ' weather-cloudy',
            'Stormy': ' weather-stormy'
        };
        return weatherColors[description] || ' weather-sunny';
    }

    displayForecast(forecast) {
        const forecastContainer = document.getElementById('forecastCards');
        
        // Create responsive grid layout
        forecastContainer.innerHTML = `
            <div class="forecast-grid">
                ${forecast.map((day, index) => `
                    <div class="forecast-card fade-in-up" style="animation-delay: ${index * 0.1}s">
                        <div class="forecast-header">
                            <div class="forecast-date">
                                ${day.date.toLocaleDateString('en-US', { weekday: 'short' })}
                            </div>
                            <div class="forecast-day">
                                ${day.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                            </div>
                        </div>
                        <div class="forecast-icon">
                            <i class="fas ${day.icon}"></i>
                        </div>
                        <div class="forecast-temp">${day.temp}°C</div>
                        <div class="forecast-description">${day.condition}</div>
                        <div class="forecast-details">
                            <div class="forecast-detail">
                                <i class="fas fa-tint"></i>
                                <span>${day.humidity}%</span>
                            </div>
                            <div class="forecast-detail">
                                <i class="fas fa-wind"></i>
                                <span>${day.wind} km/h</span>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    createCharts(data) {
        this.createTemperatureChart(data);
        this.createHumidityWindChart(data);
    }

    createTemperatureChart(data) {
        const ctx = document.getElementById('temperatureChart').getContext('2d');
        
        if (this.temperatureChart) {
            this.temperatureChart.destroy();
        }

        const labels = ['Today', ...data.forecast.map(day => 
            day.date.toLocaleDateString('en-US', { weekday: 'short' })
        )];
        
        const temperatures = [data.current.temp, ...data.forecast.map(day => day.temp)];

        this.temperatureChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Temperature (°C)',
                    data: temperatures,
                    borderColor: '#e74c3c',
                    backgroundColor: 'rgba(231, 76, 60, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointBackgroundColor: '#e74c3c',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    pointRadius: 6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        grid: {
                            color: 'rgba(0,0,0,0.1)'
                        },
                        ticks: {
                            callback: function(value) {
                                return value + '°C';
                            }
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
    }

    createHumidityWindChart(data) {
        const ctx = document.getElementById('humidityWindChart').getContext('2d');
        
        if (this.humidityWindChart) {
            this.humidityWindChart.destroy();
        }

        const labels = ['Today', ...data.forecast.map(day => 
            day.date.toLocaleDateString('en-US', { weekday: 'short' })
        )];
        
        const humidity = [data.current.humidity, ...data.forecast.map(day => day.humidity)];
        const windSpeed = [data.current.wind_speed, ...data.forecast.map(day => day.wind_speed)];

        this.humidityWindChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Humidity (%)',
                        data: humidity,
                        backgroundColor: 'rgba(52, 152, 219, 0.8)',
                        borderColor: '#3498db',
                        borderWidth: 1,
                        yAxisID: 'y'
                    },
                    {
                        label: 'Wind Speed (km/h)',
                        data: windSpeed,
                        backgroundColor: 'rgba(46, 204, 113, 0.8)',
                        borderColor: '#2ecc71',
                        borderWidth: 1,
                        yAxisID: 'y1'
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top'
                    }
                },
                scales: {
                    y: {
                        type: 'linear',
                        display: true,
                        position: 'left',
                        title: {
                            display: true,
                            text: 'Humidity (%)'
                        },
                        grid: {
                            color: 'rgba(0,0,0,0.1)'
                        }
                    },
                    y1: {
                        type: 'linear',
                        display: true,
                        position: 'right',
                        title: {
                            display: true,
                            text: 'Wind Speed (km/h)'
                        },
                        grid: {
                            drawOnChartArea: false
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
    }

    showAllSections() {
        document.getElementById('currentWeatherSection').style.display = 'block';
        document.getElementById('chartsSection').style.display = 'block';
        document.getElementById('forecastSection').style.display = 'block';
        document.getElementById('mapSection').style.display = 'block';
        
        // Add fade-in animation
        setTimeout(() => {
            document.getElementById('currentWeatherSection').classList.add('fade-in-up');
            document.getElementById('chartsSection').classList.add('fade-in-up');
            document.getElementById('forecastSection').classList.add('fade-in-up');
            document.getElementById('mapSection').classList.add('fade-in-up');
        }, 100);
    }

    showLoading(show) {
        const spinner = document.getElementById('loadingSpinner');
        if (spinner) {
            spinner.style.display = show ? 'block' : 'none';
        }
    }

    showError(message) {
        const errorDiv = document.getElementById('errorMessage');
        const errorText = document.getElementById('errorText');
        if (errorDiv && errorText) {
            errorText.textContent = message;
            errorDiv.style.display = 'block';
        }
    }

    hideError() {
        const errorDiv = document.getElementById('errorMessage');
        if (errorDiv) {
            errorDiv.style.display = 'none';
        }
    }

    showNotification(message, type = 'info') {
        const toastMessage = document.getElementById('toastMessage');
        const toastHeader = document.querySelector('.toast-header');
        const icon = toastHeader.querySelector('i');
        
        if (toastMessage) {
            toastMessage.textContent = message;
        }
        
        if (icon) {
            switch(type) {
                case 'success':
                    icon.className = 'fas fa-check-circle text-success me-2';
                    break;
                case 'warning':
                    icon.className = 'fas fa-exclamation-triangle text-warning me-2';
                    break;
                case 'error':
                    icon.className = 'fas fa-times-circle text-danger me-2';
                    break;
                default:
                    icon.className = 'fas fa-info-circle text-primary me-2';
            }
        }
        
        if (this.toast) {
            this.toast.show();
        }
    }
}

// Initialize the weather visualization when the page loads
let weatherApp;
document.addEventListener('DOMContentLoaded', () => {
    weatherApp = new WeatherVisualization();
}); 