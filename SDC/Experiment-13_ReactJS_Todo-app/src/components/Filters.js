import React from 'react';

function Filters({ filter, setFilter, sortBy, setSortBy, tasks }) {
  const getFilterCount = (filterType) => {
    switch (filterType) {
      case 'active':
        return tasks.filter(task => !task.completed).length;
      case 'completed':
        return tasks.filter(task => task.completed).length;
      case 'high-priority':
        return tasks.filter(task => task.priority === 'high').length;
      case 'reminder':
        return tasks.filter(task => task.reminder).length;
      default:
        return tasks.length;
    }
  };

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

  return (
    <div className="filters-container mb-4">
      {/* Filter Tabs */}
      <div className="filter-tabs mb-3">
        <ul className="nav nav-pills" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
              type="button"
            >
              All <span className="badge bg-secondary ms-1">{getFilterCount('all')}</span>
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${filter === 'active' ? 'active' : ''}`}
              onClick={() => setFilter('active')}
              type="button"
            >
              Active <span className="badge bg-warning ms-1">{getFilterCount('active')}</span>
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${filter === 'completed' ? 'active' : ''}`}
              onClick={() => setFilter('completed')}
              type="button"
            >
              Completed <span className="badge bg-success ms-1">{getFilterCount('completed')}</span>
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${filter === 'high-priority' ? 'active' : ''}`}
              onClick={() => setFilter('high-priority')}
              type="button"
            >
              High Priority <span className="badge bg-danger ms-1">{getFilterCount('high-priority')}</span>
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${filter === 'reminder' ? 'active' : ''}`}
              onClick={() => setFilter('reminder')}
              type="button"
            >
              ⏰ Reminders <span className="badge bg-info ms-1">{getFilterCount('reminder')}</span>
            </button>
          </li>
        </ul>
      </div>

      {/* Sort Options */}
      <div className="sort-container d-flex justify-content-end">
        <div className="input-group" style={{ width: 'auto' }}>
          <label className="input-group-text" htmlFor="sortSelect">
            <i className="bi bi-sort-down"></i>
          </label>
          <select
            className="form-select"
            id="sortSelect"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            style={{ width: 'auto' }}
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="az">A-Z</option>
            <option value="za">Z-A</option>
            <option value="priority">Priority</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Filters; 