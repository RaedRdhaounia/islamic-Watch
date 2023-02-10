import {FacebookAuthProvider, signInWithPopup} from 'firebase/auth';
import {auth} from '../../firebase';

const loginWithFacebook = async () => {
  const provider = new FacebookAuthProvider();
  try {
    const response = await signInWithPopup(auth, provider);
    const result = response.user;
    console.log('result google provider', result);
    return result;
  } catch (error) {
    console.log('error', error);
    return null;
  }
};

export default loginWithFacebook;
