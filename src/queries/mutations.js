import { gql } from '@apollo/client';

export const DELETE_TASK = gql`
  mutation DeleteTask($id: ID!) {
    deleteTask(id: $id)
  }
`;
export const UPDATE_TASK = gql`
  mutation UpdateTask($id: ID!, $task: TaskInput!) {
    updateTask(id: $id, task: $task) {
      id
      title
      description
    }
  }
  `;