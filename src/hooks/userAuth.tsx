import {onAuthStateChanged} from 'firebase/auth';
import React, {useEffect, useState} from 'react';
import {Block, Image, Text} from '../components';
import {auth} from '../server/firebase';
import useTheme from './useTheme';

export const AuthContext = React.createContext({
  isAuth: false,
  signIn: () => {},
  signOut: () => {},
});
export const AuthProvider = ({children}) => {
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);
  const {assets} = useTheme();
  const [user, setUser] = useState(null);
  useEffect(() => {
    const Authcheck = onAuthStateChanged(auth, (currentUser) => {
      if (user !== null) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    Authcheck();
  }, [user]);

  const signIn = () => {
    console.log('isAuth', isAuth);
    setIsAuth(true);
  };

  const signOut = () => {
    setIsAuth(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        signIn,
        signOut,
      }}>
      {loading ? (
        <Block align="center" justify="center">
          <Text>loading logo will be here ...</Text>
          <Image source={assets.logo} height={50} width={50} />
        </Block>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};
