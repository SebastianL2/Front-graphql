import { gql } from '@apollo/client';

export const GET_ALL_TASKS = gql`
  query GetAllTasks {
    getAllTasks {
      id
      title
      description
    }
  }
`;
