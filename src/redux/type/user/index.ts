export type userInfo = {
  email: string | null;
  avatarUrl: string | null;
  gender: number | null;
  username: string | null;
  birthday: {day: number; month: number; year: number};
  fullname: string;
  phone: string;
  uid: string;
};

export type userPayload = {
  loginStatus: boolean;
  userInfo: userInfo;
};

export const userActionsType = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
  LOGOUT_REQUEST: 'LOGOUT_REQUEST',
  LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
  LOGOUT_FAILURE: 'LOGOUT_FAILURE',
  REGISTER_REQUEST: 'LOGOUT_REQUEST',
  REGISTER_SUCCESS: 'LOGOUT_SUCCESS',
  REGISTER_FAILURE: 'LOGOUT_FAILURE',
};
