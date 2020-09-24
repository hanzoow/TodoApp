import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {
  userLoginWithEmail,
  registerParams,
  registerParamsWithoutPassword,
} from '../../redux/actions/user/interface';

export default class FirebaseAuthHelper {
  static signInWithEmailAndPassword = async (user: userLoginWithEmail) => {
    const authResult = await auth().signInWithEmailAndPassword(
      user.email,
      user.password,
    );
    return authResult;
  };

  static compareUserWhenSignInInStoreByUsername = async (username: string) => {
    const compareResult = await firestore()
      .collection('users')
      .doc(username)
      .get();
    return compareResult.exists;
  };

  static getUserByUsername = async (username: string) => {
    const result = await firestore()
      .collection('users')
      .where('username', '==', username)
      .get();
    return result;
  };

  static compareUserWhenSignInInStoreByEmail = async (email: string) => {
    const storeResult = await firestore()
      .collection('users')
      .where('email', '==', email)
      .get();
    return storeResult;
  };
  static registerNewAccount = async (registerData: registerParams) => {
    const registerResult = await auth().createUserWithEmailAndPassword(
      registerData.email,
      registerData.password,
    );
    return registerResult;
  };

  static createNewUserInStore = async (
    registerData: registerParamsWithoutPassword,
  ) => {
    const createResult = await firestore()
      .collection('users')
      .doc(registerData.uid)
      .set({
        uid: registerData.uid,
        username: registerData.userName,
        email: registerData.email,
        fullname: registerData.fullname,
        phone: registerData.phone,
        bithday: {
          date: registerData.birthday.date,
          month: registerData.birthday.month,
          year: registerData.birthday.year,
        },
        gender: registerData.gender,
        avatarUrl: 'default',
      });
    return createResult;
  };
}
