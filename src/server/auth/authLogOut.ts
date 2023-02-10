import {signOut} from 'firebase/auth';
import {auth} from '../firebase';

const logOut = async () => {
  try {
    const response = await signOut(auth);
    const result = response;
    console.log('result', result);
  } catch (error) {
    console.log('error', error);
  }
};

export default logOut;
