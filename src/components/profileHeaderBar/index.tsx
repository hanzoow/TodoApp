import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {images} from '../../assets';
import {commonStyles} from '../../common/commonStyle';
export interface ProfileHeaderProps {
  username: string;
  numberOfTasksToday: number;
  avatarUrl: string;
}

const ProfileHeaderBar = (props: ProfileHeaderProps) => {
  return (
    <View style={styles.container}>
      <View style={commonStyles.column}>
        <Text style={styles.welcomeText}>Hello {props.username}!</Text>
        <Text style={styles.countTasks}>
          Today you have {props.numberOfTasksToday} tasks
        </Text>
      </View>
      <View style={styles.avatarContainer}>
        <Image
          source={
            props.avatarUrl !== 'default'
              ? {uri: props.avatarUrl}
              : images.logoApp
          }
          style={styles.imageStyle}
          resizeMode={'stretch'}
        />
      </View>
    </View>
  );
};

export default ProfileHeaderBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
  },
  welcomeText: {fontSize: 24, color: 'white'},
  countTasks: {paddingTop: 5, color: 'white'},
  avatarContainer: {
    overflow: 'hidden',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  imageStyle: {width: 60, height: 60},
});
