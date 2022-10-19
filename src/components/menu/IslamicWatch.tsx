import React from 'react';
import {useTheme, useTranslation} from '../../hooks';
import Block from '../Block';
import Image from '../Image';
import Text from '../Text';

function IslamicWatch() {
  const {t} = useTranslation();
  const {sizes, colors, assets} = useTheme();
  return (
    <Block flex={0} row align="center" marginBottom={sizes.l}>
      <Image
        radius={0}
        width={33}
        height={33}
        color={colors.text}
        source={assets.logo}
        marginRight={sizes.sm}
      />
      <Block>
        <Text size={12} semibold>
          {t('app.name')}
        </Text>
        <Text size={12} semibold>
          {t('app.native')}
        </Text>
      </Block>
    </Block>
  );
}

export default IslamicWatch;
