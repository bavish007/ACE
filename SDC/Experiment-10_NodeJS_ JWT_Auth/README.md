# 🔐 Student Manager API – Node.js JWT Auth Edition

<div align="center">

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

</div>

---

## 🎯 Overview

A production-ready REST API for student management featuring JWT authentication, MySQL integration, and comprehensive security measures. Built with modern Node.js architecture patterns, this API demonstrates enterprise-level backend development with protected routes and secure data handling.

## 🔐 Security Features

- **JWT Authentication** - Stateless token-based authentication system
- **Password Encryption** - bcryptjs hashing with salt rounds
- **Protected Routes** - Middleware-based authorization
- **Environment Security** - Secure credential management
- **Input Validation** - Comprehensive data sanitization
- **Error Handling** - Secure error responses without data leakage

## ⚡ Core Functionality

- **User Management** - Registration and login with secure authentication
- **Student CRUD** - Complete student record management
- **Database Integration** - MySQL with automated schema setup
- **Modular Architecture** - Clean separation of concerns
- **Auto-Setup** - Database and table creation on first run

---

## 🏗️ Architecture

```
Experiment-10_NodeJS_JWT_Auth/
├── output/                    # API demonstration screenshots
├── controllers/
│   ├── authController.js     # Authentication business logic
│   └── studentController.js  # Student management operations
├── middleware/
│   └── auth.js              # JWT verification & route protection
├── models/
│   └── db.js                # MySQL connection & configuration
├── routes/
│   ├── authRoutes.js        # Authentication endpoints
│   └── studentRoutes.js     # Student management routes
├── sql/
│   └── init.sql             # Database schema & initialization
├── app.js                   # Express server configuration
├── package.json             # Dependencies & scripts
├── request.json             # Sample API requests
└── login_response.json      # JWT response examples
```

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** v14+
- **MySQL** Server 5.7+
- **npm** or **yarn**

### Environment Configuration

Create a `.env` file in the root directory:

```env
DB_HOST=localhost
DB_USER=your_mysql_username
DB_PASSWORD=your_mysql_password
DB_NAME=studentdb
JWT_SECRET=your_super_secret_jwt_key
PORT=3000
```

### Installation & Launch

```bash
# Install dependencies
npm install

# Start the server
npm start
# or
node app.js
```

The API will be available at `http://localhost:3000`

### Database Setup
The application automatically creates the required database and tables on first run using the `sql/init.sql` schema.

---

## 📋 API Endpoints

### 🔓 Authentication
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `POST` | `/auth/register` | Create new user account | ❌ |
| `POST` | `/auth/login` | User authentication | ❌ |

### 🎓 Student Management
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `GET` | `/students` | List all students | ✅ |
| `GET` | `/students/:id` | Get student by ID | ✅ |
| `POST` | `/students` | Create new student | ✅ |
| `PUT` | `/students/:id` | Update student data | ✅ |
| `DELETE` | `/students/:id` | Delete student record | ✅ |

---

## 🔑 Authentication Flow

### Registration
```bash
curl -X POST http://localhost:3000/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "john_doe",
    "email": "john@example.com",
    "password": "securePassword123"
  }'
```

### Login & Token Generation
```bash
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "securePassword123"
  }'
```

### Accessing Protected Routes
```bash
curl -X GET http://localhost:3000/students \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

---

## 📸 System Demonstration

<details>
<summary>🖥️ Server Initialization</summary>

![Server Start](output/Start_node.js_server.png)
*Express server startup with MySQL connection and middleware initialization*

</details>

<details>
<summary>🎓 Student Management Operations</summary>

![Add Student](output/Add_student.png)
*Protected POST endpoint creating new student record with JWT authentication*

![Students List](output/List_of_students.png)
*GET request retrieving all students for authenticated user*

</details>

<details>
<summary>💾 Database Integration</summary>

![MySQL Database](output/MySQL_DB_contents.png)
*MySQL database showing users and students tables with relational data structure*

</details>

---

## 🛠️ Technical Implementation

### Security Layer
- **JWT Tokens** - Stateless authentication with configurable expiration
- **bcryptjs** - Industry-standard password hashing (10 salt rounds)
- **Environment Variables** - Secure credential management with dotenv
- **Input Validation** - Comprehensive request data sanitization

### Database Design
- **Relational Structure** - Normalized MySQL schema with foreign keys
- **Connection Pooling** - Efficient database connection management
- **Auto-Migration** - Automated schema setup and table creation

### API Architecture
- **MVC Pattern** - Clear separation of routes, controllers, and models
- **Middleware Stack** - Authentication, logging, and error handling
- **RESTful Design** - Consistent HTTP methods and status codes

---

## 🔧 Development & Testing

### Sample Requests
The project includes `request.json` and `login_response.json` files with example API calls and expected responses for easy testing and integration.

### Error Handling
Comprehensive error responses with appropriate HTTP status codes:
- `401 Unauthorized` - Invalid or missing JWT token
- `403 Forbidden` - Insufficient permissions
- `404 Not Found` - Resource doesn't exist
- `500 Internal Server Error` - Server-side issues

---

## 🎓 Key Learning Outcomes

This project demonstrates advanced backend development skills:
- **Authentication Systems** - JWT implementation and security best practices
- **Database Integration** - MySQL with Node.js and connection management
- **API Security** - Protected routes and secure data handling
- **Modular Architecture** - Scalable code organization and separation of concerns
- **Environment Management** - Secure configuration and credential handling

---

<div align="center">

## 🔗 Connect

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/bavish007)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/bavishreddymuske)

---

*Developed by M. Bavish Reddy*

© 2025 M. Bavish Reddy. All rights reserved.

</div>
