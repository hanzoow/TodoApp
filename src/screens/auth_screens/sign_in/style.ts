import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  itemContainer: {
    alignItems: 'center',
    marginHorizontal: 24,
    justifyContent: 'center',
  },
  logoStyle: {height: 150, width: 150, marginTop: 20},
  loginButton: {
    alignItems: 'center',
    backgroundColor: 'red',
    height: 60,
    justifyContent: 'center',
    borderRadius: 9,
    marginTop: 50,
  },
  horizontalLines: {
    borderWidth: 1,
    borderColor: 'grey',
    height: 1,
    flex: 2,
    alignSelf: 'center',
  },
  orLoginContainer: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 40,
  },
  orText: {alignSelf: 'center', paddingHorizontal: 5},
  socialButtonsContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  registerQuestionContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginTop: 40,
  },
  title: {textAlign: 'center', marginTop: 80},
});
