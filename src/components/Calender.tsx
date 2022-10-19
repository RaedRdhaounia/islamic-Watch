import {useTheme} from '@react-navigation/native';
import React, {useState} from 'react';
import {Pressable, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {currentMounth, formatDate, isThisMounth} from '../utility/transferDate';
import Text from './Text';

function Calender({setStatisticsDay}) {
  const {colors} = useTheme();
  const thisDay = Date.now();
  const [dayPress, setDayPress] = useState(formatDate(thisDay));
  const [monthPress, setMonthPress] = useState(currentMounth(thisDay));
  return (
    <View style={{width: 300, height: 300}}>
      <Calendar
        style={{borderRadius: 10, elevation: 4, margin: 5}}
        initialDate={formatDate(thisDay)}
        maxDate={formatDate(thisDay)}
        minDate="2022-10-01"
        onMonthChange={(month) => {
          setMonthPress(month.timestamp);
        }}
        onPressArrowRight={(addMonth) => {
          return isThisMounth(monthPress) ? null : addMonth();
        }}
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
        dayComponent={({date, state}) => {
          return date?.dateString == dayPress ? (
            <Pressable style={[styles.button, styles.buttonToday]}>
              <Text
                onPress={() => {
                  setStatisticsDay('Today');
                }}
                color="white">
                {date?.day}
              </Text>
            </Pressable>
          ) : state !== 'disabled' ? (
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                setDayPress(date?.dateString);
                setStatisticsDay(date?.dateString);
              }}>
              <Text color="white">{date?.day}</Text>
            </TouchableOpacity>
          ) : (
            <Text style={{textAlign: 'center', color: 'black'}}>
              {date?.day}
            </Text>
          );
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    paddingLeft: 2,
    paddingRight: 2,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: 'blue',
  },
  buttonToday: {
    backgroundColor: 'green',
  },
});
export default Calender;
