import React from 'react';
import {Dimensions, View} from 'react-native';
import { useTheme } from '../hooks';
import Block from './Block';
import Image from './Image';
import Text from './Text';

function NotificationItem({item}) {
    const {sizes, gradients, assets} = useTheme()
    const width = Dimensions.get("screen").width
    console.log(item)
  return (
    <Block marginTop={10} center width={width}  >
      <Block
                row
                flex={0}
                align="center"
                justify="center"
                marginBottom={sizes.sm}
                paddingHorizontal={sizes.xxl}>
                <Block
                  flex={0}
                  height={1}
                  width="100%"
                  end={[1, 1]}
                  start={[1, 1]}
                  gradient={gradients.divider}
                />
                <Block
                  flex={0}
                  height={1}
                  width="50%"
                  end={[0, 1]}
                  start={[1, 0]}
                  gradient={gradients.divider}
                />
      </Block>
      <Block    style={{flexDirection: 'row'}}>
      <Image
        background
        padding={sizes.l}
        radius={sizes.cardRadius}
        resizeMode="cover"
        source={assets?.photo1}
        width={70}
        height={70}
       />
        <Block>
          <Text secondary bold={true}>title notification</Text>
          <Text >descreption notification item </Text>
          <Text secondary align='right' paddingRight={20}>date notification</Text>
        </Block>
      </Block>
      <Block
                row
                flex={0}
                align="center"
                justify="center"
                marginBottom={sizes.sm}
                paddingHorizontal={sizes.xxl}>
                <Block
                  flex={0}
                  height={1}
                  width="100%"
                  end={[1, 1]}
                  start={[1, 1]}
                  gradient={gradients.divider}
                />
                <Block
                  flex={0}
                  height={1}
                  width="50%"
                  end={[0, 1]}
                  start={[1, 0]}
                  gradient={gradients.divider}
                />
      </Block>
    </Block>
  );
}

export default NotificationItem;
