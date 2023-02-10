import {getAuth, onAuthStateChanged} from 'firebase/auth';
import {useEffect, useState} from 'react';
import {View} from 'react-native';
const auth = getAuth();
export function UsersDetails({Children}) {

  const [userDetails, setUserDetails] = useState(null);
  function CheckConnect() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserDetails(user); //user details
      } else {
        setUserDetails(null);
      }
    });
  }

  useEffect(() => {
    CheckConnect();
  }, []);
  return (
    <View >
        {Children}
    </View>
  );
}
