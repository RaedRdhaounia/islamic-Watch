import {signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import {auth} from '../../firebase';

const provider = new GoogleAuthProvider();

export const signInGmail = async () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      if (credential) {
        const token = credential.accessToken;
        console.log('token', token);
        // The signed-in user info.
        const user = result.user;
        console.log('user', user);
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
      console.log('error', errorCode, errorMessage, email, credential);
    });
};
