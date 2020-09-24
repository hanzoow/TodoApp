export type tasksInfo = {
  id: string;
  name: string;
  icon: string;
  representColor: string;
  sumOfTodos: number;
};

export type taskState = {
  tasks: any;
};

export const tasksActionsType = {
  EDIT_TASK: 'EDIT_TASK',
  CREATE_TASK: 'CREATE_TASK',
  UPDATE_TASKS: 'UPDATE_TASK',
  CREATE_SUCCESS: 'CREATE_SUCCESS',
  CREATE_FAILURE: 'CREATE_FAILURE',
  UPDATE_SUCCESS: 'UPDATE_SUCCESS',
  UPDATE_FAILURE: 'UPDATE_FAILURE',
  GET_ALL_TASKS_SUCCESS: 'GET_ALL_TASKS_SUCCESS',
  GET_ALL_TASKS_FAILURE: 'GET_ALL_TASKS_FAILURE',
};
