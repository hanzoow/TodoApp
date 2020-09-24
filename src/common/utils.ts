import {Dimensions} from 'react-native';

export default class Utils {
  static screenHeight = () => Dimensions.get('window').height;
  static screenWidth = () => Dimensions.get('window').width;
  static validEmail = (email: string) => {
    const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(email);
  };
  static uniqueIdGen = () => '_' + Math.random().toString(36).substr(2, 9);
}
