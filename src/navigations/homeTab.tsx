import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomTabBar from '../components/bottomBar';
import CreateScreen from '../screens/main_screens/create';
import HomeScreen from '../screens/main_screens/home';
import ImportantScreen from '../screens/main_screens/important';
import TasksScreen from '../screens/main_screens/tasks';
import TrashScreen from '../screens/main_screens/trash';

export type HomeTabPrams = {
  Home: undefined;
  Important: undefined;
  Create: undefined;
  Trash: undefined;
  Tasks: undefined;
};

const Tab = createBottomTabNavigator<HomeTabPrams>();

const HomeTab = () => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <SafeAreaView style={{flex: 1}}>
      <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />}>
        <Tab.Screen name={'Home'} component={HomeScreen} />
        <Tab.Screen name={'Important'} component={ImportantScreen} />
        <Tab.Screen name={'Create'} component={CreateScreen} />
        <Tab.Screen name={'Trash'} component={TrashScreen} />
        <Tab.Screen name={'Tasks'} component={TasksScreen} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default HomeTab;
