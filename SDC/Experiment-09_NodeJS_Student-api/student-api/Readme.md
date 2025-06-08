# 9. 🎓 RESTful Student API with Node.js and Express

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white)
![REST API](https://img.shields.io/badge/REST-02569B?style=for-the-badge&logo=rest&logoColor=white)
![JSON](https://img.shields.io/badge/JSON-5E5C5C?style=for-the-badge&logo=json&logoColor=white)

---

### 🎯 AIM
To implement a RESTful API for managing student data using Node.js and Express.

---

## 📖 DESCRIPTION

This experiment demonstrates how to build a simple REST API using Node.js and Express. The API allows users to perform CRUD (Create, Read, Update, Delete) operations on student records. It simulates a backend service that could be extended with a database in a real-world scenario.

### ✨ Key Features
- **📚 CRUD Operations** - Complete student data management
- **💾 In-Memory Storage** - Simple data storage for learning
- **🌐 RESTful Design** - Following REST API principles
- **📡 JSON Processing** - Handle JSON requests and responses
- **🚀 Lightweight** - Perfect for API fundamentals

Data is stored in-memory for simplicity. This lightweight implementation is ideal for learning API fundamentals, including route handling, JSON processing, and basic REST design. The solution uses Express.js for backend routing and Node.js for the runtime environment.

---

## 📁 PROJECT STRUCTURE

```
student-api/
│
├── server.js                          # 🌐 Main server file
├── package.json                       # 📦 Project metadata and dependencies
├── node_modules/                      # 📚 Installed npm modules
└── README.md                          # 📚 Project documentation
```

---

## 🚀 INSTALLATION & SETUP

### 📋 PREREQUISITES

| Requirement | Description |
|-------------|-------------|
| **Node.js** | 📦 JavaScript runtime environment |
| **VS Code** | 💻 Text editor or any preferred IDE |

---

### 🔧 STEPS TO RUN THE PROJECT

#### **Step 1: Clone or Create Project Folder**
```bash
mkdir student-api
cd student-api
```

#### **Step 2: Initialize Node.js Project**
```bash
npm init -y
```

#### **Step 3: Install Express**
```bash
npm install express
```

#### **Step 4: Create server.js File**
Write your API logic in server.js (CRUD for students).

#### **Step 5: Start the Server**
```bash
node server.js
```

#### **Step 6: Visit in Browser**
```
🌐 http://localhost:3000/api/students
```

---

## 🔗 API ENDPOINTS

### 📊 **Get All Students**
```http
GET /api/students
```
**Description**: Retrieve all student records

---

### ➕ **Add a Student**
```http
POST /api/students
```
**Request Body**:
```json
{
  "name": "Johan",
  "age": 21,
  "course": " Mathematics"
}
```
**Description**: Create a new student record

---

### ✏️ **Update Student by ID**
```http
PUT /api/students/:id
```
**Description**: Update an existing student record by ID

---

### 🗑️ **Delete Student by ID**
```http
DELETE /api/students/:id
```
**Description**: Remove a student record by ID

---

## 📊 SAMPLE OUTPUT

### Response Format
```json
[
  {
    "id": 1,
    "name": "Johan",
    "age": 21,
    "course": "Mathematics"
  }
]
```

---

## 🔍 HOW IT WORKS

### 🌐 **API Flow**
1. **🚀 Server Start** - Express server listens on port 3000
2. **📨 Request Handling** - Routes handle different HTTP methods
3. **💾 Data Processing** - CRUD operations on in-memory data
4. **📤 Response** - JSON responses sent back to client

### 📚 **CRUD Operations**
| Operation | HTTP Method | Endpoint | Purpose |
|-----------|-------------|----------|---------|
| **Create** | `POST` | `/api/students` | Add new student |
| **Read** | `GET` | `/api/students` | Get all students |
| **Update** | `PUT` | `/api/students/:id` | Update student by ID |
| **Delete** | `DELETE` | `/api/students/:id` | Delete student by ID |

---

## 🛠️ Technologies Used

- **📦 Node.js** - JavaScript runtime environment
- **🌐 Express.js** - Web application framework
- **📡 REST** - Architectural style for APIs
- **📊 JSON** - Data interchange format
- **💾 In-Memory Storage** - Simple data persistence

---

## 🎯 Learning Objectives

- ✅ Build RESTful APIs with Express.js
- ✅ Handle HTTP methods (GET, POST, PUT, DELETE)
- ✅ Process JSON requests and responses
- ✅ Implement CRUD operations
- ✅ Understand REST API design principles

---

## 🧪 Testing the API

### Using cURL Commands

#### Get All Students
```bash
curl -X GET http://localhost:3000/api/students
```

#### Add a Student
```bash
curl -X POST http://localhost:3000/api/students \
  -H "Content-Type: application/json" \
  -d '{"name": "Johan", "age": 21, "course": "Mathematics"}'
```

#### Update a Student
```bash
curl -X PUT http://localhost:3000/api/students/1 \
  -H "Content-Type: application/json" \
  -d '{"name": "Updated Name", "age": 22, "course": "Physics"}'
```

#### Delete a Student
```bash
curl -X DELETE http://localhost:3000/api/students/1
```

---

## 📄 LICENSE

```
MIT License

This project is licensed under the MIT License.
See LICENSE file for details.
```

---

<div align="center">

⭐ **Star this repository if it helped you!** ⭐

</div>
