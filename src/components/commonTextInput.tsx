import * as React from 'react';
import {TextInputProps, TextInput} from 'react-native';

export interface CommonTextInputProps extends TextInputProps {}

const defaultProps = {
  style: {
    width: '100%',
    height: 60,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 9,
    borderColor: 'blue',
    borderWidth: 1,
  },
};

const CommonTextInput = (props: CommonTextInputProps) => {
  return (
    <TextInput
      secureTextEntry={props.secureTextEntry}
      placeholder={props.placeholder}
      autoFocus={props.autoFocus}
      returnKeyType={props.returnKeyType}
      onChangeText={props.onChangeText}
      onSubmitEditing={props.onSubmitEditing}
      style={[defaultProps.style, props.style]}
    />
  );
};

export default CommonTextInput;
