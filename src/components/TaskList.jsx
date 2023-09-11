import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_ALL_TASKS } from '../queries/queries'; // Importa la consulta
import { DELETE_TASK } from '../queries/mutations'; // Importa la mutación

const TaskList = () => {
  const { loading, error, data } = useQuery(GET_ALL_TASKS);
  const [deleteTask] = useMutation(DELETE_TASK);

  const handleDeleteTask = async (taskId) => {
    try {
      await deleteTask({ variables: { id: taskId } });
      alert('tarea elimminada correctamente')
    } catch (error) {
      alert('Error al eliminar la tarea:', error);
    }
  };

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
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.getAllTasks.map((task) => (
            <tr key={task.id}>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>
                <button onClick={() => handleDeleteTask(task.id)} className="btn btn-danger">
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
