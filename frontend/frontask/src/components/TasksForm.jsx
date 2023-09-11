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

const TaskForm = () => {
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
    } catch (error) {
      console.error('Error al crear tarea:', error);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
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
  </form>
  );
};

export default TaskForm;
