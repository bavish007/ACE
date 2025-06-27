import React, { useState, useRef, useEffect } from 'react';

function TaskItem({ task, onToggle, onDelete, onEdit, onPriorityChange, onReminderToggle }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const editInputRef = useRef(null);

  useEffect(() => {
    if (isEditing && editInputRef.current) {
      editInputRef.current.focus();
      editInputRef.current.select();
    }
  }, [isEditing]);

  const handleEdit = () => {
    if (editText.trim() && editText.trim() !== task.text) {
      onEdit(task.id, editText.trim());
    }
    setIsEditing(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleEdit();
    } else if (e.key === 'Escape') {
      setEditText(task.text);
      setIsEditing(false);
    }
  };

  const getPriorityBadge = (priority) => {
    const badges = {
      low: 'bg-success',
      medium: 'bg-warning',
      high: 'bg-danger'
    };
    return badges[priority] || 'bg-secondary';
  };

  const getPriorityIcon = (priority) => {
    const icons = {
      low: '🌱',
      medium: '⚡',
      high: '🔥'
    };
    return icons[priority] || '📝';
  };

  return (
    <>
      <div className={`task-item card mb-3 ${task.completed ? 'completed-task' : ''} ${task.reminder ? 'reminder-task' : ''}`}>
        <div className="card-body d-flex align-items-center gap-3">
          <div className="form-check">
            <input
              className="form-check-input task-checkbox"
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggle(task.id)}
              id={`task-${task.id}`}
            />
            <label className="form-check-label" htmlFor={`task-${task.id}`}></label>
          </div>
          
          <div className="flex-grow-1">
            {isEditing ? (
              <input
                ref={editInputRef}
                type="text"
                className="form-control task-edit-input"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                onBlur={handleEdit}
                onKeyDown={handleKeyPress}
                maxLength={60}
              />
            ) : (
              <div className="task-content">
                <span
                  className={`task-text ${task.completed ? 'text-decoration-line-through text-muted' : ''}`}
                  onClick={() => setIsEditing(true)}
                  style={{ cursor: 'pointer' }}
                >
                  {task.text}
                </span>
                {task.reminder && (
                  <span className="reminder-badge ms-2">
                    <i className="bi bi-alarm-fill text-warning"></i>
                  </span>
                )}
              </div>
            )}
          </div>

          <div className="task-actions d-flex gap-2">
            <span className={`badge ${getPriorityBadge(task.priority)} priority-badge`}>
              {getPriorityIcon(task.priority)} {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
            </span>

            <button
              className={`btn btn-sm ${task.reminder ? 'btn-warning' : 'btn-outline-warning'}`}
              onClick={() => onReminderToggle(task.id)}
              title={task.reminder ? 'Remove reminder' : 'Add reminder'}
            >
              <i className="bi bi-alarm"></i>
            </button>

            <button
              className="btn btn-outline-primary btn-sm"
              onClick={() => setIsEditing(true)}
              title="Edit task"
            >
              <i className="bi bi-pencil"></i>
            </button>

            <button
              className="btn btn-outline-danger btn-sm"
              onClick={() => setShowDeleteModal(true)}
              title="Delete task"
            >
              <i className="bi bi-trash"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  <i className="bi bi-exclamation-triangle text-danger me-2"></i>
                  Confirm Delete
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowDeleteModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                Are you sure you want to delete "{task.text}"?
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowDeleteModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => {
                    onDelete(task.id);
                    setShowDeleteModal(false);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default TaskItem; 