import React from 'react';
import {
  TouchableOpacityProperties,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
export interface CommonButtonProps extends TouchableOpacityProperties {
  title?: string;
  onButtonPressed: () => void;
  disabled?: boolean;
}

const CommonButton = ({
  title,
  onButtonPressed,
  disabled,
}: CommonButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.buttonStyle]}
      disabled={disabled}
      onPress={onButtonPressed}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};
export default CommonButton;

const styles = StyleSheet.create({
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: 'grey',
    height: 60,
    justifyContent: 'center',
    borderRadius: 9,
    marginTop: 50,
  },
});
