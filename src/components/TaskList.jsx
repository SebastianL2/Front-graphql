import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_ALL_TASKS } from '../queries/queries'; // Importa la consulta
import { UPDATE_TASK, DELETE_TASK } from '../queries/mutations'; // Importa la mutación

const TaskList = () => {
    const { loading, error, data } = useQuery(GET_ALL_TASKS);
    const [updateTask] = useMutation(UPDATE_TASK);
    const [deleteTask] = useMutation(DELETE_TASK);
    const [editedTask, setEditedTask] = useState({ id: '', title: '', description: '' });
  
    const handleEditTask = (task) => {
      setEditedTask(task);
    };
  
    const handleUpdateTask = async () => {
      try {
        const { id, title, description } = editedTask;
        await updateTask({ variables: { id, task: { title, description } } });
        setEditedTask({ id: '', title: '', description: '' });
      } catch (error) {
        console.error('Error al actualizar la tarea:', error);
      }
    };
  
    const handleDeleteTask = async (taskId) => {
      try {
        await deleteTask({ variables: { id: taskId } });
      } catch (error) {
        console.error('Error al eliminar la tarea:', error);
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
                <td>
                  {editedTask.id === task.id ? (
                    <input
                      type="text"
                      value={editedTask.title}
                      onChange={(e) => setEditedTask({ ...editedTask, title: e.target.value })}
                    />
                  ) : (
                    task.title
                  )}
                </td>
                <td>
                  {editedTask.id === task.id ? (
                    <input
                      type="text"
                      value={editedTask.description}
                      onChange={(e) => setEditedTask({ ...editedTask, description: e.target.value })}
                    />
                  ) : (
                    task.description
                  )}
                </td>
                <td>
                  {editedTask.id === task.id ? (
                    <button onClick={handleUpdateTask} className="btn btn-success">
                      Guardar
                    </button>
                  ) : (
                    <>
                      <button onClick={() => handleEditTask(task)} className="btn btn-primary mr-2">
                        Editar
                      </button>
                      <button onClick={() => handleDeleteTask(task.id)} className="btn btn-danger">
                        Eliminar
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default TaskList;