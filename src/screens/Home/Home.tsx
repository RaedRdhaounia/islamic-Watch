import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {Block, Image, Text} from '../../components';
import Calender from '../../components/Calender';
import Chart from '../../components/Chart';
import CheckList from '../../components/CheckList';
import Modal1 from '../../components/Modal1';
import Post from '../../components/Post';
import {useTheme} from '../../hooks';

function Home() {
  const {assets, colors, sizes} = useTheme();
  const [show, setShow] = useState(false);
  const [Rank, setRank] =useState(0)
  console.log("Rank", Rank)
  return (
    <Block row wrap="wrap" justify="space-between" marginTop={sizes.sm}>
      <TouchableOpacity
        style={{position: 'absolute', right: 0, top: 0}}
        onPress={() => setShow(!show)}>
        <Image
        color={colors.success}
          radius={0}
          radius={0}
          width={33}
          height={33}
          source={assets.calendar}
          color={colors.dark}
        />
      </TouchableOpacity>
      <Chart Rank={Rank}/>
      <Modal1 show={show} setShow={setShow}/>
      <CheckList setRank={setRank}/>
      <Post/>
    </Block>
  );
}

export default Home;
