# 🎓 NeoScholars - Django Student Management System

## 📖 Objective
This project is a robust, web-based student management system built with Django. Designed to master full-stack web development, it enables efficient management of student records, user authentication, and data validation. The goal was to create a scalable, secure, and user-friendly platform for handling student data and administrative workflows.

---

## 🛠️ Technologies Used
- **Python 3** (core language)
- **Django** (web framework)
- **SQLite** (default database)
- **HTML5 & CSS3** (templates & styling)
- **Bootstrap** (responsive UI)
- **JavaScript (ES6+)** (form enhancements)

---

## 📂 Folder Structure
```plaintext
Experiment-14_Django_Student-management/
├── output/                  # Screenshots of app features
├── main/
│   ├── templates/           # Main app templates (about, contact, home, login, register)
│   ├── static/              # Main app CSS
│   └── ...                  # Views, models, admin, etc.
├── students/
│   ├── templates/students/  # Student app templates (list, form, delete, about, contact)
│   ├── static/css/          # Student app CSS (theme)
│   ├── models.py, views.py  # Student data logic
│   ├── forms.py, admin.py   # Forms and admin config
│   └── ...                  # URLs, tests, etc.
├── studentmgmt/
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
- Create a superuser for admin access:
  ```bash
  python manage.py createsuperuser
  ```

---

## ✨ Key Features
- Add, edit, and delete student records
- User authentication and registration
- Data validation and error handling
- Search, filter, and sort student lists
- Responsive, mobile-friendly UI with Bootstrap
- Custom theming and clean navigation
- Admin dashboard for advanced management

---

## 📸 Output Analysis

![Home Page](output/Home.png)
*The landing page provides a welcoming overview and quick navigation to core features.*

![About Page](output/About.png)
*The About page outlines the system's mission, values, and development background.*

![Contact Page](output/Contact.png)
*The Contact page offers a form and contact details for user support and feedback.*

![Student List](output/Student_list.png)
*Displays all student records with options to view, edit, or delete entries.*

![Student Data Entry](output/Student_Data_entry.png)
*The student entry form supports validation and user-friendly data input.*

![Entered Details](output/Entered_details.png)
*Confirmation of successfully entered student details, ready for review.*

![Delete Confirmation](output/Delete_Confirmation.png)
*A confirmation dialog ensures safe deletion of student records.*

---

## 🎓 Learning Outcomes
- Building full-stack web apps with Django
- Designing relational models and forms
- Implementing authentication and admin workflows
- Creating responsive UIs with Bootstrap
- Validating and sanitizing user input
- Structuring modular Django projects

---

## 🧠 My Journey & Reflections
Developing ScholarTrack was a deep dive into Django's power and flexibility. Implementing robust forms, validation, and admin features taught me the importance of clean architecture and user experience. Debugging model relationships and perfecting the UI flow was challenging but rewarding. This project has given me the confidence to build scalable, production-ready web applications.

---

## 🔗 Connect with Me
- **GitHub:** [bavish007](https://github.com/bavish007)
- **LinkedIn:** [bavishreddymuske](https://www.linkedin.com/in/bavishreddymuske)

---

© 2025 M. Bavish Reddy. All rights reserved. 