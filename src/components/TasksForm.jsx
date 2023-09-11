import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';

const CREATE_TASK = gql`
  mutation CreateTask($task: TaskInput!) {
    createTask(task: $task) {
      id
      title
      description
    }
  }
`;

const TaskForm = ({ onClose }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const [createTask] = useMutation(CREATE_TASK);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await createTask({
        variables: { task: { title, description } },
      });

      console.log('Nueva tarea creada:', data.createTask);

      // Limpiar el formulario después de la creación exitosa
      setTitle('');
      setDescription('');

      // Cerrar el formulario
      onClose();
    } catch (error) {
      console.error('Error al crear tarea:', error);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-1">
      {/* Contenedor centrado vertical y horizontalmente */}
      <form onSubmit={handleFormSubmit} className="w-50">
        {/* Contenido del formulario */}
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Título:
          </label>
          <input
            type="text"
            id="title"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Descripción:
          </label>
          <textarea
            id="description"
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Crear Tarea
        </button>
        <button
          type="button"
          className="btn btn-secondary ml-2"
          onClick={onClose}
        >
          Cancelar
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
