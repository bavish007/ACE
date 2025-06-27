import React, { useState } from 'react';

function TaskForm({ onAdd, showToast }) {
  const [text, setText] = useState('');
  const [priority, setPriority] = useState('medium');
  const [reminder, setReminder] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedText = text.trim();
    
    if (!trimmedText) {
      showToast('Please enter a task name', 'warning');
      return;
    }

    if (trimmedText.length > 60) {
      showToast('Task name is too long (max 60 characters)', 'warning');
      return;
    }

    onAdd(trimmedText, priority, reminder);
    setText('');
    setPriority('medium');
    setReminder(false);
    showToast('Task added successfully!', 'success');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      handleSubmit(e);
    }
  };

  return (
    <div className="task-form-container">
      <form onSubmit={handleSubmit} className="task-form">
        <div className="row g-3">
          <div className="col-lg-8 col-md-7">
            <div className="form-floating task-input-container">
              <input
                type="text"
                className={`form-control task-input ${isFocused ? 'focused' : ''}`}
                id="taskInput"
                placeholder="Add a new task..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onKeyDown={handleKeyPress}
                maxLength={60}
                required
              />
              <label htmlFor="taskInput" className="floating-label">
                <i className="bi bi-plus-circle me-2"></i>
                Add a new task...
              </label>
              <div className="char-count">
                {text.length}/60
              </div>
            </div>
          </div>
          
          <div className="col-lg-2 col-md-2">
            <select
              className="form-select priority-select"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option value="low">🌱 Low</option>
              <option value="medium">⚡ Medium</option>
              <option value="high">🔥 High</option>
            </select>
          </div>
          
          <div className="col-lg-2 col-md-3">
            <div className="d-flex gap-2">
              <button
                type="button"
                className={`btn ${reminder ? 'btn-warning' : 'btn-outline-warning'} reminder-toggle`}
                onClick={() => setReminder(!reminder)}
                title={reminder ? 'Remove reminder' : 'Add reminder'}
              >
                <i className="bi bi-alarm"></i>
              </button>
              <button
                type="submit"
                className="btn btn-primary flex-grow-1 add-task-btn"
                disabled={!text.trim()}
              >
                <i className="bi bi-plus-lg me-1"></i>
                Add
              </button>
            </div>
          </div>
        </div>
        
        {reminder && (
          <div className="reminder-indicator mt-2">
            <small className="text-warning">
              <i className="bi bi-alarm me-1"></i>
              This task will be marked as a reminder
            </small>
          </div>
        )}
      </form>
    </div>
  );
}

export default TaskForm; 