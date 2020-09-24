import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
export interface SocialButtonsProps {
  name: string;
  onSocialPressed: () => void;
}

const SocialButtons = (props: SocialButtonsProps) => {
  return (
    <TouchableOpacity
      onPress={props.onSocialPressed}
      style={{
        backgroundColor: 'blue',
        height: 50,
        width: 50,
        borderRadius: 25,
        marginHorizontal:20,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Icon name={props.name} size={30} />
    </TouchableOpacity>
  );
};

export default SocialButtons;
