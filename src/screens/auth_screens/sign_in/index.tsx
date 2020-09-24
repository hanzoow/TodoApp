/* eslint-disable @typescript-eslint/no-unused-vars */
import {GoogleSignin} from '@react-native-community/google-signin';
import * as React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {
  AccessToken,
  GraphRequest,
  GraphRequestManager,
  LoginManager,
} from 'react-native-fbsdk';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch} from 'react-redux';
import * as yup from 'yup';
import {images} from '../../../assets';
import {constanst} from '../../../common/const';
import CommonButton from '../../../components/commonButton';
import CommonTextInput from '../../../components/commonTextInput';
import CommonTextInputWithEye from '../../../components/commonTextInputWithEye';
import OverlayIndicator from '../../../components/overlayIndicator';
import SocialButtons from '../../../components/socialButtons';
import {languages} from '../../../languages';
import {navigate} from '../../../navigations/rootNavigation';
import {styles} from './style';
import {
  loginRequest,
  loginFailure,
  socialLoginRequest,
} from '../../../redux/actions/user';
import {userGoogleLogin} from '../../../redux/actions/user/interface';
import FirebaseAuthHelper from '../../../dataHelper/firebaseHelper/auth';

const SignInScreen = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [clickableLoginButton, setClickableLoginButton] = React.useState(false);
  const [hidePassword, setHidePassword] = React.useState(false);

  React.useEffect(() => {
    if (email && password) {
      setClickableLoginButton(true);
    }
    GoogleSignin.configure(constanst.googleSignInConfig);
  }, [email, password]);

  const _onHidePasswordPressed = () => {
    setHidePassword(!hidePassword);
  };

  const _onLoginPressed = async () => {
    let newEmail = '';
    await setLoading(true);
    await yup
      .string()
      .required()
      .email()
      .validate(email)
      .then(async (result) => {
        newEmail = email;
        console.log(newEmail);
        await dispatch(loginRequest({email: newEmail, password}));
        setLoading(false);
      })
      .catch(async (error) => {
        const result = await FirebaseAuthHelper.getUserByUsername(email);
        if (result.docs.length > 0) {
          setLoading(true);
          newEmail = result.docs[0].data().email;
          console.log(newEmail);
          await dispatch(loginRequest({email: newEmail, password}));
          setLoading(false);
        } else {
          dispatch(loginFailure(languages.wrong_email_format));
          setLoading(false);
        }
      });
  };
  const _onEmailChanged = (emailChanged: string) => {
    setEmail(emailChanged);
  };
  const _onPasswordChanged = (passwordChanged: string) => {
    setPassword(passwordChanged);
  };

  const _onRegisterPressed = () => {
    navigate('SignUp');
  };

  const getInfoFromToken = (accessToken: any) => {
    const PROFILE_REQUEST_PARAMS = {
      fields: {
        string:
          'id, name, first_name, last_name, birthday, email,picture.type(large)',
      },
    };
    const profileRequest = new GraphRequest(
      '/me',
      {accessToken, parameters: PROFILE_REQUEST_PARAMS},
      (error: any, result: any) => {
        if (error) {
          console.log('Login Info has an error:', error);
        } else {
          if (result) {
            const facebookLoginPrams: userGoogleLogin = {
              email: result.email,
              fullname: result.name,
              gender: 2,
              phone: '',
              username: result.id,
              avatarUrl: 'default',
              uid: result.id,
            };
            dispatch(socialLoginRequest(facebookLoginPrams));
          }
        }
      },
    );
    new GraphRequestManager().addRequest(profileRequest).start();
  };

  const _onFacebookLoginPressed = () => {
    LoginManager.logInWithPermissions(['public_profile', 'email']).then(
      (login) => {
        if (login.isCancelled) {
          console.log('Login Canceled');
        } else {
          AccessToken.getCurrentAccessToken().then((data) => {
            const accessToken = data?.accessToken.toString();
            getInfoFromToken(accessToken);
          });
        }
      },
      (error) => {
        console.log('Error no login ', error);
      },
    );
  };

  const _onGoogleLoginPressed = async () => {
    const userInfo = await GoogleSignin.signIn();
    const googleLoginParams: userGoogleLogin = {
      avatarUrl: userInfo.user.photo || 'default',
      email: userInfo.user.email,
      fullname: userInfo.user.name || '',
      gender: 2,
      phone: '',
      username: userInfo.user.id,
      uid: userInfo.user.id,
    };
    dispatch(socialLoginRequest(googleLoginParams));
  };

  return (
    <SafeAreaView style={styles.container}>
      <OverlayIndicator isLoading={loading} />
      <ScrollView>
        <View style={styles.itemContainer}>
          <Text style={styles.title}>{languages.title}</Text>
          <Image source={images.logoApp} style={styles.logoStyle} />
          <View style={{width: '100%'}}>
            <CommonTextInput
              returnKeyType={'next'}
              autoFocus={true}
              value={email}
              onChangeText={_onEmailChanged}
              placeholder={'Enter your email'}
              placeholderTextColor={'red'}
            />
            <CommonTextInputWithEye
              hidePassword={hidePassword}
              onHidePasswordPressed={_onHidePasswordPressed}
              returnKeyLabel={'done'}
              placeholder={'Enter your password'}
              secureTextEntry={!hidePassword}
              onChangeText={_onPasswordChanged}
              value={password}
            />
            <CommonButton
              title={'Login'}
              style={styles.loginButton}
              onButtonPressed={_onLoginPressed}
              disabled={!clickableLoginButton}
            />
            <View style={styles.orLoginContainer}>
              <View style={styles.horizontalLines} />
              <Text style={styles.orText}>{languages.or}</Text>
              <View style={styles.horizontalLines} />
            </View>
            <View style={styles.socialButtonsContainer}>
              <SocialButtons
                name={'logo-facebook'}
                onSocialPressed={_onFacebookLoginPressed}
              />
              <SocialButtons
                name={'logo-google'}
                onSocialPressed={_onGoogleLoginPressed}
              />
            </View>
            <View style={styles.registerQuestionContainer}>
              <Text>{languages.noAccountQuestion} </Text>
              <TouchableOpacity onPress={_onRegisterPressed}>
                <Text style={{color: 'blue'}}>{languages.registerText}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignInScreen;
