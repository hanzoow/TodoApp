import {
  TypedUseSelectorHook,
  useSelector as useReduxSelector,
} from 'react-redux';
import {combineReducers} from 'redux';
import userReducer from './user/reducer';
import tasksReducer from './tasks/reducer';
import {userPayload} from '../type/user';
import {taskState} from '../type/tasks';
export type AppState = {
  user: userPayload;
  tasks: taskState;
};

const rootReducer = combineReducers<AppState>({
  user: userReducer,
  tasks: tasksReducer,
});
export const useSelector: TypedUseSelectorHook<ReturnType<
  typeof rootReducer
>> = useReduxSelector;
export default rootReducer;
