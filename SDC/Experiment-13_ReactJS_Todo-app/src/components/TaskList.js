import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, filter, sortBy, onToggle, onDelete, onEdit, onPriorityChange, onReminderToggle }) {
  const getSortedTasks = (tasks, sortType) => {
    const sortedTasks = [...tasks];
    switch (sortType) {
      case 'az':
        return sortedTasks.sort((a, b) => a.text.localeCompare(b.text));
      case 'za':
        return sortedTasks.sort((a, b) => b.text.localeCompare(a.text));
      case 'oldest':
        return sortedTasks.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
      case 'newest':
        return sortedTasks.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      case 'priority':
        const priorityOrder = { high: 3, medium: 2, low: 1 };
        return sortedTasks.sort((a, b) => priorityOrder[b.priority] - priorityOrder[a.priority]);
      default:
        return sortedTasks;
    }
  };

  const filteredTasks = getSortedTasks(tasks.filter(task => {
    switch (filter) {
      case 'active':
        return !task.completed;
      case 'completed':
        return task.completed;
      case 'high-priority':
        return task.priority === 'high';
      case 'reminder':
        return task.reminder;
      default:
        return true;
    }
  }), sortBy);

  const completedCount = tasks.filter(task => task.completed).length;
  const totalCount = tasks.length;
  const remainingCount = totalCount - completedCount;

  const getFilteredCount = () => {
    switch (filter) {
      case 'active':
        return remainingCount;
      case 'completed':
        return completedCount;
      case 'high-priority':
        return tasks.filter(task => task.priority === 'high').length;
      case 'reminder':
        return tasks.filter(task => task.reminder).length;
      default:
        return totalCount;
    }
  };

  if (tasks.length === 0) {
    return (
      <div className="text-center py-5">
        <div className="empty-state">
          <i className="bi bi-list-check display-1 text-muted mb-3"></i>
          <h4 className="text-muted">No tasks yet!</h4>
          <p className="text-muted">Start by adding your first task above.</p>
        </div>
      </div>
    );
  }

  if (filteredTasks.length === 0) {
    return (
      <div className="text-center py-5">
        <div className="empty-state">
          <i className="bi bi-check-circle display-1 text-success mb-3"></i>
          <h4 className="text-muted">
            {filter === 'active' ? 'No active tasks!' : 
             filter === 'completed' ? 'No completed tasks!' :
             filter === 'high-priority' ? 'No high priority tasks!' :
             filter === 'reminder' ? 'No reminder tasks!' : 'No tasks found!'}
          </h4>
          <p className="text-muted">
            {filter === 'active' 
              ? 'All tasks are completed. Great job!' 
              : filter === 'high-priority'
              ? 'No high priority tasks at the moment.'
              : filter === 'reminder'
              ? 'No tasks with reminders set.'
              : 'Complete some tasks to see them here.'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="task-list-container">
      <div className="task-summary mb-3">
        <div className="row text-center">
          <div className="col-4">
            <div className="summary-item">
              <div className="summary-number text-primary">{totalCount}</div>
              <div className="summary-label">Total</div>
            </div>
          </div>
          <div className="col-4">
            <div className="summary-item">
              <div className="summary-number text-warning">{remainingCount}</div>
              <div className="summary-label">Remaining</div>
            </div>
          </div>
          <div className="col-4">
            <div className="summary-item">
              <div className="summary-number text-success">{completedCount}</div>
              <div className="summary-label">Completed</div>
            </div>
          </div>
        </div>
        <div className="progress mt-2" style={{ height: '6px' }}>
          <div 
            className="progress-bar bg-success" 
            style={{ width: `${totalCount > 0 ? (completedCount / totalCount) * 100 : 0}%` }}
          ></div>
        </div>
      </div>

      <div className="task-items">
        {filteredTasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={onToggle}
            onDelete={onDelete}
            onEdit={onEdit}
            onPriorityChange={onPriorityChange}
            onReminderToggle={onReminderToggle}
          />
        ))}
      </div>

      <div className="task-count mt-3 text-center text-muted">
        Showing {getFilteredCount()} of {totalCount} tasks
        {sortBy !== 'newest' && (
          <span className="ms-2">
            • Sorted by {sortBy === 'az' ? 'A-Z' : 
                         sortBy === 'za' ? 'Z-A' : 
                         sortBy === 'oldest' ? 'Oldest' : 
                         sortBy === 'priority' ? 'Priority' : 'Newest'}
          </span>
        )}
      </div>
    </div>
  );
}

export default TaskList; 