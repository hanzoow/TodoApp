import {ThunkDispatch} from 'redux-thunk';
import FirebaseTodoHelper from '../../../dataHelper/firebaseHelper/todos';
import {todosAction} from '../../reducers/todos/interface';
import {todoInfo, todosState} from '../../type/todos';
import {
  MessageAction,
  SuccessAction,
} from './../../reducers/commonInterface/index';
import {todosActionsType} from './../../type/todos/index';

export const getAllTodos = (userId: string) => {
  return (dispatch: ThunkDispatch<void, {}, todosActions>) => {
    FirebaseTodoHelper.getAllTodos(userId)
      .then((result) => {
        const todos: any = [];
        result.forEach((todo) => {
          const eachTodo: todoInfo = {
            content: todo.content,
            id: todo.id,
            taskId: todo.taskId,
            timeCreated: todo.timeCreated,
            title: todo.title,
            willBeNotified: todo.willBeNotified,
          };
          todos.push(eachTodo);
        });
        dispatch(getAllTodosSuccess(todos));
      })
      .catch((error) => {
        dispatch(getAllTodosFailure(error));
      });
  };
};

export const getAllTodosSuccess = (
  todos: todosState,
): SuccessAction<todosState> => {
  return {
    type: todosActionsType.GET_ALL_TODOS_SUCCESS,
    payload: {todos},
  };
};

export const getAllTodosFailure = (error: string): MessageAction => {
  return {
    type: todosActionsType.GET_ALL_TODOS_FAILURE,
    payload: {
      message: error,
    },
  };
};

export type todosActions =
  | todosAction<todoInfo>
  | MessageAction
  | SuccessAction<todosState>
  | SuccessAction<todoInfo>;
