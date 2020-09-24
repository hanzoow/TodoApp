
export type todoInfo = {
  id: string;
  timeCreated: string;
  title: string;
  content: string;
  willBeNotified: boolean;
  taskId: string;
};

export const todosActionsType = {
  CREATE_TODO: 'CREATE_TODO',
  EDIT_TODO: 'EDIT_TODO',
  DELELTE_TODO: 'DELETE_TODO',
  SET_DONE: 'SET_DONE',
  SET_NOTIFICATION: 'SET_NOTIFICATION',
  UPDATE_TODOS: 'UPDATE_TODO',
};
