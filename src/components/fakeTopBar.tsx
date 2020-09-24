import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {goBack} from '../navigations/rootNavigation';

const FakeTopBar = () => {
  const _onArrowBackPressed = () => {
    goBack();
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        height: 40,
        alignContent: 'center',
        backgroundColor: 'white',
      }}>
      <Icon
        name={'arrow-back-outline'}
        style={{alignSelf: 'center', marginLeft: 14}}
        onPress={_onArrowBackPressed}
        size={24}
      />
    </View>
  );
};

export default FakeTopBar;
