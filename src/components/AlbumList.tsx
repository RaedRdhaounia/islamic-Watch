import React from 'react';
import {View} from 'react-native';
import {useTheme} from '../hooks';
import Block from './Block';
import Image from './Image';

import {MaterialIcons} from '@expo/vector-icons';
import Text from './Text';

function AlbumList() {
  const {assets, colors, sizes} = useTheme();
  const IMAGE_SIZE = (sizes.width - (sizes.padding + sizes.sm) * 2) / 3;
  const IMAGE_VERTICAL_SIZE =
    (sizes.width - (sizes.padding + sizes.sm) * 2) / 2;
  const IMAGE_MARGIN = (sizes.width - IMAGE_SIZE * 3 - sizes.padding * 2) / 2;
  const IMAGE_VERTICAL_MARGIN =
    (sizes.width - (IMAGE_VERTICAL_SIZE + sizes.sm) * 2) / 2;
  return (
    <View>
        <Text center size={20} semibold marginTop={20} > This is the list of your uploaded pictures </Text>
    <Block row justify="space-between" wrap="wrap" margin={sizes.m}>
      <Image
        background
        paddingBottom={sizes.l}
        radius={sizes.cardRadius}
        resizeMode="cover"
        source={assets?.photo1}
        marginBottom={IMAGE_VERTICAL_MARGIN}
        style={{
          width: IMAGE_VERTICAL_SIZE * 2 + IMAGE_MARGIN,
          height: IMAGE_VERTICAL_SIZE + IMAGE_VERTICAL_MARGIN,
        }}>
        <Block flex={0} align="flex-end">
          <MaterialIcons name="delete-forever" size={24} color="red" style={{position:"absolute", bottom:-180}}  />
        </Block>
      </Image>
      <Image
        background
        paddingBottom={sizes.l}
        radius={sizes.cardRadius}
        resizeMode="cover"
        source={assets?.photo2}
        marginBottom={IMAGE_VERTICAL_MARGIN}
        style={{
          width: IMAGE_VERTICAL_SIZE * 2 + IMAGE_MARGIN,
          height: IMAGE_VERTICAL_SIZE + IMAGE_VERTICAL_MARGIN,
        }}>
        <Block flex={0} align="flex-end">
          <MaterialIcons name="delete-forever" size={24} color="red"  style={{position:"absolute", bottom:-180}}/>
        </Block>
      </Image>
      <Image
        background
        paddingBottom={sizes.l}
        radius={sizes.cardRadius}
        resizeMode="cover"
        source={assets?.photo3}
        marginBottom={IMAGE_VERTICAL_MARGIN}
        style={{
          width: IMAGE_VERTICAL_SIZE * 2 + IMAGE_MARGIN,
          height: IMAGE_VERTICAL_SIZE + IMAGE_VERTICAL_MARGIN,
        }}>
        <Block flex={0} align="flex-end">
          <MaterialIcons name="delete-forever" size={24} color="red"  style={{position:"absolute", bottom:-180}}/>
        </Block>
      </Image>
      <Image
        background
        paddingBottom={sizes.l}
        radius={sizes.cardRadius}
        resizeMode="cover"
        source={assets?.photo4}
        marginBottom={IMAGE_VERTICAL_MARGIN}
        style={{
          width: IMAGE_VERTICAL_SIZE * 2 + IMAGE_MARGIN,
          height: IMAGE_VERTICAL_SIZE + IMAGE_VERTICAL_MARGIN,
        }}>
        <Block flex={0} align="flex-end">
          <MaterialIcons name="delete-forever" size={24} color="red"  style={{position:"absolute", bottom:-180}}/>
        </Block>
      </Image>
      <Image
        background
        paddingBottom={sizes.l}
        radius={sizes.cardRadius}
        resizeMode="cover"
        source={assets?.photo5}
        marginBottom={IMAGE_VERTICAL_MARGIN}
        style={{
          width: IMAGE_VERTICAL_SIZE * 2 + IMAGE_MARGIN,
          height: IMAGE_VERTICAL_SIZE + IMAGE_VERTICAL_MARGIN,
        }}>
        <Block flex={0} align="flex-end">
          <MaterialIcons name="delete-forever" size={24} color="red"  style={{position:"absolute", bottom:-180}}/>
        </Block>
      </Image>
      <Image
        background
        paddingBottom={sizes.l}
        radius={sizes.cardRadius}
        resizeMode="cover"
        source={assets?.photo6}
        marginBottom={IMAGE_VERTICAL_MARGIN}
        style={{
          width: IMAGE_VERTICAL_SIZE * 2 + IMAGE_MARGIN,
          height: IMAGE_VERTICAL_SIZE + IMAGE_VERTICAL_MARGIN,
        }}>
        <Block flex={0} align="flex-end">
          <MaterialIcons name="delete-forever" size={24} color="red"  style={{position:"absolute", bottom:-180}}/>
        </Block>
      </Image>
      <Image
        background
        paddingBottom={sizes.l}
        radius={sizes.cardRadius}
        resizeMode="cover"
        source={assets?.card5}
        marginBottom={IMAGE_VERTICAL_MARGIN}
        style={{
          width: IMAGE_VERTICAL_SIZE * 2 + IMAGE_MARGIN,
          height: IMAGE_VERTICAL_SIZE + IMAGE_VERTICAL_MARGIN,
        }}>
        <Block flex={0} align="flex-end">
          <MaterialIcons name="delete-forever" size={24} color="red"  style={{position:"absolute", bottom:-180}}/>
        </Block>
      </Image>
    </Block>
    </View>
  );
}

export default AlbumList;
