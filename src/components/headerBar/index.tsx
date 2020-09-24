import React from 'react';
import {ImageBackground, View, StyleSheet} from 'react-native';
import {images} from '../../assets';
import NotifcationHeader from '../notificationHeaderBar';
import ProfileHeaderBar from '../profileHeaderBar';

const HeaderBar = () => {
  return (
    <ImageBackground
      style={styles.imageStyle}
      source={images.headerBackgroundImage}>
      <View style={styles.container}>
        <ProfileHeaderBar
          avatarUrl=""
          numberOfTasksToday={9}
          username={'Name'}
        />
        <NotifcationHeader name={'Hello'} time={'12.00 PM'} />
      </View>
    </ImageBackground>
  );
};

export default HeaderBar;

const styles = StyleSheet.create({
  container: {marginHorizontal: 12},
  imageStyle: {width: '100%', display: 'flex'},
});
