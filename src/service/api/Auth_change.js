import {getAuth, onAuthStateChanged} from 'firebase/auth';

const auth = getAuth();
export const GetAuth = async(navigation, setUser, setLoading) => {
  setLoading(true);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user.email);
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      // ...
      setLoading(false);
      return user.email
    } else {
      // User is signed out
      // ...
      return navigation.navigate('Register');
    }
  });
};
