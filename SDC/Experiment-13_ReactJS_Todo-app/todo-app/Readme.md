# 📝 13. – React TODO App

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![MIT License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)

## 🎯 **AIM**

To develop a TODO list application frontend using React, allowing users to add, complete, and delete tasks with a clean Canva-style UI.

---

## 📖 **DESCRIPTION**

This experiment demonstrates how to build a single-page TODO application using **React.js**. The app allows users to manage their daily tasks in a dynamic and interactive way. 

- 🔄 **State Management** using `useState`
- 🧩 **Component-based Architecture**
- 📝 **Basic Form Handling**
- 🎨 **Modern CSS Styling**
- 🔀 **Conditional Rendering**
- 📊 **Props and Component Communication**

> 💡 This project is ideal for beginners to learn about React components, props, state management, conditional rendering, and basic CSS styling.

---

## 📁 **PROJECT STRUCTURE**

```
todo-app/
│
├── 📂 public/
│   └── 📄 index.html                # HTML template
│
├── 📂 src/
│   ├── 📂 components/
│   │   ├── 📄 TodoForm.js           # Component to add new tasks
│   │   ├── 📄 TodoItem.js           # Component to render a single task
│   │   └── 📄 TodoList.js           # Component to list all tasks
│   ├── 📄 App.js                    # Main application component
│   ├── 🎨 App.css                   # Styling for the app (Canva style)
│   └── 📄 index.js                  # Entry point of the React app
│
├── 📄 package.json                  # Project metadata and dependencies
└── 📄 README.md                     # Project documentation
```

---

## 🚀 **INSTALLATION & SETUP**

### 📋 **PREREQUISITES**

- ✅ **Node.js & npm**
- ✅ **VS Code** or any code editor
- ✅ **Basic knowledge of React**

---

### 🛠️ **STEPS TO RUN THE PROJECT**

#### **Step 1: Create Project using Create React App**
```bash
npx create-react-app todo-app
cd todo-app
```

#### **Step 2: Create Components**
Inside `src/components/`, create the following files:
- 📄 **TodoForm.js**
- 📄 **TodoItem.js**
- 📄 **TodoList.js**

Each should return respective JSX as defined in the project.

#### **Step 3: Add Logic in App.js**
Implement `useState` for managing TODOs, and pass methods for adding, toggling, and removing tasks.

#### **Step 4: Style the App**
Use `App.css` to add modern, Canva-style UI.

#### **Step 5: Run the Project**
```bash
npm start
```

#### **Step 6: Visit in Browser**
Open your browser and go to:
```
🌐 http://localhost:3000
```

---

## 🎨 **Features**

- ➕ **Add Tasks** - Create new todo items
- ✅ **Complete Tasks** - Mark tasks as completed
- 🗑️ **Delete Tasks** - Remove unwanted tasks
- 🎯 **Clean UI** - Modern Canva-style design
- 📱 **Responsive** - Works on all devices

---

## 🤝 **Contributing**

Contributions are welcome! Feel free to submit a Pull Request.

---

## 📄 **LICENSE**

This project is licensed under the **MIT License**.

---
