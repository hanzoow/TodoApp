import {initialTasksState} from './initialState';
import {taskState, tasksActionsType} from '../../type/tasks';
import {tasksActions} from '../../actions/tasks';

export default (state: taskState = initialTasksState, action: tasksActions) => {
  switch (action.type) {
    // case tasksActionsType.CREATE_SUCCESS:
    case tasksActionsType.GET_ALL_TASKS_SUCCESS:
      return {...state, ...action.payload};
    default:
      return state;
  }
};
