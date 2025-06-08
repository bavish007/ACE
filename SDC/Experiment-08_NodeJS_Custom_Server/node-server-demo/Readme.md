# 8. 🚀 Node.js Custom Server & Core Modules

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTTP](https://img.shields.io/badge/HTTP-005571?style=for-the-badge&logo=http&logoColor=white)
![Events](https://img.shields.io/badge/Events-FF6B6B?style=for-the-badge&logo=nodejs&logoColor=white)

---

### 🎯 AIM
To create a custom HTTP server using Node.js and explore core built-in modules such as `os`, `path`, and `events`.

---

## 📖 DESCRIPTION

This experiment demonstrates how to build a simple HTTP server using Node.js without any external frameworks. It also showcases how to interact with system-level information, file paths, and custom events using Node.js core modules.

### ✨ Key Features
- **🌐 Custom HTTP Server** - Built without external frameworks
- **💻 System Information** - Access OS-level data
- **📁 Path Management** - Handle file and directory paths
- **⚡ Event-Driven Architecture** - Custom event handling

The solution uses Node.js for server-side programming and the built-in `http`, `os`, `path`, and `events` modules to explore their functionalities in a backend environment. This helps in understanding how Node.js handles server creation and system-level operations using its standard library.

---

## 📁 PROJECT STRUCTURE

```
node-server-demo/
│
├── server.js                          # 🌐 Creates a basic HTTP server
├── osInfo.js                          # 💻 Displays OS information using 'os' module
├── pathDemo.js                        # 📁 Demonstrates path operations using 'path' module
├── eventDemo.js                       # ⚡ Emits and listens for events using 'events' module
├── README.md                          # 📚 Project documentation
```

---

## 📸 IMAGES

### File Demonstrations

| Module | File | Purpose |
|--------|------|---------|
| 📁 **Path** | `pathDemo.js` | Path operations and manipulations |
| ⚡ **Events** | `eventDemo.js` | Custom event emitting and handling |
| 💻 **OS Info** | `osInfo.js` | System information retrieval |
| 🌐 **Server** | `server.js` | HTTP server creation and handling |

---

## 🔧 MODULES USED

| Module | Icon | Description |
|--------|------|-------------|
| **http** | 🌐 | To create the web server |
| **os** | 💻 | To fetch system-related data such as platform, memory, and CPU info |
| **path** | 📁 | To handle file and directory paths |
| **events** | ⚡ | To handle event-driven architecture by emitting and responding to events |

---

## 🚀 INSTALLATION & SETUP

### 📋 PREREQUISITES

| Requirement | Description |
|-------------|-------------|
| **Node.js** | 📦 Installed on your system |
| **VS Code** | 💻 Visual Studio Code or any preferred IDE |

---

### 🔧 STEPS TO RUN THE PROJECT

#### **Step 1: Navigate to Project Directory**
```bash
cd node-server-demo
```

#### **Step 2: Open in VS Code**
```bash
code .
```

#### **Step 3: Run Individual Modules**

##### 🌐 **Start HTTP Server**
```bash
node server.js
```
Then open your browser and visit:
```
🌐 http://localhost:3000
```

##### 💻 **Run OS Module Demo**
```bash
node osInfo.js
```

##### 📁 **Run Path Module Demo**
```bash
node pathDemo.js
```

##### ⚡ **Run Events Module Demo**
```bash
node eventDemo.js
```

---

## 📊 OUTPUT EXAMPLES

| File | Expected Output |
|------|----------------|
| **🌐 server.js** | Displays a web page with "Hello from Node.js custom server!" |
| **💻 osInfo.js** | Outputs platform, memory, uptime, and user info |
| **📁 pathDemo.js** | Shows file name, extension, directory, and path joining |
| **⚡ eventDemo.js** | Logs "Hello, Alice!" using a custom event |

---

## 🔍 HOW IT WORKS

### 🌐 **HTTP Server Flow**
1. **Create Server** - Using `http.createServer()`
2. **Handle Requests** - Process incoming HTTP requests
3. **Send Response** - Return HTML/text responses
4. **Listen on Port** - Server runs on localhost:3000

### 💻 **Core Modules Exploration**
1. **OS Module** - Retrieves system information
2. **Path Module** - Manipulates file paths
3. **Events Module** - Handles custom events
4. **HTTP Module** - Creates web server

---

## 🛠️ Technologies Used

- **📦 Node.js** - Server-side JavaScript runtime
- **🌐 HTTP Module** - Web server creation
- **💻 OS Module** - System information access
- **📁 Path Module** - File path operations
- **⚡ Events Module** - Event-driven programming

---

## 🎯 Learning Objectives

- ✅ Build HTTP servers without frameworks
- ✅ Understand Node.js core modules
- ✅ Work with system-level information
- ✅ Implement event-driven architecture
- ✅ Handle file paths and directories

---

## 📄 LICENSE

```
MIT License

This project is licensed under the MIT License.
See LICENSE file for details.
```

---
