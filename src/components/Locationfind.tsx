import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';

import * as Location from 'expo-location';

export default function Locationfind() {
  const [location, setLocation] = useState("");
  const [errorMsg, setErrorMsg] = useState()
  useEffect(() => {
    (async () => {
        try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      console.log("status", status)
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      }
    
         let {coords} = await Location.getCurrentPositionAsync();
      if (coords) {
        const { latitude, longitude } = coords;
        let response = await Location.reverseGeocodeAsync({
          latitude,
          longitude,
        });
        for (let item of response) {
          let address = `${item.name}, ${item.street}, ${item.postalCode}, ${item.city}`;
        
          setLocation(address)
        }
      } 
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