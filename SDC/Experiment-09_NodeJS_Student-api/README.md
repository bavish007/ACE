# 🧑‍🎓 Student API – Node.js Express CRUD Demo

<div align="center">

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![JSON](https://img.shields.io/badge/JSON-000000?style=for-the-badge&logo=json&logoColor=white)

</div>

---

## 🎯 Overview

A lightweight RESTful API for managing student records built with Node.js and Express. Features complete CRUD operations with JSON file-based storage, robust input validation, and comprehensive error handling for production-ready backend development.

## ✨ Key Features

- **Full CRUD Operations** - Create, Read, Update, Delete student records
- **File-Based Storage** - JSON persistence with auto-recovery mechanisms  
- **Input Validation** - Robust data validation and sanitization
- **Error Handling** - Comprehensive error management and logging
- **RESTful Design** - Clean, standardized API endpoints
- **Modular Architecture** - Maintainable and scalable code structure

---

## 📂 Project Structure

```
Experiment-09_NodeJS_Student-api/
├── output/                  # API demonstration screenshots
├── student-api/
│   ├── index.js            # Express server configuration
│   ├── students.js         # CRUD routes & business logic
│   └── package.json        # Dependencies & scripts
├── students.json           # Data persistence file
└── README.md              # Documentation
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation & Setup

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd student-api

# Install dependencies
npm install

# Start the server
node index.js
```

The API server will be running at `http://localhost:3000`

### Testing the API
Use **Postman**, **Insomnia**, or **curl** to interact with the endpoints:

```bash
# Get all students
curl http://localhost:3000/students

# Add a new student
curl -X POST http://localhost:3000/students \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","age":20,"course":"Computer Science"}'
```

---

## 📸 API in Action

<details>
<summary>🖥️ Server Startup & Configuration</summary>

![Server Start](output/Start_Server.png)
*Express server initialization with port configuration and middleware setup*

</details>

<details>
<summary>📊 Data Operations & Storage</summary>

![Data Insertion](output/Insert_data.png)
*POST request adding new student record with validation*

![Data Update](output/Update_data.png)
*PUT request modifying existing student information*

</details>

<details>
<summary>💾 JSON File State Management</summary>

![Initial State](output/Data_in_student.json.png)
*Clean JSON structure with proper formatting*

![After Operations](output/Student.json_after_insertion_of_data.png)
*Updated data file reflecting CRUD operations*

</details>

<details>
<summary>⚡ Complete CRUD Workflow</summary>

![All Operations](output/Actions_performed.png)
*Terminal logs showing comprehensive API testing and responses*

</details>

---

## 🛠️ API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/students` | Retrieve all students |
| `GET` | `/students/:id` | Get student by ID |
| `POST` | `/students` | Create new student |
| `PUT` | `/students/:id` | Update student data |
| `DELETE` | `/students/:id` | Remove student record |

---

## 🔧 Technical Implementation

### Core Technologies
- **Runtime**: Node.js with ES6+ features
- **Framework**: Express.js for REST API architecture
- **Storage**: JSON file-based persistence
- **Validation**: Custom middleware for data integrity

### Architecture Highlights
- Modular route separation for maintainability
- Automatic file recovery and error resilience
- Comprehensive logging for debugging and monitoring
- RESTful conventions for consistent API design

---

## 🎓 Learning Outcomes

This project demonstrates proficiency in:
- Backend API development with Node.js/Express
- RESTful service architecture and design patterns
- File-based data persistence and management
- Input validation and error handling strategies
- Modular code organization and best practices

---

<div align="center">

## 🔗 Connect

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/bavish007)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/bavishreddymuske)

---

*Developed by M. Bavish Reddy*

© 2025 M. Bavish Reddy. All rights reserved.

</div>
