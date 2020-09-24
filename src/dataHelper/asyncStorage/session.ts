import {userInfo} from '../../redux/type/user';
import {AsyncStorage} from 'react-native';
import {constanst} from '../../common/const';

export const Session = {
  saveUser: async (user: userInfo) => {
    debugger;
    console.log(user)
    await Session.setData(constanst.keys.CURRENT_USER, user);
  },

  setData: async (key: string, data: any) => {
    if (data) {
      debugger;
      console.log(data)
      await AsyncStorage.setItem(key, JSON.stringify(data));
    } else {
      console.log("NONO")
      await AsyncStorage.removeItem(key);
    }
  },

  removeData: async (key: string) => {
    await AsyncStorage.removeItem(key);
  },

  getData: async (key: string) => {
    let data = await AsyncStorage.getItem(key);
    if (data) {
      data = JSON.parse(data);
    }
    return data;
  },
};
