# 10. 🔐 Student API with JWT Authentication

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)

---


### 🎯 AIM
To develop a secure RESTful Student API using Node.js, Express, MongoDB, and JWT for authentication.

---

## 📖 DESCRIPTION

This experiment demonstrates how to build a secure REST API using Node.js and Express with JWT-based user authentication. The API allows authenticated users to perform CRUD (Create, Read, Update, Delete) operations on student records. MongoDB is used for persistent data storage.

### ✨ Key Features
- **🔐 JWT Authentication** - Token-based security
- **🗄️ MongoDB Integration** - Persistent data storage
- **🛡️ Route Protection** - Middleware-based authorization
- **📚 CRUD Operations** - Complete student data management
- **🔒 Secure Best Practices** - Password hashing and token verification

JWT tokens ensure that only authorized users can access protected routes. This project illustrates best practices for secure API development, including middleware use, route protection, and token-based authentication.

---

## 📁 PROJECT STRUCTURE

```
student-api-jwt/
│
├── controllers/
│   ├── authController.js              # 🔐 Handles login logic
│   └── studentController.js           # 📚 Handles CRUD logic
│
├── middleware/
│   └── authMiddleware.js              # 🛡️ JWT token verification
│
├── models/
│   ├── User.js                        # 👤 User schema
│   └── Student.js                     # 🎓 Student schema
│
├── routes/
│   ├── authRoutes.js                  # 🔑 /api/login
│   └── studentRoutes.js               # 📋 /api/students
│
├── .env                               # 🔧 Environment variables
├── app.js                             # 🚀 Main application file
├── package.json                       # 📦 Project metadata and dependencies
└── README.md                          # 📚 Project documentation
```

---

## 🚀 INSTALLATION & SETUP

### 📋 PREREQUISITES

| Requirement | Description |
|-------------|-------------|
| **Node.js** | 📦 JavaScript runtime environment |
| **MongoDB** | 🗄️ Database (Cloud or local) |
| **VS Code** | 💻 Text editor or any preferred IDE |
| **Postman** | 🧪 API testing tool |

---

### 🔧 STEPS TO RUN THE PROJECT

#### **Step 1: Clone the Repository or Create Folder**
```bash
mkdir student-api-jwt
cd student-api-jwt
```

#### **Step 2: Initialize Node.js Project**
```bash
npm init -y
```

#### **Step 3: Install Required Packages**
```bash
npm install express mongoose jsonwebtoken dotenv bcryptjs
```

#### **Step 4: Create the Project Files & Folder Structure**
Follow the structure mentioned above.

#### **Step 5: Set up Environment File**
Create a `.env` file in the root with the following:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

#### **Step 6: Start the Server**
```bash
node app.js
```

#### **Step 7: Test API in Postman**
Access routes like:
- `http://localhost:5000/api/login`
- `http://localhost:5000/api/students`

---

## 🔗 API ENDPOINTS

### 🔑 **Login**
```http
POST /api/login
```
**Request Body**:
```json
{
  "email": "user@example.com",
  "password": "yourpassword"
}
```

---

### 📊 **Get All Students**
```http
GET /api/students
```
**Authorization**: Bearer Token required

---

### ➕ **Add a Student**
```http
POST /api/students
```
**Authorization**: Bearer Token required

**Request Body**:
```json
{
  "name": "Johan",
  "age": 21,
  "course": "Mathematics"
}
```

---

### ✏️ **Update Student by ID**
```http
PUT /api/students/:id
```
**Authorization**: Bearer Token required

---

### 🗑️ **Delete Student by ID**
```http
DELETE /api/students/:id
```
**Authorization**: Bearer Token required

---

## 📊 SAMPLE OUTPUT

### Student Data Response
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

## 🔐 Authentication Flow

### 🔄 **JWT Workflow**
1. **👤 User Login** - Send credentials to `/api/login`
2. **🔍 Verification** - Server validates user credentials
3. **🎟️ Token Generation** - JWT token created and returned
4. **🛡️ Authorization** - Token included in subsequent requests
5. **✅ Access Granted** - Protected routes accessible with valid token

### 🛡️ **Security Features**
| Feature | Implementation |
|---------|----------------|
| **Password Hashing** | `bcryptjs` for secure password storage |
| **JWT Tokens** | `jsonwebtoken` for stateless authentication |
| **Route Protection** | Middleware verification for protected endpoints |
| **Environment Variables** | Sensitive data stored in `.env` file |

---

## 📚 Package Dependencies

### Core Dependencies
```json
{
  "express": "Web application framework",
  "mongoose": "MongoDB object modeling",
  "jsonwebtoken": "JWT token generation and verification",
  "dotenv": "Environment variable management",
  "bcryptjs": "Password hashing library"
}
```

---

## 🧪 Testing with Postman

### 🔑 **Authentication Testing**
1. **Login Request**:
   - Method: `POST`
   - URL: `http://localhost:5000/api/login`
   - Body: JSON with email and password

2. **Copy JWT Token** from login response

3. **Protected Route Access**:
   - Add `Authorization` header
   - Value: `Bearer your_jwt_token_here`

---

## 🔍 HOW IT WORKS

### 🌐 **API Architecture**
1. **🚀 Server Setup** - Express server with MongoDB connection
2. **🔐 Authentication** - User login generates JWT token
3. **🛡️ Middleware** - Token verification for protected routes
4. **📚 CRUD Operations** - Student data management with authorization
5. **🗄️ Data Persistence** - MongoDB for permanent storage

### 📊 **Route Protection**
| Route Type | Authentication | Purpose |
|------------|----------------|---------|
| **Public** | ❌ Not Required | Login endpoint |
| **Protected** | ✅ JWT Required | Student CRUD operations |

---

## 🛠️ Technologies Used

- **📦 Node.js** - JavaScript runtime environment
- **🌐 Express.js** - Web application framework
- **🗄️ MongoDB** - NoSQL database
- **🔐 JWT** - JSON Web Token authentication
- **🔒 bcryptjs** - Password hashing
- **🔧 dotenv** - Environment configuration

---

## 🎯 Learning Objectives

- ✅ Implement JWT-based authentication
- ✅ Build secure RESTful APIs
- ✅ Use MongoDB for data persistence
- ✅ Apply middleware for route protection
- ✅ Handle environment variables securely
- ✅ Hash passwords for security

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
