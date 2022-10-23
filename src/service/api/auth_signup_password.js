import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../../server/firebase';

export const CreateAccount = async(email, password, setUser) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredential.user;
      setUser(user)
          return user
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
      console.log('error', error);

    }
  };
