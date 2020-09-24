import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import {images} from '../../assets';
import NotifcationHeader from '../notificationHeaderBar';
import ProfileHeaderBar from '../profileHeaderBar';
import {useSelector} from '../../redux/reducers';
export interface HeaderBarProps {
  visibleNoti: boolean;
}

const HeaderBar = (props: HeaderBarProps) => {
  const {user, todos} = useSelector((state) => state);
  return (
    <ImageBackground
      style={styles.imageStyle}
      source={images.headerBackgroundImage}>
      <View style={styles.container}>
        <ProfileHeaderBar
          avatarUrl={user.userInfo.avatarUrl}
          numberOfTasksToday={todos.todos.length}
          username={user.userInfo.fullname}
        />
        <NotifcationHeader
          initVisible={props.visibleNoti}
          name={'Hello'}
          time={'12.00 PM'}
        />
      </View>
    </ImageBackground>
  );
};

export default HeaderBar;

const styles = StyleSheet.create({
  container: {marginHorizontal: 12},
  imageStyle: {width: '100%', display: 'flex'},
});
