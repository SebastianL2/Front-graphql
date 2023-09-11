
import React, { useState } from 'react';
import TaskForm from './components/TasksForm';

const App = () => {

  const [showTaskForm, setShowTaskForm] = useState(false);

  const toggleTaskForm = () => {
    setShowTaskForm(!showTaskForm);
  };

  return (
    <div>
       <h1>Tareas</h1>
      <button
        className="btn btn-primary mb-3"
        onClick={toggleTaskForm}
      >
        Tarea Nueva
      </button>
      {showTaskForm && <TaskForm />}
    </div>
  );
};

export default App;