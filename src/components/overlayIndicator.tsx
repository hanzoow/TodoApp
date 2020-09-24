import React from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';

export interface props {
  isLoading: boolean;
}

const OverlayIndicator = ({isLoading}: props) => {
  return isLoading ? (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size={'small'} color={'yellow'} />
    </View>
  ) : (
    <></>
  );
};
export default OverlayIndicator;
const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignContent: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: 3,
    opacity: 0.7,
  },
});
