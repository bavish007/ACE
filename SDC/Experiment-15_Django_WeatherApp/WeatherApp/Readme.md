# 🌤️ 15 – Django Weather App

![Django](https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chart.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![MIT License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)

## 🎯 **AIM**

To develop a weather application frontend using Django templating that displays current weather information along with a line chart showing past 5 days' temperature trends using Chart.js.

---

## 📖 **DESCRIPTION**

This experiment demonstrates how to build a weather app using Django templates and Chart.js for visualization. The app fetches weather data, including current temperature, description, and icon, and renders it dynamically on a webpage. It also displays historical temperature data for the past 5 days as a line chart.

### ✨ **What You'll Learn:**
- 🌡️ **Weather Data Integration** - Fetch and display real-time weather
- 📊 **Chart.js Integration** - Create interactive line charts
- 🎨 **Django Templating** - Dynamic data rendering
- 📈 **Data Visualization** - Historical temperature trends
- 🔗 **JavaScript Libraries** - CDN integration with Django
- 📱 **Frontend Development** - Dynamic web interfaces

> 💡 This project is ideal for beginners to learn Django templating, integration of JavaScript libraries like Chart.js, and dynamic data visualization on the frontend.

---

## 📁 **PROJECT STRUCTURE**

```
weather-app/
│
├── 📂 templates/
│   └── 📄 index.html                # Main HTML template with Django template tags and Chart.js integration
│
├── 📂 static/
│   └── 📁 (optional static files like CSS or JS if any)
│
├── 📄 views.py                      # Django view to pass weather data to template
├── 🌐 urls.py                       # URL configuration for the app
├── ⚙️ settings.py                   # Django project settings
│
└── 📄 README.md                     # Project documentation
```

---

## 🚀 **INSTALLATION & SETUP**

### 📋 **PREREQUISITES**

- ✅ **Python 3.x**
- ✅ **Django installed** (`pip install django`)
- ✅ **Basic knowledge of Django templating and Python**
- ✅ **Chart.js included via CDN** (no extra installation needed)

---

### 🛠️ **STEPS TO RUN THE PROJECT**

#### **Step 1: Create Django Project & App**
```bash
django-admin startproject weather_project
cd weather_project
python manage.py startapp weather_app
```

#### **Step 2: Setup URL and Views**
- Add URL route to render the weather template
- Create view function to fetch and pass weather data (current + historical) as context

#### **Step 3: Create Template**
- Place `index.html` inside `templates/` folder
- Use Django templating tags to insert weather data into the HTML and JavaScript

#### **Step 4: Run the Server**
```bash
python manage.py runserver
```

#### **Step 5: Visit in Browser**
Open your browser and go to:
```
🌐 http://127.0.0.1:8000/
```

---

## 🎨 **Features**

- 🌡️ **Current Weather Display** - Real-time temperature, description, and weather icons
- 📊 **Historical Data Chart** - Interactive line chart showing past 5 days' temperature trends
- 🎯 **Dynamic Rendering** - Django template tags for data integration
- 📈 **Chart.js Visualization** - Professional-looking temperature charts
- 🌐 **Responsive Design** - Works seamlessly across devices
- ⚡ **CDN Integration** - No additional JavaScript library installations required

---

## 🔧 **Key Technologies Used**

- **Django Templates** - Server-side rendering and data binding
- **Chart.js** - Interactive data visualization library
- **Weather API Integration** - Real-time weather data fetching
- **JavaScript** - Client-side chart rendering and interactivity
- **HTML5/CSS3** - Modern web standards for UI

---

## 📊 **Data Visualization**

The app creates beautiful line charts showing:
- **Temperature Trends** over the past 5 days
- **Interactive Charts** with hover effects
- **Responsive Design** that adapts to screen size
- **Real-time Updates** based on fetched weather data

---

## 🤝 **Contributing**

Contributions are welcome! Feel free to submit a Pull Request.

---

## 📄 **LICENSE**

This project is licensed under the **MIT License**.

---
