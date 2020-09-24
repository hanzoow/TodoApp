import {userPayload} from '../../type/user';

export const initialUserState: userPayload = {
  loginStatus: false,
  userInfo: {
    email: '',
    avatarUrl: 'default',
    birthday: {day: 0, month: 0, year: 0},
    fullname: '',
    gender: 2,
    phone: '',
    username: '',
    uid: '',
  },
};
