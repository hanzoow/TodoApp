import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {images} from '../assets';

const NoTodo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Image
          source={images.noTodo}
          style={styles.imageStyle}
          resizeMode={'contain'}
        />
        <Text style={styles.titleTextStyle}>No tasks</Text>
        <Text style={styles.desTextStyle}>You have no task to do.</Text>
      </View>
    </View>
  );
};

export default NoTodo;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignContent: 'center'},
  itemContainer: {
    alignItems: 'center',
    flexDirection: 'column',
  },
  imageStyle: {width: 120, height: 165},
  titleTextStyle: {fontSize: 22, color: '#554E8F', marginTop: 30},
  desTextStyle: {fontSize: 17, color: '#82A0B7', marginTop: 10},
});
