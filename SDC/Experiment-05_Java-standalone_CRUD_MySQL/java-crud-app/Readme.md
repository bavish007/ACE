# 🗃️ Product Manager – Java Standalone CRUD App (MySQL)

## 📖 Objective
This project is a standalone Java console application for managing products in a MySQL database. Built to master JDBC, SQL, and core Java programming, it provides a hands-on experience with CRUD operations, database connectivity, and user-driven workflows. The goal was to bridge the gap between Java fundamentals and real-world database applications.

---

## 🛠️ Technologies Used
- **Java (JDK 8+)** (core logic, console UI)
- **JDBC** (Java Database Connectivity)
- **MySQL** (relational database)
- **SQL** (table creation, queries)
- **Eclipse/VS Code** (development environment)

---

## 📂 Folder Structure
```text
Experiment-05_Java-standalone_CRUD_MySQL/
├── java-crud-app/
│   ├── bin/
│   │   └── ProductCRUDApp.class
│   ├── lib/
│   │   └── mysql-connector-j-9.3.0.jar
│   ├── src/
│   │   └── ProductCRUDApp.java
│   ├── sql.txt
│   └── Readme.md
├── output/
│   ├── Adding product.png
│   ├── Deletion of product.png
│   └── List of Products.png
```

---

## ⚙️ Setup & Usage Instructions

### 1. Prerequisites
- Java JDK 8 or higher
- MySQL Server (running locally)
- MySQL Connector/J (included in `lib/`)

### 2. Database Setup
- Create the database and table using the provided `sql.txt` file:

```sql
-- Run in MySQL shell or client
CREATE DATABASE shoppingdb;
USE shoppingdb;
CREATE TABLE products (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100),
  price DOUBLE,
  quantity INT
);
```

### 3. Compile & Run
- **Windows**
  ```sh
  # Windows
  cd java-crud-app
  javac -cp "lib/mysql-connector-j-9.3.0.jar" -d bin src/ProductCRUDApp.java
  java -cp "bin;lib/mysql-connector-j-9.3.0.jar" ProductCRUDApp
  ```
- **macOS/Linux**
  ```sh
  # macOS/Linux
  cd java-crud-app
  javac -cp "lib/mysql-connector-j-9.3.0.jar" -d bin src/ProductCRUDApp.java
  java -cp "bin:lib/mysql-connector-j-9.3.0.jar" ProductCRUDApp
  ```

---

## ✨ Key Features
- Console-based CRUD (Create, Read, Update, Delete) for products
- MySQL database integration via JDBC
- Add, view, update, and delete products interactively
- Input validation and error handling
- Modular code structure for easy maintenance
- SQL script for quick database setup

---

## 📸 Output Analysis

### ➕ Adding a Product
![Adding Product](../output/Adding_product.png)
*The console prompts the user for product details and confirms successful addition to the database.*

### 📋 List of Products
![List of Products](../output/List_of_Products.png)
*Displays all products in a tabular format, showing ID, name, price, and quantity directly from the database.*

### ❌ Deletion of Product
![Deletion of Product](../output/Deletion_of_product.png)
*User selects a product by ID for deletion, and the app confirms removal from the database.*

---

## 🎓 Learning Outcomes
- Mastered JDBC for Java-MySQL connectivity
- Practiced SQL for table creation and CRUD operations
- Improved skills in exception handling and user input validation
- Learned to structure Java console applications for real-world use
- Understood the workflow of database-driven apps

---

## 🧠 My Journey & Reflections
This project was my first end-to-end experience building a database-driven Java application. Setting up JDBC and handling SQL exceptions was a challenge, but it taught me the importance of robust error handling and clear user prompts. I learned how to bridge Java logic with persistent storage, and how to design a user-friendly console workflow. This experiment gave me confidence to tackle more complex backend and database projects in the future.

---

## 🔗 Connect with Me
- **GitHub:** [https://github.com/bavish007](https://github.com/bavish007)
- **LinkedIn:** [https://www.linkedin.com/in/bavishreddymuske]

---

© 2025 M. Bavish Reddy. All rights reserved.
