import React, { useState, useEffect } from 'react';
import { Alert, View } from 'react-native';

import * as Location from 'expo-location';
import Text from './Text';

export default function Locationfind({setCurrentLocation}) {
  const [location, setLocation] = useState("");
  const [errorMsg, setErrorMsg] = useState()
  useEffect(() => {
    (async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied')}
        let {coords} = await Location.getCurrentPositionAsync();
        if (coords) {
          const { latitude, longitude } = coords;
          let response = await Location.reverseGeocodeAsync({
            latitude,
            longitude});
        if (response ) {
          const item = response[0]
          let address = `${item.city}, ${item.region}, ${item.country}`;
          setLocation(address)
          setCurrentLocation(address)}} 
      return coords}
    catch (error) {
      console.log("error", error)}}
  )();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }
  return (
    <View >
      <Text  white semibold center >{text}</Text>
    </View>
  );
}