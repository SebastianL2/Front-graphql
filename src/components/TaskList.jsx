import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_TASKS } from '../queries/queries'; // Importa la consulta

const TaskList = () => {
  // Consulta para obtener todas las tareas
  const { loading, error, data } = useQuery(GET_ALL_TASKS);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Lista de Tareas</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Título</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          {data.getAllTasks.map((task) => (
            <tr key={task.id}>
              <td>{task.title}</td>
              <td>{task.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
