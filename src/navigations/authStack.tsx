import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import React from 'react';
import SplashScreen from '../screens/auth_screens/splash';
import SignInScreen from '../screens/auth_screens/sign_in';
import SignUpScreen from '../screens/auth_screens/sign_up';

const Stack = createStackNavigator();

const AuthStack = () => {
  const navigationOptions: StackNavigationOptions = {
    headerShown: false,
    gestureEnabled: false,
  };

  return (
    <Stack.Navigator
      screenOptions={navigationOptions}
      initialRouteName={'SignIn'}>
      <Stack.Screen name={'Splash'} component={SplashScreen} />
      <Stack.Screen name={'SignIn'} component={SignInScreen} />
      <Stack.Screen name={'SignUp'} component={SignUpScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
