import {getAuth, signOut} from 'firebase/auth';
import {Alert} from 'react-native';
import {logout} from '../../redux/user.reducer';

export const SignOut = async(navigation, dispatch) => {
  const auth = getAuth()
  try {
    signOut(auth).then((response)=> {
      console.log("response of log out", response)
      if (response) {
        Alert.alert('Islmic Watch', 'Hope you enjoy our app ', [
          {
            text: 'OK',
            onPress: () => {
              dispatch(logout);
              navigation.navigate('Register');
            },
          },
        ]);
      } else {
        Alert.alert('Islmic Watch', 'somthing was wrong ', [
          {
            text: 'try again',
            onPress: () => {
              dispatch(logout);
            },
          },
        ]);
      }
   
    })
  } catch (error) {
    console.log('error', error);
  }
};
