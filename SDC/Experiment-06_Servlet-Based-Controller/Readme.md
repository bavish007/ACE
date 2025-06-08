# 6. 🛒 Servlet-Based Controller for Shopping Cart

<div align="center">

![Java](https://img.shields.io/badge/Java-Servlet-ED8B00?style=for-the-badge&logo=java&logoColor=white)
![Apache Tomcat](https://img.shields.io/badge/Apache%20Tomcat-Server-F8DC75?style=for-the-badge&logo=apache-tomcat&logoColor=black)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![MVC](https://img.shields.io/badge/Architecture-MVC-blue?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

*A comprehensive MVC web application using Java Servlets and MySQL*

</div>

---

## 🎯 AIM

To design a Java Servlet controller that connects the front-end shopping cart application with a MySQL database, using the MVC architecture pattern.

## 📋 DESCRIPTION

This experiment integrates a web-based shopping cart interface with a backend MySQL database using a Java Servlet. The servlet (controller) handles HTTP requests, connects to the database, retrieves product data, and sends it back to the client as a dynamic HTML response. The application showcases a basic MVC structure using HTML (view), Servlet (controller), and MySQL (model).

The project is developed and run using VS Code, compiled with the Servlet API, and deployed on Apache Tomcat.

## 📁 PROJECT STRUCTURE

```
shopping-cart/
│
├── src/
│   └── servlets/
│       └── ProductServlet.java     # Servlet controller to handle /products
│
├── WebContent/
│   ├── index.html                  # Home page with canvas UI
│   ├── catalog.html                # Catalog page with canvas + product loading link
│   └── WEB-INF/
│       ├── web.xml                 # Servlet configuration and routing
│       └── lib/
│           └── mysql-connector-j-9.3.0.jar
│
├── bin/                            # Compiled .class files
├── lib/
│   └── javax.servlet-api-4.0.1.jar
├── README.md                       # Project documentation
```

## 🚀 INSTALLATION & SETUP

### 📋 PREREQUISITES

- **Java JDK** - Development environment
- **Apache Tomcat** - Web server
- **MySQL** - Database server
- **VS Code with Java Extension Pack** - IDE
- **Servlet API** (javax.servlet-api-4.0.1.jar) - API library

### 🔧 STEPS TO RUN THE PROJECT

#### 1. Place Required JARs
Copy the following to your `lib/` folder:
- `mysql-connector-j-9.3.0.jar`
- `javax.servlet-api-4.0.1.jar`

#### 2. Compile Servlet:
```bash
javac -cp "lib/*" -d bin src/servlets/ProductServlet.java
```

#### 3. Deploy to Apache Tomcat:
- Copy `WebContent/` to `tomcat/webapps/shopping-cart/`
- Copy compiled `bin/` classes to `WEB-INF/classes/`

#### 4. Start Tomcat Server

#### 5. Visit in Browser:
```
http://localhost:8080/shopping-cart/index.html
```

## 🗄️ DATABASE SETUP

**Database:** `shopping_cart`  
**Table:** `products`

```sql
CREATE TABLE products (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100),
  price DECIMAL(10,2)
);
```

## 📄 LICENSE

This project is licensed under the **MIT License**.

---

<div align="center">


*Built with ☕ Java Servlets and 🗄️ MySQL using MVC Architecture*

</div>
