import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack'; // stack navigation import
// import screens components (from index)
import {
  Pictures,
  Setting,
  Notification,
  Articles,
  Components,
  Home,
  Profile,
  Register,
  Pro,
  BadgeList,
  ChalangeList,
} from '../screens';
// import hooks (translations, nav bar options)
import {useScreenOptions, useTranslation} from '../hooks';
import {AuthProvider} from '../hooks/userAuth';
import {onAuthStateChanged} from 'firebase/auth';
import {auth} from '../server/firebase';
import {useNavigation} from '@react-navigation/native';
const Stack = createStackNavigator(); // extract methode Stack

export default () => {
  const {t} = useTranslation(); //  distract translator from useTranslation hooks
  const screenOptions = useScreenOptions(); // extract methode
  const navigation = useNavigation();
  const [user, setUser] = useState(null);
  useEffect(() => {
    const Authcheck = onAuthStateChanged(auth, (currentUser) => {
      if (user !== null) {
        setUser(currentUser);
        navigation.navigate('Home');
      } else {
        setUser(null);
        navigation.navigate('logIn');
      }
    });
    Authcheck();
  }, [navigation, user]);
  return (
    <AuthProvider>
      <Stack.Navigator screenOptions={screenOptions.stack}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: t('navigation.home')}}
        />

        <Stack.Screen name="Pro" component={Pro} options={{title: 'hello'}} />
        <Stack.Screen
          name="Notification"
          component={Notification}
          options={{title: 'Notification'}}
        />
        <Stack.Screen
          name="Components"
          component={Components}
          options={screenOptions.components}
        />
        <Stack.Screen
          name="Setting"
          component={Setting}
          options={{title: t('navigation.settings')}}
        />
        <Stack.Screen
          name="Articles"
          component={Articles}
          options={{title: t('navigation.articles')}}
        />
        <Stack.Screen
          name="BadgeList"
          component={BadgeList}
          options={{title: t('navigation.BadgeList')}}
        />
        <Stack.Screen
          name="ChalangeList"
          component={ChalangeList}
          options={{title: t('navigation.ChalangeList')}}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Pictures" component={Pictures} />
        <Stack.Screen
          name="logIn"
          component={Register}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </AuthProvider>
  );
};
