import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';

import * as Location from 'expo-location';

export default function Locationfind() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
console.log('location', location)
  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      console.log("status", status)
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      }
      try {
         let location = await Location.getCurrentPositionAsync({});
      console.log("location2", location)
      setLocation(location);
      } catch (error) {
        console.log("error", error)
      }
     
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View >
      <Text >{text}</Text>
    </View>
  );
}