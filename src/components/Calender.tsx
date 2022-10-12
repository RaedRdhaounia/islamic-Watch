import React, { useState } from 'react'
import { Text, View } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { useTheme } from '../hooks';
import { formatDate } from '../utility/transferDate';


LocaleConfig.locales['fr'] = {
    monthNames: [
      'Janvier',
      'Février',
      'Mars',
      'Avril',
      'Mai',
      'Juin',
      'Juillet',
      'Août',
      'Septembre',
      'Octobre',
      'Novembre',
      'Décembre'
    ],
    monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
    dayNames: ['S', 'M', 'Tu', 'Th', 'W', 'F', 'Sa'],
    dayNamesShort: ['S', 'M', 'Tu', 'Th', 'W', 'F', 'Sa'],
    today: "Aujourd'hui"
  };
  LocaleConfig.defaultLocale = 'fr';
  
function Calender({show, setShow}) {
    const thisDay = Date.now()
    const [dayPress, setDayPress] = useState(formatDate(thisDay))
    const {assets, colors, sizes} = useTheme();

     return (
      <View style={{position:"absolute", top:-320, right:-20}} >
        <Text
        onPress={() => setShow(false)}
        style={{position:"relative", right:0, top:0}} >x</Text>
<Calendar
  // Specify style for calendar container element. Default = {}
  style={{
    borderWidth: 1,
    borderColor: 'gray',
   display: !show ? "none": "flex"
  }}
  // Specify theme properties to override specific styles for calendar parts. Default = {}
  theme={{
    backgroundColor: '#ffffff',
    calendarBackground: '#ffffff',
    textSectionTitleColor: '#b6c1cd',
    textSectionTitleDisabledColor: `${colors.success}`,
    selectedDayBackgroundColor: `${colors.success}`,
    selectedDayTextColor: `${colors.success}`,
    todayTextColor: `${colors.info}`,
    dayTextColor: `${colors.success}`,
    textDisabledColor: `${colors.black}`,
    dotColor: 'green',
    selectedDotColor: 'red',
    arrowColor: 'black',
    disabledArrowColor: 'yellow',
    monthTextColor: 'red',
    indicatorColor: 'red',
    textDayFontFamily: 'monospace',
    textMonthFontFamily: 'monospace',
    textDayHeaderFontFamily: 'monospace',
    textDayFontWeight: '300',
    textMonthFontWeight: 'bold',
    textDayHeaderFontWeight: '300',
    textDayFontSize: 16,
    textMonthFontSize: 16,
    textDayHeaderFontSize: 16
  }}
  // Initially visible month. Default = now
  initialDate={`${dayPress}`}
  // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
  minDate={'2012-05-10'}
  // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
  maxDate={'2022-05-30'}
  // Handler which gets executed on day press. Default = undefined
  onDayPress={day => {setDayPress(day)}}
  // Handler which gets executed on day long press. Default = undefined
  onDayLongPress={day => {
    console.log('selected day', day);
  }}
  // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
  monthFormat={'yyyy MM'}
  // Handler which gets executed when visible month changes in calendar. Default = undefined
  onMonthChange={month => {
    console.log('month changed', month);
  }}
  // Hide month navigation arrows. Default = false
  hideArrows={false}
  // Replace default arrows with custom ones (direction can be 'left' or 'right')
  renderArrow={direction => direction ==="left" ? <Text> {'<'}</Text>: <Text> {'>'}</Text>}
  // Do not show days of other months in month page. Default = false
  hideExtraDays={false}
  // If hideArrows = false and hideExtraDays = false do not switch month when tapping on greyed out
  // day from another month that is visible in calendar page. Default = false
  disableMonthChange={false}
  // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday
  firstDay={1}
  // Hide day names. Default = false
  hideDayNames={false}
  // Show week numbers to the left. Default = false
  showWeekNumbers={false}
  // Handler which gets executed when press arrow icon left. It receive a callback can go back month
  onPressArrowLeft={subtractMonth => subtractMonth()}
  // Handler which gets executed when press arrow icon right. It receive a callback can go next month
  onPressArrowRight={addMonth => addMonth()}
  // Disable left arrow. Default = false
  disableArrowLeft={false}
  // Disable right arrow. Default = false
  disableArrowRight={false}
  // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
  disableAllTouchEventsForDisabledDays={false}
  // Replace default month and year title with custom one. the function receive a date as parameter
  
  // Enable the option to swipe between months. Default = false
  enableSwipeMonths={true}
/>
</View> )
}
export default Calender