const express = require('express');
const app = express();
const studentsRouter = require('./students');
const fs = require('fs');
const path = require('path');

// Absolute path to students.json in project root
const dataPath = path.join(__dirname, '..', 'students.json');

// ✅ Auto-create students.json if not present, with error handling
try {
  if (!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, '[]', 'utf8');
    console.log('students.json not found. Created new file.');
  } else {
    // Try reading to check for corruption
    try {
      JSON.parse(fs.readFileSync(dataPath, 'utf8') || '[]');
      console.log('students.json found and loaded successfully');
    } catch (err) {
      console.error('❌ Failed to parse students.json. Re-initializing.');
      fs.writeFileSync(dataPath, '[]', 'utf8');
    }
  }
} catch (err) {
  console.error('❌ Error ensuring students.json:', err.message);
}

// Middleware to parse JSON
app.use(express.json());

// Logging middleware
app.use((req, res, next) => {
  const now = new Date().toISOString();
  console.log(`[${now}] ${req.method} ${req.originalUrl}`);
  next();
});

// Student routes
app.use('/students', studentsRouter);

// 404 handler for unknown routes
app.use((req, res, next) => {
  res.status(404).json({ error: 'Route not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('❌ Internal Server Error:', err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
}); 