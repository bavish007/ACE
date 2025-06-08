# 🛒 Shopping Cart Web Application with Session Management

![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white)
![Servlet](https://img.shields.io/badge/Servlet-FF6B35?style=for-the-badge&logo=java&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![Apache Tomcat](https://img.shields.io/badge/Apache%20Tomcat-F8DC75?style=for-the-badge&logo=apachetomcat&logoColor=black)

---

## 📋 PROGRAM 7 – Session Management in Shopping Cart Web Application

### 🎯 AIM
To implement session tracking in a shopping cart web application using HTTP Sessions in Java Servlets.

---

## 📖 DESCRIPTION

This experiment demonstrates how to maintain user-specific data (such as a shopping cart) using HTTP sessions in Java Servlets. When a user adds products to the cart, the servlet tracks the session and stores cart data in memory without requiring a database write for every interaction. 

### ✨ Key Features
- **🚀 Improved Performance** - Cart data stored in memory
- **👤 User Experience** - State maintained between page requests  
- **🔧 Technology Stack** - Java Servlets, HTML/CSS, Session Management API

The solution uses:
- **Backend**: Java Servlets for processing
- **Frontend**: HTML/CSS for user interface
- **Session Management**: Built-in servlet framework API

---

## 📁 PROJECT STRUCTURE

```
shopping-cart-session/
│
├── src/
│   └── servlets/
│       ├── ProductServlet.java         # 📦 Lists products
│       └── CartServlet.java            # 🛒 Handles add-to-cart with session
│
├── WebContent/
│   ├── index.html                      # 🏠 Welcome page
│   ├── catalog.html                    # 📋 Displays product list with add buttons
│   ├── cart.html                       # 🛍️ Displays cart contents from session
│   └── WEB-INF/
│       ├── web.xml                     # ⚙️ Servlet and session config
│       └── lib/
│           └── mysql-connector-j-9.3.0.jar
│
├── bin/                                # 📦 Compiled .class files
├── lib/
│   └── javax.servlet-api-4.0.1.jar
├── README.md                           # 📚 Project documentation
```

---

## 🚀 INSTALLATION & SETUP

### 📋 PREREQUISITES

| Requirement | Description |
|-------------|-------------|
| ☕ **Java JDK** | Java Development Kit |
| 🐱 **Apache Tomcat** | Web server for servlet deployment |
| 🗄️ **MySQL** | Database management system |
| 💻 **VS Code** | IDE with Java Extensions |
| 📚 **Servlet API** | javax.servlet-api-4.0.1.jar |

---

### 🔧 STEPS TO RUN THE PROJECT

#### **Step 1: Add Required JARs to lib/**
```bash
# Required JAR files:
├── mysql-connector-j-9.3.0.jar
└── javax.servlet-api-4.0.1.jar
```

#### **Step 2: Compile Servlets**
```bash
javac -cp "lib/*" -d bin src/servlets/ProductServlet.java src/servlets/CartServlet.java
```

#### **Step 3: Deploy to Tomcat**
- Copy `WebContent/` into `tomcat/webapps/shopping-cart-session/`
- Copy compiled `bin/` classes to `WEB-INF/classes/`

#### **Step 4: Start Tomcat Server**
```bash
# Navigate to Tomcat directory and start server
./bin/startup.sh  # Linux/Mac
# or
./bin/startup.bat  # Windows
```

#### **Step 5: Visit in Browser**
```
🌐 http://localhost:8080/shopping-cart-session/index.html
```

---

## 🗄️ DATABASE SETUP

### Database Configuration

| Field | Value |
|-------|--------|
| **Database Name** | `shopping_cart` |
| **Table Name** | `products` |

### SQL Schema

```sql
-- Create database
CREATE DATABASE shopping_cart;
USE shopping_cart;

-- Create products table
CREATE TABLE products (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100),
  price DECIMAL(10,2)
);

-- Sample data (optional)
INSERT INTO products (name, price) VALUES 
('Laptop', 999.99),
('Mouse', 25.50),
('Keyboard', 75.00);
```

---

## 🔍 HOW IT WORKS

1. **🏠 User visits welcome page** (`index.html`)
2. **📋 Browse product catalog** (`catalog.html`)  
3. **🛒 Add items to cart** - Session tracking begins
4. **💾 Cart data stored in session** - No database writes needed
5. **🛍️ View cart contents** (`cart.html`)

---

## 🛠️ Technologies Used

- **☕ Java** - Core programming language
- **🌐 Java Servlets** - Server-side processing
- **🗄️ MySQL** - Database storage
- **🎨 HTML/CSS** - Frontend interface
- **🐱 Apache Tomcat** - Web server
- **📱 HTTP Sessions** - State management

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
