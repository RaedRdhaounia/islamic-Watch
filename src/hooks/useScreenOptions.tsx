import React from 'react';
import {TouchableOpacity} from 'react-native';
import {
  StackHeaderTitleProps,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/core';
import {DrawerActions} from '@react-navigation/native';
import {StackHeaderOptions} from '@react-navigation/stack/lib/typescript/src/types';

import {useData} from './useData';
import {useTranslation} from './useTranslation';

import Image from '../components/Image';
import Text from '../components/Text';
import useTheme from '../hooks/useTheme';
import Button from '../components/Button';
import Block from '../components/Block';

export default () => {
  const {t} = useTranslation();
  const {user} = useData();
  const navigation = useNavigation();
  const {icons, colors, gradients, sizes} = useTheme();

  const menu = {
    headerStyle: {elevation: 0},
    headerTitleAlign: 'left',
    headerTitleContainerStyle: {marginLeft: -sizes.sm},
    headerLeftContainerStyle: {paddingLeft: sizes.s},
    headerRightContainerStyle: {paddingRight: sizes.s},
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    headerTitle: ({children}: StackHeaderTitleProps) => (
      <Text p>{children}</Text>
    ),
    headerLeft: () => (
      <Button onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
        <Image
          source={icons.menu}
          radius={0}
          color={colors.icon}
          width={16}
          height={16}
        />
      </Button>
    ),
    headerRight: () => (
      <Block row flex={0} align="center" marginRight={sizes.padding}>
        <TouchableOpacity
          style={{marginRight: sizes.sm}}
          onPress={() =>
            navigation.navigate('Screens', {
              screen: 'Notification',
            })
          }>
          <Image
            source={icons.bell}
            radius={0}
            color={colors.icon}
            width={16}
            height={16}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Screens', {
              screen: 'Profile',
            })
          }>
          <Image source={icons.profile} radius={0} width={16} height={16} />
        </TouchableOpacity>
      </Block>
    ),
  } as StackHeaderOptions;

  const options = {
    stack: menu,
    components: {
      ...menu,
      headerTitle: () => (
        <Text p white>
          {t('navigation.components')}
        </Text>
      ),
      headerRight: () => null,
      headerLeft: () => (
        <Button
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
          <Image
            source={icons.menu}
            radius={0}
            color={colors.white}
            width={16}
            height={16}
          />
        </Button>
      ),
    },
    pro: {
      ...menu,
      headerTransparent: true,
      headerTitle: () => (
        <Text p white semibold>
          {t('pro.title')}
        </Text>
      ),
      headerRight: () => null,
      headerLeft: () => (
        <Button
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
          <Image
            source={icons.menu}
            radius={0}
            color={colors.white}
            width={16}
            height={16}
          />
        </Button>
      ),
    },
    back: {
      ...menu,
      headerRight: () => null,
      headerLeft: () => (
        <Button onPress={() => navigation.goBack()}>
          <Image
            radius={0}
            width={10}
            height={18}
            color={colors.icon}
            source={icons.arrow}
            transform={[{rotate: '180deg'}]}
          />
        </Button>
      ),
    },
    profile: {
      ...menu,
      headerRight: () => (
        <Block row flex={0} align="center" marginRight={sizes.padding}>
          <TouchableOpacity
            style={{marginRight: sizes.sm}}
            onPress={() =>
              navigation.navigate('Screens', {
                screen: 'Notification',
              })
            }>
            <Image
              source={icons.bell}
              radius={0}
              color={colors.icon}
              width={16}
              height={16}
            />
            <Block
              flex={0}
              right={0}
              width={sizes.s}
              height={sizes.s}
              radius={sizes.xs}
              position="absolute"
              gradient={gradients?.primary}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.dispatch(
                DrawerActions.jumpTo('Screens', {screen: 'Profile'}),
              )
            }>
            <Image
              radius={6}
              width={24}
              height={24}
              source={{uri: user.avatar}}
            />
          </TouchableOpacity>
        </Block>
      ),
    },
  };

  return options;
};
