import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import {useTheme, useTranslation} from '../hooks';
import Block from './Block';
import Button from './Button';
import Image from './Image';
import Text from './Text';

function Album(props) {
  const {header, nav, from} = props;
  const navigation = useNavigation();
  const {assets, colors, sizes} = useTheme();
  const {t} = useTranslation();
  const IMAGE_SIZE = (sizes.width - (sizes.padding + sizes.sm) * 2) / 3;
  const IMAGE_VERTICAL_SIZE =
    (sizes.width - (sizes.padding + sizes.sm) * 2) / 2;
  const IMAGE_MARGIN = (sizes.width - IMAGE_SIZE * 3 - sizes.padding * 2) / 2;
  const IMAGE_VERTICAL_MARGIN =
    (sizes.width - (IMAGE_VERTICAL_SIZE + sizes.sm) * 2) / 2;
  return (
    <Block paddingHorizontal={sizes.sm} marginTop={sizes.s}>
      <Block row align="center" justify="space-between">
        {header ? (
          <Text h5 semibold>
            {t('common.album')}
          </Text>
        ) : null}
        {nav ? (
          <Button onPress={() => navigation.navigate('Pictures')}>
            <Text p primary semibold>
              {t('common.viewall')}
            </Text>
          </Button>
        ) : null}
      </Block>
      <View>
        <Block row justify="space-between" wrap="wrap">
          <Image
            resizeMode="cover"
            source={assets?.photo1}
            width={IMAGE_VERTICAL_SIZE + IMAGE_MARGIN / 2}
            height={IMAGE_VERTICAL_SIZE * 2 + IMAGE_VERTICAL_MARGIN}
          />
          <Block marginLeft={sizes.m}>
            <Image
              resizeMode="cover"
              source={assets?.photo2}
              marginBottom={IMAGE_VERTICAL_MARGIN}
              style={{
                height: IMAGE_VERTICAL_SIZE,
                width: IMAGE_VERTICAL_SIZE,
              }}
            />
            <Image
              resizeMode="cover"
              source={assets?.photo3}
              style={{
                height: IMAGE_VERTICAL_SIZE,
                width: IMAGE_VERTICAL_SIZE,
              }}
            />
          </Block>
        </Block>

        <Block row justify="space-between" wrap="wrap">
          <Image
            resizeMode="cover"
            source={assets?.photo3}
            style={{
              width: IMAGE_VERTICAL_SIZE + IMAGE_MARGIN / 2,
              height: IMAGE_VERTICAL_SIZE * 2 + IMAGE_VERTICAL_MARGIN,
            }}
          />
          <Block marginLeft={sizes.m}>
            <Image
              resizeMode="cover"
              source={assets?.photo1}
              marginBottom={IMAGE_VERTICAL_MARGIN}
              style={{
                height: IMAGE_VERTICAL_SIZE,
                width: IMAGE_VERTICAL_SIZE,
              }}
            />
            <Image
              resizeMode="cover"
              source={assets?.photo2}
              style={{
                height: IMAGE_VERTICAL_SIZE,
                width: IMAGE_VERTICAL_SIZE,
              }}
            />
          </Block>
        </Block>
      </View>
    </Block>
  );
}

export default Album;
