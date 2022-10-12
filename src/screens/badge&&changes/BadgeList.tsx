import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as SMS from 'expo-sms';
import Block from '../../components/Block';
import Image from '../../components/Image';
import Text from '../../components/Text';
import {IProduct} from '../../constants/types';
import {useData, useTheme, useTranslation} from '../../hooks/';

const BadgeList = ({image, title, type, linkLabel}: IProduct) => {
  const {t} = useTranslation();
  const {assets, colors, sizes} = useTheme();
  const {badges} = useData();
  const isHorizontal = type !== 'vertical';
  const CARD_WIDTH = (sizes.width - sizes.padding * 2 - sizes.sm) / 2;
  console.log("badges", badges)

  return (
    <ScrollView style={{margin:15}}>
      <Text align='center' bold >All Badges List </Text>
      {badges.map(el => {
        return(
           <Block
      card
      flex={0}
      row={isHorizontal}
      marginBottom={sizes.sm}
      width={isHorizontal ? CARD_WIDTH * 2 + sizes.sm : CARD_WIDTH}>
      <Image
        resizeMode="cover"
        source={{uri: el.image}}
        style={{
          height: isHorizontal ? 114 : 110,
          width: !isHorizontal ? '100%' : sizes.width / 2.435,
        }}
      />
      <Block
        paddingTop={sizes.s}
        justify="space-between"
        paddingLeft={isHorizontal ? sizes.sm : 0}
        paddingBottom={isHorizontal ? sizes.s : 0}>
        <Text p marginBottom={sizes.s}>
          {el.title}
        </Text>
        <TouchableOpacity>
          <Block row flex={0} align="center">
            <Text
              p
              color={colors.link}
              semibold
              size={sizes.linkSize}
              marginRight={sizes.s}>
              {linkLabel || t('common.startChalange')}
            </Text>
            <Image source={assets.arrow} color={colors.link} />
          </Block>
        </TouchableOpacity>
      </Block>
    </Block>
        )
      })}
   
    </ScrollView>
  );
};

export default BadgeList;
