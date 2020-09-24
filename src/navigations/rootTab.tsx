import * as React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import AuthStack from './authStack';
import {useSelector} from '../redux/reducers';
import HomeTab from './homeTab';

const RootTab = createStackNavigator<any>();

const index = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const user = useSelector((state) => state).user;
  const navigationOptions: StackNavigationOptions = {
    headerShown: false,
    gestureEnabled: false,
  };
  const isLogged = user.loginStatus;
  return (
    <RootTab.Navigator
      screenOptions={navigationOptions}
      initialRouteName={isLogged ? 'HomeStack' : 'AuthStack'}>
      {isLogged ? (
        <RootTab.Screen component={HomeTab} name={'HomeStack'} />
      ) : (
        <RootTab.Screen component={AuthStack} name={'AuthStack'} />
      )}
    </RootTab.Navigator>
  );
};

export default index;
