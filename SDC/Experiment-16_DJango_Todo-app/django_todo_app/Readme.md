# ✅ 16 – Django TODO App

![Django](https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![MIT License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)

## 🎯 **AIM**

To develop a TODO list application backend using Django, allowing users to add, view, and manage tasks with a clean and functional web interface.

---

## 📖 **DESCRIPTION**

This experiment demonstrates how to build a server-rendered TODO application using Django. The app allows users to manage tasks—such as adding new tasks and viewing task lists—using Django's powerful Model-View-Template (MVT) architecture. It showcases key Django concepts like models, views, templates, forms, and URL routing.

- 🏗️ **MVT Architecture** - Model-View-Template pattern
- 🗄️ **Django ORM** - Database operations and models
- 📄 **Template Rendering** - Dynamic HTML generation
- 🔗 **URL Routing** - Request handling and navigation
- 📝 **Forms Handling** - User input processing
- 🛠️ **Backend Development** - Server-side logic

> 💡 This project is ideal for beginners to learn about Django's ORM, template rendering, and basic backend development.

---

## 📁 **PROJECT STRUCTURE**

```
django_todo_app/
│
├── 📂 todo_project/                 # Project settings folder
│   ├── 📄 __init__.py
│   ├── ⚙️ settings.py               # Project configuration
│   ├── 🌐 urls.py                   # Root URL configuration
│   └── 🚀 wsgi.py                   # WSGI entry point
│
├── 📂 todo/                         # Main app folder
│   ├── 📂 migrations/
│   ├── 📂 templates/
│   │   └── 📂 todo/
│   │       └── 📄 index.html        # HTML template for the app
│   ├── 📄 __init__.py
│   ├── 👤 admin.py                  # Admin interface
│   ├── 📄 apps.py
│   ├── 🗄️ models.py                 # Task model
│   ├── 🔧 views.py                  # Logic for handling requests
│   └── 🌐 urls.py                   # URL routing for app
│
├── 🗃️ db.sqlite3                    # SQLite database
├── 🛠️ manage.py                     # Django management script
└── 📄 README.md                     # Project documentation
```

---

## 🚀 **INSTALLATION & SETUP**

### 📋 **PREREQUISITES**

- ✅ **Python 3.8+**
- ✅ **pip** (Python package installer)
- ✅ **VS Code** or any code editor
- ✅ **Basic knowledge of Django**

---

### 🛠️ **STEPS TO RUN THE PROJECT**

#### **Step 1: Create Project and App**
```bash
django-admin startproject todo_project
cd todo_project
python manage.py startapp todo
```

#### **Step 2: Define Model in todo/models.py**
```python
from django.db import models

class Task(models.Model):
    title = models.CharField(max_length=200)
    completed = models.BooleanField(default=False)
    
    def __str__(self):
        return self.title
```

#### **Step 3: Create and Apply Migrations**
```bash
python manage.py makemigrations
python manage.py migrate
```

#### **Step 4: Set Up Views, Templates, and URLs**
- In `views.py`, write logic to render tasks
- Create `templates/todo/index.html`
- Map URLs in `todo/urls.py` and include in `todo_project/urls.py`

#### **Step 5: Run the Project**
```bash
python manage.py runserver
```

#### **Step 6: Visit in Browser**
Open your browser and go to:
```
🌐 http://127.0.0.1:8000/
```

---

## 🎨 **Features**

- ➕ **Add Tasks** - Create new todo items
- 📋 **View Task List** - Display all tasks in organized format
- ✅ **Task Management** - Mark tasks as completed
- 🗄️ **Database Storage** - Persistent data with SQLite
- 🎯 **Clean Interface** - Functional and user-friendly design
- 🔄 **Real-time Updates** - Server-rendered dynamic content

---

## 🔧 **Key Django Concepts Covered**

- **Models** - Task model with title and completion status
- **Views** - Request handling and response generation
- **Templates** - HTML rendering with Django template language
- **URLs** - Route configuration and mapping
- **ORM** - Database operations without SQL
- **Migrations** - Database schema management
- **Admin Interface** - Built-in Django admin panel

---

## 🗄️ **Database Schema**

**Task Model:**
- `title` - CharField(max_length=200)
- `completed` - BooleanField(default=False)

---

## 🤝 **Contributing**

Contributions are welcome! Feel free to submit a Pull Request.

---

## 📄 **LICENSE**

This project is licensed under the **MIT License**.

---
