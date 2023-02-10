import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../firebase';

const loginWithPassword = async (_email: string, _password: string) => {
  try {
    const response = await signInWithEmailAndPassword(auth, _email, _password);
    const result = response.user;
    console.log('result', result);
    return result;
  } catch (error) {
    console.log('error', error);
    return null;
  }
};

export default loginWithPassword;
