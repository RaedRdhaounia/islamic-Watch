import React from 'react'
import { Platform } from 'react-native';
import { useTheme, useTranslation } from '../../hooks'
import Block from '../Block'
import Text from '../Text'

function Statistics() {
    const isAndroid = Platform.OS === 'android';
    const {t} = useTranslation();
    const {colors, sizes} = useTheme()
  return (
    <Block
    flex={0}
    radius={sizes.sm}
    shadow={!isAndroid} // disabled shadow on Android due to blur overlay + elevation issue
    marginTop={-sizes.l}
    marginHorizontal="8%"
    color="rgba(255,255,255,0.2)">
    <Block
    row
    blur
    flex={0}
    intensity={100}
    radius={sizes.sm}
    overflow="hidden"
    tint={colors.blurTint}
    justify="space-evenly"
    paddingVertical={sizes.sm}
    renderToHardwareTextureAndroid>
    <Block align="center">
      <Text h5>{5}</Text>
      <Text>{t('profile.posts')}</Text>
    </Block>
    <Block align="center">
      <Text h5>{3}</Text>
      <Text>{t('profile.Badges')}</Text>
    </Block>
    <Block align="center">
      <Text h5>{4}</Text>
      <Text>{t('profile.chalanges')}</Text>
    </Block>
  </Block> 
  </Block> )
}

export default Statistics