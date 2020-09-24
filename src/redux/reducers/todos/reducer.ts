import {Alert} from 'react-native';
import {initialTodosState} from './initialState';
import {todosActionsType, todosState} from '../../type/todos';
import {todosActions} from '../../actions/todos';
import {MessageAction} from '../commonInterface';

export default (
  state: todosState = initialTodosState,
  action: todosActions,
) => {
  console.log(action.payload);
  switch (action.type) {
    case todosActionsType.GET_ALL_TODOS_SUCCESS:
      return {...state, ...action.payload};
    case todosActionsType.GET_ALL_TODOS_FAILURE:
      action = <MessageAction>action;
      Alert.alert('Error', action.payload.message);
      return state;
    default:
      return state;
  }
};
