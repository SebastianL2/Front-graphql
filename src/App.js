import React, { useState } from 'react';
import TaskForm from './components/TasksForm';
import TaskList from './components/TaskList'; // Importa el componente TaskList


const App = () => {
  const [showTaskForm, setShowTaskForm] = useState(false);
  const [showTaskList, setShowTaskList] = useState(false); // Estado para mostrar/ocultar la tabla

  const toggleTaskForm = () => {
    setShowTaskForm(!showTaskForm);
  };

  const toggleTaskList = () => {
    setShowTaskList(!showTaskList);
  };

  const closeTaskForm = () => {
    setShowTaskForm(false);
  };

  return (
    <div className="container text-center">
      <h1>Tareas</h1>
      <button className="btn btn-primary mb-3" onClick={toggleTaskForm}>
        Tarea Nueva
      </button>
      <button className="btn btn-secondary mb-3" onClick={toggleTaskList}>
        Mostrar/Esconder Lista de Tareas
      </button>
      {showTaskForm && (
        <div className="d-flex justify-content-center align-items-center">
          {/* Centra el TaskForm vertical y horizontalmente */}
          <TaskForm onClose={closeTaskForm} />
        </div>
      )}
      {showTaskList && <TaskList />} {/* Muestra la tabla si showTaskList es true */}
    </div>
  );
};

export default App;
