import {languages} from './../../../languages/index';
import {ThunkDispatch} from 'redux-thunk';
import FirebaseTasksHelper from '../../../dataHelper/firebaseHelper/tasks';
import {tasksInfo, tasksActionsType, taskState} from '../../type/tasks';
import {MessageAction, SuccessAction} from '../../reducers/commonInterface';
import {tasksAction} from '../../reducers/tasks/interface';

export const getAllTasks = () => {
  return (dispatch: ThunkDispatch<void, {}, tasksActions>) => {
    FirebaseTasksHelper.getAllTasks().then((result) => {
      const tasks: any = [];
      result.forEach((task) => {
        const eachTask: tasksInfo = {
          icon: task.icon,
          id: task.id,
          name: task.name,
          representColor: task.representColor,
          sumOfTodos: task.sumOfTodos,
        };
        tasks.push(eachTask);
      });
      dispatch(getAllTasksSuccess(tasks));
    });
  };
};

export const getAllTasksSuccess = (
  tasks: taskState,
): SuccessAction<taskState> => {
  return {
    type: tasksActionsType.GET_ALL_TASKS_SUCCESS,
    payload: {tasks: tasks},
  };
};

export const createNewTask = (task: tasksInfo) => {
  return (dispatch: ThunkDispatch<void, {}, tasksActions>) => {
    const createNewTaskParams: tasksInfo = {
      id: task.id,
      name: task.name || '',
      icon: task.icon,
      representColor: task.representColor,
      sumOfTodos: task.sumOfTodos,
    };
    FirebaseTasksHelper.createNewTask(createNewTaskParams)
      .then((createResult) => {
        console.log(createResult);
        dispatch(createNewTaskSuccess(createNewTaskParams));
      })
      .catch((error) => {
        dispatch(createNewTaskFailure(error));
      });
  };
};

export const updateTask = (task: tasksInfo) => {
  return (dispatch: ThunkDispatch<void, {}, tasksActions>) => {
    FirebaseTasksHelper.updateTask(task)
      .then((updateResult) => {
        console.log(updateResult);
        dispatch(updateTaskSuccess(languages.update_message_successfully));
      })
      .catch((error) => {
        dispatch(updateTaskFailure(error));
      });
  };
};

export const updateTaskFailure = (error: string): MessageAction => {
  return {
    type: tasksActionsType.UPDATE_FAILURE,
    payload: {
      message: error,
    },
  };
};

export const updateTaskSuccess = (message: string): MessageAction => {
  return {
    type: tasksActionsType.UPDATE_SUCCESS,
    payload: {
      message,
    },
  };
};
export const createNewTaskFailure = (error: string): MessageAction => {
  return {
    type: tasksActionsType.CREATE_SUCCESS,
    payload: {
      message: error,
    },
  };
};

export const createNewTaskSuccess = (
  payload: tasksInfo,
): SuccessAction<tasksInfo> => {
  return {
    type: tasksActionsType.CREATE_SUCCESS,
    payload,
  };
};

export type tasksActions =
  | tasksAction<tasksInfo>
  | MessageAction
  | SuccessAction<taskState>
  | SuccessAction<tasksInfo>;
