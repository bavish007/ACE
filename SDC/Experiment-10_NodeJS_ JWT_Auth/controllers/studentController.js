const db = require('../models/db');

exports.getAllStudents = (req, res) => {
  const pool = db.getPool();
  pool.query('SELECT * FROM students WHERE user_id = ?', [req.user.id], (err, results) => {
    if (err) return res.status(500).json({ error: 'DB error' });
    res.json(results);
  });
};

exports.createStudent = (req, res) => {
  const { name, age, course } = req.body;
  if (!name || !age || !course) {
    return res.status(400).json({ error: 'All fields required' });
  }
  const pool = db.getPool();
  pool.query('INSERT INTO students (name, age, course, user_id) VALUES (?, ?, ?, ?)', [name, age, course, req.user.id], (err, result) => {
    if (err) return res.status(500).json({ error: 'DB error' });
    res.status(201).json({ id: result.insertId, name, age, course });
  });
};

exports.updateStudent = (req, res) => {
  const { name, age, course } = req.body;
  const { id } = req.params;
  if (!name || !age || !course) {
    return res.status(400).json({ error: 'All fields required' });
  }
  const pool = db.getPool();
  pool.query('UPDATE students SET name=?, age=?, course=? WHERE id=? AND user_id=?', [name, age, course, id, req.user.id], (err, result) => {
    if (err) return res.status(500).json({ error: 'DB error' });
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Student not found or not owned by user' });
    res.json({ id, name, age, course });
  });
};

exports.deleteStudent = (req, res) => {
  const { id } = req.params;
  const pool = db.getPool();
  pool.query('DELETE FROM students WHERE id=? AND user_id=?', [id, req.user.id], (err, result) => {
    if (err) return res.status(500).json({ error: 'DB error' });
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Student not found or not owned by user' });
    res.json({ message: 'Student deleted' });
  });
}; 