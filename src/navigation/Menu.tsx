import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Alert, Animated, Linking, StyleSheet} from 'react-native';

import {
  useIsDrawerOpen,
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentOptions,
  DrawerContentScrollView,
} from '@react-navigation/drawer';

import Screens from './Screens';
import {Block, Text, Switch, Button, Image} from '../components';
import {useData, useTheme, useTranslation} from '../hooks';
import {IslamicWatch, MenuBlock} from '../components/menu';
import {SignOut} from '../service/api/Auth-signOut';
import {GetAuth} from '../service/api/Auth_change';
import {useDispatch} from 'react-redux';

const Drawer = createDrawerNavigator();

/* drawer menu screens navigation */
const ScreensStack = () => {
  const {colors} = useTheme();
  const isDrawerOpen = useIsDrawerOpen();
  const animation = useRef(new Animated.Value(0)).current;

  const scale = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.88],
  });

  const borderRadius = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 16],
  });

  const animatedStyle = {
    borderRadius: borderRadius,
    transform: [{scale: scale}],
  };

  useEffect(() => {
    Animated.timing(animation, {
      duration: 200,
      useNativeDriver: true,
      toValue: isDrawerOpen ? 1 : 0,
    }).start();
  }, [isDrawerOpen, animation]);

  return (
    <Animated.View
      style={StyleSheet.flatten([
        animatedStyle,
        {
          flex: 1,
          overflow: 'hidden',
          borderColor: colors.card,
          borderWidth: isDrawerOpen ? 1 : 0,
        },
      ])}>
      {/*  */}
      <Screens />
    </Animated.View>
  );
};

/* custom drawer menu */
const DrawerContent = (
  props: DrawerContentComponentProps<DrawerContentOptions>,
) => {
  const {navigation} = props;
  const {t} = useTranslation();
  const {isDark, handleIsDark} = useData();
  const [lang, setLang] = useState(false);
  const [active, setActive] = useState('Home');
  const {assets, colors, gradients, sizes} = useTheme();
  const labelColor = colors.text;
  const dispatch = useDispatch();
  const handleNavigation = useCallback(
    (to) => {
      setActive(to);
      navigation.navigate(to);
    },
    [navigation, setActive],
  );

  // screen list for Drawer menu
  const screens = [
    {name: t('screens.home'), to: 'Home', icon: assets.home},
    {name: t('screens.profile'), to: 'Profile', icon: assets.profile},
  ];
  const utility = [
    {name: t('screens.Badge'), to: 'BadgeList', icon: assets.badge},
    {name: t('screens.Chalange'), to: 'ChalangeList', icon: assets.challenge},
    {name: t('screens.articles'), to: 'Articles', icon: assets.document},
  ];
  const list2 = [
    {name: t('screens.settings'), to: 'Setting', icon: assets.settings},
  ];
  const [user, setUser] = useState({email: ''});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async () => {
      await GetAuth(navigation, setUser, setLoading);
    };
  }, []);
  return (
    <DrawerContentScrollView
      {...props}
      scrollEnabled
      removeClippedSubviews
      renderToHardwareTextureAndroid
      contentContainerStyle={{paddingBottom: sizes.padding}}>
      <Block paddingHorizontal={sizes.padding}>
        {/* icon title */}
        <IslamicWatch />
        {/* home block */}
        <MenuBlock
          active={active}
          itemlist={screens}
          handleNavigation={handleNavigation}
        />
        {/* encourage block */}
        <MenuBlock
          active={active}
          itemlist={utility}
          handleNavigation={handleNavigation}
          header={t('menu.utilities')}
        />
        {/* setting block */}
        <MenuBlock
          active={active}
          itemlist={list2}
          handleNavigation={handleNavigation}
          header={t('menu.setting')}
        />

        {/* log out */}
        <Button
          row
          justify="flex-start"
          marginTop={sizes.sm}
          marginBottom={sizes.s}
          onPress={() => SignOut(navigation, dispatch)}>
          <Block
            flex={0}
            radius={6}
            align="center"
            justify="center"
            width={sizes.md}
            height={sizes.md}
            marginRight={sizes.s}
            gradient={gradients.white}>
            <Image
              radius={0}
              width={14}
              height={14}
              color={colors.black}
              source={assets.document}
            />
          </Block>
          <Text p color={labelColor}>
            {t('menu.logout')}
          </Text>
        </Button>
        {/* extra item it can be play store switch download watch app */}
        <Button
          row
          justify="flex-start"
          marginTop={sizes.sm}
          marginBottom={sizes.s}
          onPress={() =>
            Linking.openURL(
              'https://play.google.com/store/search?q=quran&c=apps&hl=en&gl=US',
            )
          }>
          <Block
            flex={0}
            radius={6}
            align="center"
            justify="center"
            width={sizes.md}
            height={sizes.md}
            marginRight={sizes.s}
            gradient={gradients.white}>
            <Image
              radius={0}
              width={14}
              height={14}
              color={colors.black}
              source={assets.apple}
            />
          </Block>
          <Text p color={labelColor}>
            {t('menu.started')}
          </Text>
        </Button>

        <Block row justify="space-between" marginTop={sizes.sm}>
          <Text color={labelColor}>{t('darkMode')}</Text>
          <Switch
            checked={isDark}
            onPress={(checked) => {
              handleIsDark(checked);
              Alert.alert(t('pro.title'), t('pro.alert'));
            }}
          />
        </Block>
        <Block row justify="space-between" marginTop={sizes.sm}>
          <Text color={labelColor}>{t('menu.language')}</Text>
          <Switch checked={lang} onPress={() => setLang(!lang)} />
        </Block>
      </Block>
    </DrawerContentScrollView>
  );
};

/* drawer menu navigation */
export default () => {
  const {gradients} = useTheme();

  return (
    <Block gradient={gradients.light}>
      <Drawer.Navigator
        drawerType="slide"
        overlayColor="transparent"
        sceneContainerStyle={{backgroundColor: 'transparent'}}
        drawerContent={(props) => <DrawerContent {...props} />}
        drawerStyle={{
          flex: 1,
          width: '60%',
          borderRightWidth: 0,
          backgroundColor: 'transparent',
        }}>
        <Drawer.Screen name="Screens" component={ScreensStack} />
      </Drawer.Navigator>
    </Block>
  );
};
