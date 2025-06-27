const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// Cross-platform safe path to students.json in project root
const dataPath = path.resolve(__dirname, '..', 'students.json');

// Safe load students from JSON file
function loadStudents() {
  try {
    if (!fs.existsSync(dataPath)) {
      fs.writeFileSync(dataPath, '[]', 'utf8');
      console.log('students.json not found. Created new file.');
    }
    const data = fs.readFileSync(dataPath, 'utf8');
    try {
      return JSON.parse(data || '[]');
    } catch (err) {
      console.error('❌ Failed to parse students.json. Returning empty list.');
      return [];
    }
  } catch (err) {
    console.error('❌ Failed to read students.json:', err.message);
    return [];
  }
}

// Safe save students to file
function saveStudents(students) {
  try {
    fs.writeFileSync(dataPath, JSON.stringify(students, null, 2), 'utf8');
  } catch (err) {
    console.error('❌ Error saving students.json:', err.message);
  }
}

// ✅ Validate new student input
function validateStudent(data) {
  if (!data.name || typeof data.name !== 'string' || !data.name.trim()) {
    return 'Name is required.';
  }
  if (!data.course || typeof data.course !== 'string' || !data.course.trim()) {
    return 'Course is required.';
  }
  return null;
}

// 🔍 GET all students
router.get('/', (req, res) => {
  const students = loadStudents();
  res.json(students);
});

// 🔍 GET by ID
router.get('/:id', (req, res) => {
  const students = loadStudents();
  const student = students.find(s => s.id === parseInt(req.params.id));
  if (!student) {
    console.error(`Student with id ${req.params.id} not found.`);
    return res.status(404).json({ error: 'Student not found' });
  }
  res.json(student);
});

// ➕ POST new student
router.post('/', (req, res) => {
  const error = validateStudent(req.body);
  if (error) {
    console.error('Validation error:', error);
    return res.status(400).json({ error });
  }
  const students = loadStudents();
  const newId = students.length > 0 ? students[students.length - 1].id + 1 : 1;
  const student = {
    id: newId,
    name: req.body.name.trim(),
    age: req.body.age,
    course: req.body.course.trim(),
  };
  students.push(student);
  saveStudents(students);
  console.log('New student added:', student);
  res.status(201).json(student);
});

// ✏️ PUT update by ID
router.put('/:id', (req, res) => {
  const students = loadStudents();
  const student = students.find(s => s.id === parseInt(req.params.id));
  if (!student) {
    console.error(`Student with id ${req.params.id} not found for update.`);
    return res.status(404).json({ error: 'Student not found' });
  }
  const error = validateStudent(req.body);
  if (error) {
    console.error('Validation error:', error);
    return res.status(400).json({ error });
  }
  student.name = req.body.name.trim();
  student.age = req.body.age;
  student.course = req.body.course.trim();
  saveStudents(students);
  console.log('Student updated:', student);
  res.json(student);
});

// ❌ DELETE by ID
router.delete('/:id', (req, res) => {
  let students = loadStudents();
  const index = students.findIndex(s => s.id === parseInt(req.params.id));
  if (index === -1) {
    console.error(`Student with id ${req.params.id} not found for deletion.`);
    return res.status(404).json({ error: 'Student not found' });
  }
  const deleted = students.splice(index, 1)[0];
  saveStudents(students);
  console.log('Student deleted:', deleted);
  res.json(deleted);
});

module.exports = router;
