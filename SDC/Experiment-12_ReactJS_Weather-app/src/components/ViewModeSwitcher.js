import React from 'react';

const ViewModeSwitcher = ({ currentView, onViewChange }) => {
  return (
    <div className="view-mode-switcher">
      <div className="switcher-container">
        <button
          className={`view-btn ${currentView === '2d' ? 'active' : ''}`}
          onClick={() => onViewChange('2d')}
        >
          <span className="view-icon">🗺️</span>
          <span className="view-label">2D Map</span>
        </button>
        
        <div className="switcher-divider" />
        
        <button
          className={`view-btn ${currentView === '3d' ? 'active' : ''}`}
          onClick={() => onViewChange('3d')}
        >
          <span className="view-icon">🌍</span>
          <span className="view-label">3D Globe</span>
        </button>
      </div>
    </div>
  );
};

export default ViewModeSwitcher; 