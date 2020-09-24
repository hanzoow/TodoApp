export interface UserAction<T> {
  type: string;
  payload: T;
}

export interface userLoginWithEmail {
  email: string;
  password: string;
}

export interface userGoogleLogin {
  email: string;
  avatarUrl: string;
  fullname: string;
  gender: 2;
  phone: string;
  username: string;
  uid: string;
}

export interface userRegisterWithEmail {
  email: string;
  password: string;
}

export interface bithdayData {
  date: number;
  month: number;
  year: number;
}

export interface registerParams {
  email: string;
  password: string;
  userName: string;
  fullname: string;
  phone: string;
  birthday: bithdayData;
  gender: number;
  avatarUrl: string;
}

export interface registerParamsWithoutPassword {
  email: string;
  userName: string;
  fullname: string;
  phone: string;
  birthday: bithdayData;
  gender: number;
  avatarUrl: string;
  uid: string;
}
