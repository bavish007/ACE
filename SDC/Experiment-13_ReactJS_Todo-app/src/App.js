import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import ThemeToggle from './components/ThemeToggle';
import ProgressBar from './components/ProgressBar';
import Filters from './components/Filters';
import ToastManager from './components/ToastManager';
import Modal from './components/Modal';
import './styles/App.css';
import './styles/DarkMode.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [toasts, setToasts] = useState([]);
  const [modalConfig, setModalConfig] = useState({ isOpen: false });

  // Load theme preference from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('neoTasksTheme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  // Load tasks from localStorage
  useEffect(() => {
    const savedTasks = localStorage.getItem('neoTasks');
    if (savedTasks) {
      try {
        setTasks(JSON.parse(savedTasks));
      } catch (error) {
        console.error('Error loading tasks:', error);
      }
    }
  }, []);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem('neoTasks', JSON.stringify(tasks));
  }, [tasks]);

  // Handle theme toggle
  const handleThemeToggle = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem('neoTasksTheme', newTheme ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', newTheme ? 'dark' : 'light');
  };

  // Add new task
  const addTask = (text, priority = 'medium', reminder = false) => {
    const newTask = {
      id: Date.now(),
      text: text.trim(),
      completed: false,
      priority: priority,
      reminder: reminder,
      createdAt: new Date().toISOString()
    };
    setTasks(prev => [newTask, ...prev]);
  };

  // Toggle task completion
  const toggleTask = (id) => {
    setTasks(prev => prev.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    
    const task = tasks.find(t => t.id === id);
    if (task && !task.completed) {
      showToast('Task completed!', 'success');
    }
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id));
    showToast('Task deleted successfully', 'info');
  };

  // Edit task
  const editTask = (id, newText) => {
    if (newText.trim() && newText.trim().length <= 60) {
      setTasks(prev => prev.map(task =>
        task.id === id ? { ...task, text: newText.trim() } : task
      ));
      showToast('Task updated successfully', 'success');
    }
  };

  // Change task priority
  const changePriority = (id, priority) => {
    setTasks(prev => prev.map(task =>
      task.id === id ? { ...task, priority } : task
    ));
  };

  // Toggle reminder
  const toggleReminder = (id) => {
    setTasks(prev => prev.map(task =>
      task.id === id ? { ...task, reminder: !task.reminder } : task
    ));
    
    const task = tasks.find(t => t.id === id);
    if (task) {
      showToast(
        task.reminder ? 'Reminder removed' : 'Reminder added',
        'info'
      );
    }
  };

  // Show confirmation modal
  const showConfirmModal = (title, message, onConfirm, type = 'danger') => {
    setModalConfig({
      isOpen: true,
      title,
      message,
      onConfirm: () => {
        onConfirm();
        setModalConfig({ isOpen: false });
      },
      onClose: () => setModalConfig({ isOpen: false }),
      type
    });
  };

  // Show toast notification
  const showToast = (message, type = 'info') => {
    const id = Date.now();
    const newToast = { id, message, type };
    setToasts(prev => [...prev, newToast]);
    
    // Auto remove toast after 3 seconds
    setTimeout(() => {
      setToasts(prev => prev.filter(toast => toast.id !== id));
    }, 3000);
  };

  // Remove toast
  const removeToast = (id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  return (
    <div className="app-container">
      <div className="app-content">
        {/* Header */}
        <header className="app-header">
          <ThemeToggle isDarkMode={isDarkMode} onToggle={handleThemeToggle} />
          <h1 className="app-title">NeoTasks</h1>
          <p className="app-subtitle">Organize. Focus. Achieve.</p>
        </header>

        {/* Main Content */}
        <main className="app-main">
          {/* Task Form */}
          <TaskForm onAdd={addTask} showToast={showToast} />

          {/* Progress Bar */}
          <ProgressBar tasks={tasks} />

          {/* Filters */}
          <Filters 
            filter={filter} 
            setFilter={setFilter} 
            sortBy={sortBy} 
            setSortBy={setSortBy} 
            tasks={tasks} 
          />

          {/* Task List */}
          <TaskList
            tasks={tasks}
            filter={filter}
            sortBy={sortBy}
            onToggle={toggleTask}
            onDelete={(id) => {
              const task = tasks.find(t => t.id === id);
              showConfirmModal(
                'Confirm Delete',
                `Are you sure you want to delete "${task?.text}"?`,
                () => deleteTask(id),
                'danger'
              );
            }}
            onEdit={editTask}
            onPriorityChange={changePriority}
            onReminderToggle={toggleReminder}
          />
        </main>

        {/* Footer */}
        <footer className="app-footer">
          © 2025 NeoTasks – Built with React & Bootstrap
        </footer>
      </div>

      {/* Toast Notifications */}
      <ToastManager toasts={toasts} removeToast={removeToast} />

      {/* Confirmation Modal */}
      <Modal
        isOpen={modalConfig.isOpen}
        onClose={modalConfig.onClose}
        onConfirm={modalConfig.onConfirm}
        title={modalConfig.title}
        message={modalConfig.message}
        type={modalConfig.type}
      />
    </div>
  );
}

export default App;
