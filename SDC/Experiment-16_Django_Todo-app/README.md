# 📝 TaskMate – Django Todo App

## 📖 Objective
This project is a minimalist, web-based Todo application built with Django. Designed to master CRUD operations, form handling, and dynamic UI updates, it enables users to add, complete, and delete tasks in a clean, responsive interface. The goal was to strengthen backend and frontend integration skills while delivering a practical productivity tool.

---

## 🛠️ Technologies Used
- **Python 3** (core language)
- **Django** (web framework)
- **HTML5 & CSS3** (templates & styling)
- **Bootstrap** (responsive UI)
- **JavaScript (ES6+)** (form enhancements)

---

## 📂 Folder Structure
```plaintext
Experiment-16_Django_Todo-app/
├── output/                  # Screenshots of app features
├── main/
│   ├── templates/           # Main app templates (index)
│   ├── static/              # Main app CSS
│   └── ...                  # Views, models, admin, etc.
├── todoapp/
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

---

## ✨ Key Features
- Add, complete, and delete tasks
- Real-time UI updates with Django views
- Clean, responsive design with Bootstrap
- Confirmation dialog for safe deletions
- Minimalist, distraction-free interface
- Modular Django app structure

---

## 📸 Output Analysis

![Home Page](output/Home.png)
*The main dashboard displays all tasks, with options to add new ones and mark them as complete.*

![Delete Confirmation](output/Delete_confirmation.png)
*A confirmation dialog ensures tasks are not deleted accidentally, enhancing user safety.*

---

## 🎓 Learning Outcomes
- Implementing CRUD operations in Django
- Handling forms and user input securely
- Rendering dynamic data in templates
- Designing responsive UIs with Bootstrap
- Structuring modular Django projects

---

## 🧠 My Journey & Reflections
Building TaskMate was a rewarding exercise in combining backend logic with frontend simplicity. Implementing CRUD operations and ensuring a smooth user experience taught me the importance of clean code and usability. Debugging form handling and perfecting the UI flow deepened my understanding of Django's power. This project has made me more confident in building practical, user-focused web apps.

---

## 🔗 Connect with Me
- **GitHub:** [bavish007](https://github.com/bavish007)
- **LinkedIn:** [bavishreddymuske](https://www.linkedin.com/in/bavishreddymuske)

---

© 2025 M. Bavish Reddy. All rights reserved. 