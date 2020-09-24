/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CommonTextInput from '../../../components/commonTextInput';
import FakeTopBar from '../../../components/fakeTopBar';
import Utils from '../../../common/utils';
import {languages} from '../../../languages';
import CommonButton from '../../../components/commonButton';
import {useDispatch} from 'react-redux';
import * as yup from 'yup';
import CommonTextInputWithEye from '../../../components/commonTextInputWithEye';
import OverlayIndicator from '../../../components/overlayIndicator';
import {registerRequest, registerFailure} from '../../../redux/actions/user';
import FirebaseAuthHelper from '../../../dataHelper/firebaseHelper/auth';
const SignUpScreen = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = React.useState('');
  const [password, setPassowrd] = React.useState('');
  const [retypePassowrd, setRetypePassword] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [hidePassword, setHidePassword] = React.useState(false);
  const [hideConfirmPassowrd, setHideConfirmPassword] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const _validatePassowrd = async () => {
    const validatePasswordResult = await yup
      .string()
      .required('Password is required')
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .validate(password);

    return validatePasswordResult;
  };

  const _validateUsername = async () => {
    const validateUsernameResult = await yup
      .string()
      .required()
      .validate(username);
    debugger;
    return validateUsernameResult;
  };

  const _validateEmail = async () => {
    const validateEmailResult = await yup
      .string()
      .required()
      .email()
      .validate(email);
    return validateEmailResult;
  };

  const _onHidePasswordPressed = () => {
    setHidePassword(!hidePassword);
  };

  const _onHideConfirmPasswordPressed = () => {
    setHideConfirmPassword(!hideConfirmPassowrd);
  };

  const _validateConfirmPassword = () => {
    return retypePassowrd === password;
  };
  const _onRegisterPressed = async () => {
    _validateEmail()
      .then(async (result) => {
        _validatePassowrd()
          .then(async (rs) => {
            if (_validateConfirmPassword()) {
              const isEmailExistInStore = FirebaseAuthHelper.compareUserWhenSignInInStoreByEmail(
                email,
              );
              if (isEmailExistInStore) {
                setLoading(true);
                await dispatch(
                  registerRequest({
                    email,
                    password,
                    phone: '',
                    birthday: {
                      date: 0,
                      month: 0,
                      year: 0,
                    },
                    fullname: '',
                    gender: 2,
                    userName: username,
                    avatarUrl: 'default',
                  }),
                );
                setLoading(false);
              } else {
                dispatch(registerFailure(languages.email_is_exist_in_store));
              }
            } else {
              dispatch(registerFailure(languages.not_match_password));
            }
          })
          .catch((err) => {
            dispatch(registerFailure(err.message));
          });
      })
      .catch(async (error) => {
        dispatch(registerFailure(languages.wrong_email_format));
      });
  };

  const _onUsernameChanged = (usernameChanged: string) => {
    setUsername(usernameChanged);
  };

  const _onEmailChanged = (emailChanged: string) => {
    setEmail(emailChanged);
  };

  const _onPasswordChanged = (passwordChanged: string) => {
    setPassowrd(passwordChanged);
  };

  const _onRetypePasswordChanged = (retypePasswordChanged: string) => {
    setRetypePassword(retypePasswordChanged);
  };

  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <OverlayIndicator isLoading={loading} />
      <FakeTopBar />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: 30,
          marginTop: Utils.screenHeight() / 10,
        }}>
        <Text style={{paddingBottom: 40}}>{languages.title_sign_up}</Text>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}>
          <CommonTextInput
            placeholder={'Enter your username'}
            returnKeyType={'next'}
            value={username}
            onChangeText={_onUsernameChanged}
          />
          <CommonTextInput
            placeholder={'Enter your email'}
            keyboardType={'email-address'}
            returnKeyType={'next'}
            value={email}
            onChangeText={_onEmailChanged}
            style={{marginTop: 40}}
          />
          <CommonTextInputWithEye
            hidePassword={hidePassword}
            onHidePasswordPressed={_onHidePasswordPressed}
            returnKeyLabel={'next'}
            placeholder={'Enter your password'}
            secureTextEntry={!hidePassword}
            onChangeText={_onPasswordChanged}
            value={password}
          />
          <CommonTextInputWithEye
            hidePassword={hideConfirmPassowrd}
            onHidePasswordPressed={_onHideConfirmPasswordPressed}
            returnKeyLabel={'done'}
            placeholder={'Re-type your password'}
            secureTextEntry={!hideConfirmPassowrd}
            onChangeText={_onRetypePasswordChanged}
            value={retypePassowrd}
          />
        </View>
        <View style={{width: '100%'}}>
          <CommonButton title={'Submit'} onButtonPressed={_onRegisterPressed} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;
