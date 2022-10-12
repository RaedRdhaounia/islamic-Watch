import React, { useEffect, useState } from 'react';
import {TouchableOpacity} from 'react-native';

import Block from './Block';
import Image from './Image';
import Text from './Text';
import {useTheme, useTranslation} from '../hooks/';

const Share = () => {
  const {t} = useTranslation();
  const {assets, colors, sizes} = useTheme();
  const isHorizontal = true;
  const CARD_WIDTH = (sizes.width - sizes.padding * 2 - sizes.sm) / 2;
  return (
    <Block
      card
      flex={0}
      row={isHorizontal}
      marginBottom={sizes.sm}
      width={isHorizontal ? CARD_WIDTH * 2 + sizes.sm : CARD_WIDTH}>
              <Block
        paddingTop={sizes.s}
        justify="space-between"
        paddingLeft={isHorizontal ? sizes.sm : 0}
        paddingBottom={isHorizontal ? sizes.s : 0}>
        <Text p marginBottom={sizes.s}>
          share with friends your badges owner and see there reflextion !!!
        </Text>

      </Block>
      <TouchableOpacity style={{justifyContent:"center"}}>
          <Block row flex={0} justify="center">
            <Text
              p
              color={colors.link}
              semibold     
              size={sizes.linkSize}
              marginRight={sizes.s}>
              {t('common.share')}
            </Text>
            <Image source={assets.home} color={colors.link} />
          </Block>
        </TouchableOpacity>
    </Block>
  );
};

export default Share;
