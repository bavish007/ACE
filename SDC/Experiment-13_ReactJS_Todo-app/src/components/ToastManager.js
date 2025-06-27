import React from 'react';

function ToastManager({ toasts, removeToast }) {
  const getToastIcon = (type) => {
    switch (type) {
      case 'success':
        return 'bi-check-circle-fill';
      case 'warning':
        return 'bi-exclamation-triangle-fill';
      case 'danger':
        return 'bi-x-circle-fill';
      case 'info':
        return 'bi-info-circle-fill';
      default:
        return 'bi-bell-fill';
    }
  };

  const getToastClass = (type) => {
    switch (type) {
      case 'success':
        return 'bg-success text-white';
      case 'warning':
        return 'bg-warning text-dark';
      case 'danger':
        return 'bg-danger text-white';
      case 'info':
        return 'bg-info text-white';
      default:
        return 'bg-primary text-white';
    }
  };

  return (
    <div className="toast-container position-fixed top-0 end-0 p-3" style={{ zIndex: 1055 }}>
      {toasts.map(toast => (
        <div
          key={toast.id}
          className={`toast show ${getToastClass(toast.type)}`}
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="toast-header">
            <i className={`bi ${getToastIcon(toast.type)} me-2`}></i>
            <strong className="me-auto">
              {toast.type === 'success' ? 'Success' : 
               toast.type === 'warning' ? 'Warning' : 
               toast.type === 'danger' ? 'Error' : 'Info'}
            </strong>
            <button
              type="button"
              className="btn-close btn-close-white"
              onClick={() => removeToast(toast.id)}
              aria-label="Close"
            ></button>
          </div>
          <div className="toast-body">
            {toast.message}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ToastManager; 