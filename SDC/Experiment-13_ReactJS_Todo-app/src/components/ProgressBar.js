import React from 'react';

function ProgressBar({ tasks }) {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;
  const progressPercentage = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  const getProgressColor = (percentage) => {
    if (percentage === 100) return 'bg-success';
    if (percentage >= 70) return 'bg-info';
    if (percentage >= 40) return 'bg-warning';
    return 'bg-danger';
  };

  return (
    <div className="progress-container mb-4">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h6 className="mb-0">Progress</h6>
        <span className="progress-text">
          {completedTasks} of {totalTasks} tasks completed ({progressPercentage}%)
        </span>
      </div>
      <div className="progress" style={{ height: '12px' }}>
        <div 
          className={`progress-bar ${getProgressColor(progressPercentage)}`}
          style={{ width: `${progressPercentage}%` }}
          role="progressbar"
          aria-valuenow={progressPercentage}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {progressPercentage > 20 && (
            <span className="progress-label">{progressPercentage}%</span>
          )}
        </div>
      </div>
      {totalTasks === 0 && (
        <div className="text-center text-muted mt-2">
          <small>No tasks yet. Start by adding your first task!</small>
        </div>
      )}
    </div>
  );
}

export default ProgressBar; 