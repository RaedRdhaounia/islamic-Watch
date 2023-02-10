import {useNavigation} from '@react-navigation/native';
import {onAuthStateChanged} from 'firebase/auth';
import React, {useEffect, useState} from 'react';
import {Block, Image, Text} from '../../components';
import Chart from '../../components/Chart';
import CheckList from '../../components/CheckList';
import Modal1 from '../../components/Modal1';
import Post from '../../components/Post';
import {useTheme} from '../../hooks';
import {auth} from '../../server/firebase';

function Home() {
  const {assets, colors, sizes} = useTheme();
  const navigation = useNavigation();
  const [show, setShow] = useState(false);
  const [Rank, setRank] = useState(0);
  const [statisticsDay, setStatisticsDay] = useState('Today');
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user === null) {
        navigation.navigate('logIn');
      }
    });
  }, [navigation]);
  return (
    <Block row wrap="wrap" justify="space-between" marginTop={sizes.sm}>
      <Block
        position="absolute"
        right={0}
        top={0}
        onPress={() => setShow(!show)}>
        <Image
          color={colors.dark}
          radius={0}
          width={33}
          height={33}
          source={assets.calendar}
        />
        <Text>{statisticsDay}</Text>
      </Block>
      <Chart Rank={Rank} />
      <Modal1
        show={show}
        setShow={setShow}
        setStatisticsDay={setStatisticsDay}
      />
      <CheckList setRank={setRank} />
      <Post />
    </Block>
  );
}

export default Home;
