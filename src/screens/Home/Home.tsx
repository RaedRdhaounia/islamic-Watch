import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {Block, Image, Text} from '../../components';
import Calender from '../../components/Calender';
import Chart from '../../components/Chart';
import CheckList from '../../components/CheckList';
import Locationfind from '../../components/Locationfind';
import Modal1 from '../../components/Modal1';
import Post from '../../components/Post';
import {useTheme} from '../../hooks';

function Home() {
  const {assets, colors, sizes} = useTheme();
  const [show, setShow] = useState(false);
  const [Rank, setRank] = useState(0);
  const [statisticsDay, setStatisticsDay] = useState('Today')
  return (
    <Block row wrap="wrap" justify="space-between" marginTop={sizes.sm}>
      <TouchableOpacity
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          flex: 1,
          alignItems: 'center',
        }}
        onPress={() => setShow(!show)}>
        <Image
          color={colors.dark}
          radius={0}
          width={33}
          height={33}
          source={assets.calendar}
        />
        <Text>{statisticsDay}</Text>
      </TouchableOpacity>
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
