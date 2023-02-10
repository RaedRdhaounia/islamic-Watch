import React from 'react';
import {View} from 'react-native';
import {Calendar} from 'react-native-calendars';

function Calender() {
  return (
    <View style={{width: 300, height: 300}}>
      <Calendar
        style={{borderRadius: 10, elevation: 4, margin: 5}}
        minDate="2022-10-01"
        hideExtraDays={true}
        theme={{
          'stylesheet.calendar.header': {
            dayTextAtIndex0: {
              color: 'red',
            },
            dayTextAtIndex6: {
              color: 'blue',
            },
          },
        }}
        markedDates={{
          dayPress: {selected: true, marked: true, selectedColor: 'blue'},
        }}
      />
    </View>
  );
}
export default Calender;
