import React, {useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {images} from '../../assets';
import Icon from 'react-native-vector-icons/Ionicons';
import {commonStyles} from '../../common/commonStyle';

export interface notificationHeaderProps {
  name: string;
  time: string;
  initVisible?: boolean;
}

const NotifcationHeader = (props: notificationHeaderProps) => {
  const [isVisible, setIsVisible] = useState(true);

  const _closeNotificationsRemind = () => {
    setIsVisible(!isVisible);
  };

  return isVisible && props.initVisible ? (
    <View style={styles.container}>
      <View style={styles.backgroundContainer}>
        <View style={styles.itemContainer}>
          <Icon
            name={'close-outline'}
            size={30}
            style={commonStyles.selfEnd}
            onPress={_closeNotificationsRemind}
          />
          <View style={styles.viewContainer}>
            <View style={commonStyles.column}>
              <Text style={styles.titleReminder}>Today Reminder</Text>
              <Text style={styles.contentRemindTextStyle}>{props.name}</Text>
              <Text style={styles.contentRemindTextStyle}>{props.time}</Text>
            </View>
            <Image source={images.bellHeader} style={styles.bellImageStyle} />
          </View>
        </View>
      </View>
    </View>
  ) : null;
};

export default NotifcationHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#96C0F0',
    borderRadius: 10,
    marginVertical: 18,
    display: 'flex',
  },
  backgroundContainer: {
    backgroundColor: 'transparent',
  },
  itemContainer: {overflow: 'visible', opacity: 1, width: '100%'},
  viewContainer: {
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    marginHorizontal: 12,
    paddingBottom: 20,
  },
  titleReminder: {fontSize: 24, color: 'white'},
  contentRemindTextStyle: {fontSize: 15, color: 'white'},
  bellImageStyle: {
    height: 66.18,
    width: 52.32,
    alignSelf: 'flex-end',
    resizeMode: 'contain',
  },
});
