import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import RootTab from './rootTab';
import {navigationRef} from './rootNavigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
const RootStack = createStackNavigator<any>();

const index = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
        <RootStack.Navigator
          headerMode={'none'}
          screenOptions={{headerShown: false}}
          initialRouteName={'RootTab'}>
          <RootStack.Screen component={RootTab} name={'RootTab'} />
        </RootStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default index;
