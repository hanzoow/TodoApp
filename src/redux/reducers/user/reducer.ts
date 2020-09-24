import {initialUserState} from './initalState';
import {Alert} from 'react-native';
import {MessageAction} from '../commonInterface';
import {userPayload, userActionsType} from '../../type/user';
import {userActions} from '../../actions/user';

export default (state: userPayload = initialUserState, action: userActions) => {
  switch (action.type) {
    case userActionsType.LOGIN_SUCCESS:
      return {...state, ...action.payload};
    case userActionsType.LOGIN_FAILURE:
      action = <MessageAction>action;
      Alert.alert('Error', action.payload.message);
      return state;
    case userActionsType.REGISTER_FAILURE:
      action = <MessageAction>action;
      Alert.alert('Error', action.payload.message);
      return state;
    case userActionsType.LOGOUT_REQUEST:
      return {...state, ...initialUserState};
    default:
      return state;
  }
};
