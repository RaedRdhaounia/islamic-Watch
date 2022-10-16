import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {useTheme, useTranslation} from '../hooks';
import Block from './Block';
import Checkbox from './Checkbox';
import Text from './Text';
import {Feather, FontAwesome, Ionicons} from '@expo/vector-icons';

function CheckList({setRank}) {
  const {t} = useTranslation();
  const {sizes, colors} = useTheme();
  const isHorizontal = true;
  const CARD_WIDTH = (sizes.width - sizes.padding * 2 - sizes.sm) / 2;
  const [date1, setDate1] = useState('');
  const [date2, setDate2] = useState('');
  const [date3, setDate3] = useState('');
  const [date4, setDate4] = useState('');
  const [date5, setDate5] = useState('');
  const [dateSalat1, setDateSatat1] = useState('');
  const [dateSalat2, setDateSatat2] = useState('');
  const [dateSalat3, setDateSatat3] = useState('');
  const [dateSalat4, setDateSatat4] = useState('');
  const [dateSalat5, setDateSatat5] = useState('');
  const [rank1, setRank1] = useState(false);
  const [rank2, setRank2] = useState(false);
  const [rank3, setRank3] = useState(false);
  const [rank4, setRank4] = useState(false);
  const [rank5, setRank5] = useState(false);
  const [loading, setLoading] = useState(false);
  const Salat = [
    {
      name: 'El-Sobh',
      date: date1,
      updateDate: setDate1,
      Salat: dateSalat1,
      rank: rank1,
      setrank: setRank1,
      icon: <Feather name="sunrise" size={18} color="black" />,
    },
    {
      name: 'El-Dhohr',
      date: date2,
      updateDate: setDate2,
      Salat: dateSalat2,
      rank: rank2,
      setrank: setRank2,
      icon: <FontAwesome name="sun-o" size={18} color="black" />,
    },
    {
      name: 'El-Asser',
      date: date3,
      updateDate: setDate3,
      Salat: dateSalat3,
      rank: rank3,
      setrank: setRank3,
      icon: <Ionicons name="md-sunny-outline" size={18} color="black" />,
    },
    {
      name: 'Al-Moghreb',
      date: date4,
      updateDate: setDate4,
      Salat: dateSalat4,
      rank: rank4,
      setrank: setRank4,
      icon: <Feather name="sunset" size={18} color="black" />,
    },
    {
      name: 'Al-Icha',
      date: date5,
      updateDate: setDate5,
      Salat: dateSalat5,
      rank: rank5,
      setrank: setRank5,
      icon: <Ionicons name="moon-outline" size={18} color="black" />,
    },
  ];
  useEffect(() => {
    const url = `http://api.aladhan.com/v1/timingsByAddress?address=Gafsa,tunisia`;
    const fetchaladhan = async () => {
      setLoading(true);
      try {
        const response = await axios.get(url);
        const newdata = response.data.data.timings;
        setDateSatat1(newdata.Fajr);
        setDateSatat2(newdata.Dhuhr);
        setDateSatat3(newdata.Asr);
        setDateSatat4(newdata.Maghrib);
        setDateSatat5(newdata.Isha);
        setLoading(false);
      } catch (error) {
        console.log('error', error);
        setLoading(false);
      }
    };

    fetchaladhan();
  }, []);
  useEffect(() => {
    const Calculate = () => {
      const checkedSalat = Salat.filter((el) => el.rank == true);
      setRank(checkedSalat.length);
    };
    Calculate();
  }, [rank1, rank2, rank3, rank4, rank5]);
  return (
    <Block
      card
      flex={0}
      row={false}
      width={isHorizontal ? CARD_WIDTH * 2 + sizes.sm : CARD_WIDTH}
      padding={20}
      marginBottom={20}>
      {loading ? (
        <Text>loading data ...</Text>
      ) : (
        <View>
          <Text align="center" paddingBottom={5} semibold>
            confirm your daily Salat
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignContent: 'space-between',
            }}>
            <Text style={{paddingRight: 30}}>name</Text>
            <Text style={{paddingRight: 30, alignSelf: 'flex-end'}}>
              salat time
            </Text>
            <Text style={{alignSelf: 'flex-end'}}> time checked</Text>
          </View>
          {Salat.map((el) => {
            return (
              <View
                key={el.name}
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignContent: 'space-between',
                }}>
                {el.icon}
                <Checkbox
                  marginRight={10}
                  marginLeft={10}
                  updateDate={el.updateDate}
                  setrank={el.setrank}
                />
                <Text style={{paddingRight: 30}}>{el.name}</Text>
                <Text style={{paddingRight: 30, alignSelf: 'flex-end'}}>
                  {el.Salat}
                </Text>
                <Text style={{alignSelf: 'flex-end'}}>{el.date}</Text>
              </View>
            );
          })}
        </View>
      )}
    </Block>
  );
}

export default CheckList;
