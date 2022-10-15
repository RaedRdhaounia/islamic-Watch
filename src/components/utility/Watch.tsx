import React, {useEffect, useState} from 'react';
import { DateNow } from '../../utility/datenow';
import Text from '../Text';

function Watch() {
  const [currentDate, setCurrentDate] = useState('');
  useEffect(() => {
    const fetchdata = () => {
      const response = DateNow();
      setCurrentDate(response);
    };
    const interval = setInterval(() => {
      fetchdata();
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return <Text paddingBottom={25} color="secondary">{currentDate}</Text>;
}
export default Watch;
