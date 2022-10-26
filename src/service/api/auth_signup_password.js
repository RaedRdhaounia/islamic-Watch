import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../../server/firebase';

export const CreateAccount = async (
  email,
  password,
  setUser,
  setError,
  setLoadingAuth,
) => {
  setLoadingAuth(true)
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const user = userCredential.user;
    setUser(user);
    setLoadingAuth(false);
    return true;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    setError(errorCode + errorMessage);
    setLoadingAuth(false);
    return false;
  }
};
