# ⛅ Weatherly – Django Weather Dashboard

## 📖 Objective
This project is a clean, interactive weather dashboard built with Django. Designed to master API integration, form handling, and dynamic data visualization, it allows users to search for any city and view real-time weather data with a modern, responsive UI. The goal was to strengthen full-stack web skills and deliver a practical, user-friendly weather app.

---

## 🛠️ Technologies Used
- **Python 3** (core language)
- **Django** (web framework)
- **HTML5 & CSS3** (templates & styling)
- **Bootstrap** (responsive UI)
- **JavaScript (ES6+)** (form enhancements)
- **OpenWeatherMap API** (real-time weather data)

---

## 📂 Folder Structure
```plaintext
Experiment-15_Django_WeatherApp/
├── output/                  # Screenshots of app features
├── main/
│   ├── templates/           # Main app templates (index)
│   ├── static/              # Main app CSS
│   └── ...                  # Views, models, admin, etc.
├── weather/
│   ├── templates/weather/   # Weather app base template
│   ├── static/              # Weather app static (if any)
│   └── ...                  # Views, models, admin, etc.
├── weatherapp/
│   ├── settings.py, urls.py # Project settings and routing
│   └── ...                  # WSGI/ASGI, init
├── db.sqlite3               # SQLite database
├── manage.py                # Django management script
└── README.md                # Project documentation
```

---

## ⚙️ Setup & Usage Instructions

### # Windows
```powershell
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

### # macOS / Linux
```bash
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

- The app runs at [http://localhost:8000](http://localhost:8000)
- Add your OpenWeatherMap API key in the appropriate settings or environment variable if required

---

## ✨ Key Features
- Search for any city's current weather
- Real-time data from OpenWeatherMap API
- Clean, responsive UI with Bootstrap
- Error handling for invalid or missing cities
- Dynamic weather details and icons
- Modular Django app structure

---

## 📸 Output Analysis

![Home Page](output/Home.png)
*The main dashboard allows users to search for a city and instantly view real-time weather details in a clean, modern layout.*

---

## 🎓 Learning Outcomes
- Integrating third-party APIs in Django
- Handling forms and user input securely
- Rendering dynamic data in templates
- Designing responsive UIs with Bootstrap
- Structuring modular Django projects

---

## 🧠 My Journey & Reflections
Building Weatherly was a great exercise in combining backend logic with frontend polish. Integrating the OpenWeatherMap API and handling user input taught me the importance of robust error handling and clean UI design. Debugging API responses and perfecting the user experience was challenging but rewarding. This project has made me more confident in building practical, data-driven web apps.

---

## 🔗 Connect with Me
- **GitHub:** [bavish007](https://github.com/bavish007)
- **LinkedIn:** [bavishreddymuske](https://www.linkedin.com/in/bavishreddymuske)

---

© 2025 M. Bavish Reddy. All rights reserved. 