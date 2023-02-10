import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../firebase';

const loginWithPassword = async (_email: string, _password: string) => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      _email,
      _password,
    );
    const result = response.user;
    return result;
  } catch (error) {
    return null;
  }
};

export default loginWithPassword;
