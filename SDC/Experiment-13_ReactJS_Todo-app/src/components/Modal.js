import React from 'react';

function Modal({ isOpen, onClose, onConfirm, title, message, confirmText = 'Confirm', cancelText = 'Cancel', type = 'danger' }) {
  if (!isOpen) return null;

  const getModalClass = (modalType) => {
    switch (modalType) {
      case 'danger':
        return 'modal-danger';
      case 'warning':
        return 'modal-warning';
      case 'info':
        return 'modal-info';
      default:
        return '';
    }
  };

  const getButtonClass = (modalType) => {
    switch (modalType) {
      case 'danger':
        return 'btn-danger';
      case 'warning':
        return 'btn-warning';
      case 'info':
        return 'btn-info';
      default:
        return 'btn-primary';
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose();
    } else if (e.key === 'Enter') {
      onConfirm();
    }
  };

  return (
    <div 
      className="modal-backdrop show d-block" 
      style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown}
      tabIndex="-1"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className={`modal-content ${getModalClass(type)}`}>
          <div className="modal-header">
            <h5 className="modal-title">
              <i className={`bi bi-${type === 'danger' ? 'exclamation-triangle' : type === 'warning' ? 'exclamation-circle' : 'info-circle'} me-2`}></i>
              {title}
            </h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            {message}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              {cancelText}
            </button>
            <button
              type="button"
              className={`btn ${getButtonClass(type)}`}
              onClick={onConfirm}
            >
              {confirmText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal; 