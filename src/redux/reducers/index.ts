import {
  TypedUseSelectorHook,
  useSelector as useReduxSelector,
} from 'react-redux';
import {combineReducers} from 'redux';
import userReducer from './user/reducer';
import tasksReducer from './tasks/reducer';
import todosReducer from './todos/reducer';
import {userPayload} from '../type/user';
import {taskState} from '../type/tasks';
import {todoState} from '../type/todos';
export type AppState = {
  user: userPayload;
  tasks: taskState;
  todos: todoState;
};

const rootReducer = combineReducers<AppState>({
  user: userReducer,
  tasks: tasksReducer,
  todos: todosReducer,
});
export const useSelector: TypedUseSelectorHook<ReturnType<
  typeof rootReducer
>> = useReduxSelector;
export default rootReducer;
