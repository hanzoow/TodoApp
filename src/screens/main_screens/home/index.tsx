import React from 'react';
import HeaderBar from '../../../components/headerBar';
import {SafeAreaView} from 'react-native';

const HomeScreen = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(logoutRequest());
  // });
  return (
    <SafeAreaView style={{flex: 1}}>
      <HeaderBar />
    </SafeAreaView>
  );
};

export default HomeScreen;
