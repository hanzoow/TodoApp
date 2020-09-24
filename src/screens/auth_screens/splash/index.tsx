import * as React from 'react';
import {View, Text} from 'react-native';
import {navigate} from '../../../navigations/rootNavigation';

const SplashScreen = () => {
  React.useEffect(() => {
    console.log('Aaa');
    setTimeout(() => {
      navigate('SignIn');
    }, 1000);
  }, []);

  return (
    <View>
      <Text>Hello from Splash</Text>
    </View>
  );
};

export default SplashScreen;
