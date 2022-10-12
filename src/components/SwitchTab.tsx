import React from 'react';
import {useTheme} from '../hooks';
import Home from '../screens/Home/Home';
import Pray from '../screens/Home/Pray';
import Block from './Block';


function SwitchTab({tab, products}) {
  const {sizes} = useTheme();
  return (  <Block
      scroll
      paddingHorizontal={sizes.padding}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom: sizes.l}}>
    {tab === 0 ? 
      <Pray products={products} />
   : 
      <Home/>  }
    </Block>
  );
}

export default SwitchTab;
