import {languages} from './../../../languages/index';
/* eslint-disable @typescript-eslint/no-unused-vars */
import {userPayload, userInfo, userActionsType} from '../../type/user';
import {ThunkDispatch, ThunkAction} from 'redux-thunk';
import FirebaseAuthHelper from '../../../dataHelper/firebaseHelper/auth';
import {MessageAction, SuccessAction} from '../../reducers/commonInterface';
import {navigate} from '../../../navigations/rootNavigation';

import {
  UserAction,
  userGoogleLogin,
  registerParamsWithoutPassword,
  userLoginWithEmail,
  registerParams,
} from './interface';
import {Session} from '../../../dataHelper/asyncStorage/session';
import {constanst} from '../../../common/const';

export const socialLoginRequest = (user: userGoogleLogin) => {
  return (dispatch: ThunkDispatch<void, {}, userActions>) => {
    const result: userPayload = {
      loginStatus: true,
      userInfo: {
        avatarUrl: user.avatarUrl,
        birthday: {day: 0, month: 0, year: 0},
        email: user.email,
        fullname: user.fullname,
        gender: user.gender,
        phone: user.phone,
        username: user.username,
        uid: user.username,
      },
    };
    const registerUserParams: registerParamsWithoutPassword = {
      birthday: {
        date: 0,
        month: 0,
        year: 0,
      },
      avatarUrl: user.avatarUrl,
      email: user.email,
      fullname: user.fullname,
      gender: 2,
      phone: user.phone,
      userName: user.username,
      uid: user.uid,
    };
    FirebaseAuthHelper.compareUserWhenSignInInStoreByUsername(user.username)
      .then((status) => {
        if (status) {
          dispatch(loginSuccess(result));
        } else {
          FirebaseAuthHelper.createNewUserInStore(registerUserParams)
            .then((sc) => {
              dispatch(loginSuccess(result));
            })
            .catch((er) => {
              dispatch(loginFailure(er));
            });
        }
      })
      .catch((er) => {
        dispatch(loginFailure(er));
      });
  };
};

export const loginRequest = (user: userLoginWithEmail) => {
  return (dispatch: ThunkDispatch<void, {}, userActions>) => {
    dispatch(() => {
      FirebaseAuthHelper.signInWithEmailAndPassword(user)
        .then((signInResult) => {
          if (signInResult.user) {
            FirebaseAuthHelper.compareUserWhenSignInInStoreByEmail(user.email)
              .then((compare) => {
                if (compare.size > 0) {
                  setTimeout(() => {
                    navigate('HomeTab');
                  }, 500);
                  const {
                    uid,
                    avatarUrl,
                    birthday,
                    email,
                    fullname,
                    gender,
                    phone,
                    username,
                  } = compare.docs[0].data();
                  const result: userPayload = {
                    loginStatus: true,
                    userInfo: {
                      avatarUrl,
                      uid,
                      phone,
                      gender,
                      fullname,
                      birthday,
                      email,
                      username,
                    },
                  };
                  Session.saveUser(result.userInfo).then((rs) => {
                    dispatch(loginSuccess(result));
                  });
                } else {
                  dispatch(loginFailure(languages.email_or_password_incorrect));
                }
              })
              .catch((error) => {
                dispatch(loginFailure(error));
              });
          }
        })
        .catch((error) => {
          dispatch(loginFailure(error));
        });
    });
  };
};

export const saveToStore = (
  registerData: registerParamsWithoutPassword,
  password: string,
) => {
  return (dispatch: ThunkDispatch<{}, {}, userActions>) => {
    return FirebaseAuthHelper.createNewUserInStore(registerData)
      .then((rs) => {
        console.log(rs);
        dispatch(
          loginRequest({
            email: registerData.email,
            password,
          }),
        );
      })
      .catch((err) => {
        dispatch(registerFailure(err));
      });
  };
};

export const registerRequest = (registerData: registerParams) => {
  return (dispatch: ThunkDispatch<{}, {}, userActions>) => {
    return FirebaseAuthHelper.registerNewAccount(registerData)
      .then((rs) => {
        if (rs.user) {
          const {uid, email} = rs.user;
          const register: registerParamsWithoutPassword = {
            avatarUrl: 'default',
            birthday: {date: 0, month: 0, year: 0},
            email: email || '',
            fullname: '',
            gender: 2,
            phone: '',
            uid,
            userName: registerData.userName,
          };
          dispatch(saveToStore(register, registerData.password));
        }
      })
      .catch((e) => {
        console.log(e);
        dispatch(registerFailure(`${e}`));
      });
  };
};

export const registerFailure = (error: string): MessageAction => {
  return {
    payload: {
      message: error,
    },
    type: userActionsType.REGISTER_FAILURE,
  };
};

export const logoutRequest = () => {
  return {
    type: userActionsType.LOGOUT_REQUEST,
  };
};

export const loginFailure = (error: string): MessageAction => {
  return {
    type: userActionsType.LOGIN_FAILURE,
    payload: {
      message: error,
    },
  };
};

export const loginSuccess = (
  payload: userPayload,
): SuccessAction<userPayload> => {
  return {
    type: userActionsType.LOGIN_SUCCESS,
    payload,
  };
};

export type userActions =
  | UserAction<userPayload>
  | MessageAction
  | SuccessAction<userPayload>
  | UserAction<userInfo>
  | UserAction<registerParams>
  | UserAction<undefined>;
