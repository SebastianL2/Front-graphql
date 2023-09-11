
import React, { useState } from 'react';
import TaskForm from './components/TasksForm';

const App = () => {
  const [showTaskForm, setShowTaskForm] = useState(false);

  const toggleTaskForm = () => {
    setShowTaskForm(!showTaskForm);
  };

  const closeTaskForm = () => {
    setShowTaskForm(false);
  };

  return (
    <div className="container text-center">
    <h1>Tareas</h1>
    <button
      className="btn btn-primary mb-3"
      onClick={toggleTaskForm}
    >
      Tarea Nueva
    </button>
    {showTaskForm && (
      <div className="d-flex justify-content-center align-items-center ">
        {/* Centra el TaskForm vertical y horizontalmente */}
        <TaskForm onClose={closeTaskForm} />
      </div>
    )}
  </div>
  );
};


export default App;