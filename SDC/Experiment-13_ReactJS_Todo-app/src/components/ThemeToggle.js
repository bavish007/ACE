import React from 'react';

function ThemeToggle({ isDarkMode, onToggle }) {
  return (
    <div className="theme-toggle-container">
      <button
        className="btn btn-outline-secondary theme-toggle-btn"
        onClick={onToggle}
        title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      >
        <i className={`bi ${isDarkMode ? 'bi-sun-fill' : 'bi-moon-fill'}`}></i>
        <span className="ms-2 d-none d-sm-inline">
          {isDarkMode ? 'Light' : 'Dark'}
        </span>
      </button>
    </div>
  );
}

export default ThemeToggle; 