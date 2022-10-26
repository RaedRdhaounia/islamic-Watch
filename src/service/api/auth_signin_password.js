import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../../server/firebase';

export const SignIn = async (
  email,
  password,
  setUser,
  setError,
  setLoadingAuth,
) => {
  setLoadingAuth(true);
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );
    console.log("userCredential", userCredential)
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
