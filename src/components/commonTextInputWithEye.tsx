import * as React from 'react';
import {StyleSheet, TextInputProps, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CommonTextInput from './commonTextInput';

export interface CommonTextInputWithEyeProps extends TextInputProps {
  hidePassword?: boolean;
  onHidePasswordPressed?: () => void;
}

const CommonTextInputWithEye = (props: CommonTextInputWithEyeProps) => {
  return (
    <View style={styles.container}>
      <CommonTextInput
        onSubmitEditing={props.onSubmitEditing}
        value={props.value}
        onChangeText={props.onChangeText}
        secureTextEntry={props.secureTextEntry}
        returnKeyType={props.returnKeyType}
        placeholder={props.placeholder}
      />
      <Icon
        onPress={props.onHidePasswordPressed}
        name={props.hidePassword ? 'eye-outline' : 'eye-off-outline'}
        size={25}
        style={{position: 'absolute', right: 15}}
      />
    </View>
  );
};

export default CommonTextInputWithEye;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
});
