import React from 'react';
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
const Stack = createStackNavigator(); // extract methode Stack
export default () => {
  const {t} = useTranslation(); //  distract translator from useTranslation hooks
  const screenOptions = useScreenOptions(); // extract methode  
  return ( 
    <Stack.Navigator screenOptions={screenOptions.stack}>
      <Stack.Screen 
        name="Auth"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{title: t('navigation.home')}}
      />
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

      <Stack.Screen name="Pro" component={Pro} options={screenOptions.pro} />

      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Pictures" component={Pictures} />

      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
