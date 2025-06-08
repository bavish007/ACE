# 🎓14 – Django Student Management

![Django](https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![MIT License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)

## 🎯 **AIM**

To develop a student management system backend using Django, allowing users to register, login, and access information through a clean and basic Canvas-style UI.

---

## 📖 **DESCRIPTION**

This experiment demonstrates how to build a basic web application using **Django**. The project implements user authentication (register and login), and basic navigation through pages like Home, About, and Contact.

### ✨ **What You'll Learn:**
- 🔐 **User Authentication** (Register & Login)
- 🌐 **URL Routing** and navigation
- 📄 **Template Rendering** with Django templates
- 🎨 **Static File Management**
- 🔧 **View Functions** and request handling
- 🏗️ **Django Project Structure**

> 💡 This project is ideal for beginners to learn the fundamentals of Django web development including template rendering, view functions, and project structure.

---

## 📁 **PROJECT STRUCTURE**

```
student_mgmt/
│
├── 📂 core/
│   ├── 📄 views.py                  # Contains views for all pages
│   └── 📄 urls.py                   # App URL routing
│
├── 📂 templates/
│   ├── 📄 base.html                 # Base template with common UI elements
│   ├── 🏠 home.html                 # Home page template
│   ├── ℹ️ about.html                # About page template
│   ├── 📞 contact.html              # Contact page template
│   ├── 🔐 login.html                # Login page template
│   └── 📝 register.html             # Registration page template
│
├── 📂 student_mgmt/
│   ├── ⚙️ settings.py               # Project settings including installed apps and templates
│   └── 🌐 urls.py                   # Project-level URL routing
│
├── 🗄️ db.sqlite3                    # SQLite database file
├── 🛠️ manage.py                     # Django project management script
└── 📄 README.md                     # Project documentation
```

---

## 🚀 **INSTALLATION & SETUP**

### 📋 **PREREQUISITES**

- ✅ **Python 3.x**
- ✅ **Django 5.2**
- ✅ **VS Code** or any preferred code editor
- ✅ **Basic knowledge of Python and Django framework**

---

### 🛠️ **STEPS TO RUN THE PROJECT**

#### **Step 1: Clone the repository**
*(or create the project and app as per instructions)*
```bash
git clone <repository-url>
cd student_mgmt
```

#### **Step 2: Create a virtual environment and activate it**
*(optional but recommended)*
```bash
python -m venv venv
source venv/bin/activate   # Linux/Mac
venv\Scripts\activate      # Windows
```

#### **Step 3: Install Django**
```bash
pip install django==5.2
```

#### **Step 4: Run migrations**
```bash
python manage.py migrate
```

#### **Step 5: Create a superuser**
*(optional, for admin access)*
```bash
python manage.py createsuperuser
```

#### **Step 6: Run the development server**
```bash
python manage.py runserver
```

#### **Step 7: Open the app in your browser**
Visit:
```
🌐 http://127.0.0.1:8000/
```

---

## 🎨 **Features**

- 👤 **User Registration** - Create new user accounts
- 🔐 **User Login** - Secure authentication system
- 🏠 **Home Page** - Main dashboard interface
- ℹ️ **About Page** - Information about the system
- 📞 **Contact Page** - Contact information and forms
- 🎯 **Canvas-style UI** - Clean and modern design
- 📱 **Responsive Design** - Works on all devices

---

## 🔧 **Key Django Concepts Covered**

- **MVT Architecture** - Model, View, Template pattern
- **URL Routing** - Project and app-level URL configuration
- **Template Inheritance** - Base templates and extends
- **Static Files** - CSS, JavaScript, and image management
- **User Authentication** - Built-in Django auth system
- **Database Operations** - SQLite integration

---

## 🤝 **Contributing**

Contributions are welcome! Feel free to submit a Pull Request.

---

## 📄 **LICENSE**

This project is licensed under the **MIT License**.

---

<div align="center">

*Built using Django Framework*

</div>
