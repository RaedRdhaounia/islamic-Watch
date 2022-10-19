import React, {useCallback, useEffect} from 'react';
import {Linking, StatusBar} from 'react-native';
import {useTheme, useTranslation} from '../hooks';
import {Block, Button, Image, Input, Text} from '../components';

const Setting = () => {
  const {t} = useTranslation();
  const {assets, colors, gradients, sizes} = useTheme();
  const ListIcons = [
    {
      source: assets.facebook,
      link: 'https://www.facebook.com/help/213395615347144',
    },
    {
      source: assets.apple,
      link: 'https://support.apple.com/en-us/HT201487',
    },
    {
      source: assets.google,
      link: 'https://support.google.com/accounts/answer/41078?source=gsearch&hl=en',
    },
  ];
  const InputList = [
    {label: 'Old Password', placeholder: 'please put your old password'},
    {label: 'New Password', placeholder: 'please put your new password here'},
    {label: 'Repeate password', placeholder: 'repeate your password here'},
  ];
  useEffect(() => {
    StatusBar.setBarStyle('light-content');
    return () => {
      StatusBar.setBarStyle('dark-content');
    };
  }, []);

  const handleWebLink = useCallback((url) => Linking.openURL(url), []);

  return (
    <Block padding={sizes.padding} style={{flex: 1}}>
      <Block safe justify="center">
        <Block card flex={0} padding={sizes.sm} marginBottom={sizes.sm}>
          <Text h4 center semibold marginBottom={sizes.sm}>
            Changing password
          </Text>

          <Text>
            if you log in with gmail or facebook or even apple account just
            choose the right like to reset your password
          </Text>
          <Block row center justify="space-evenly" marginVertical={sizes.m}>
            {ListIcons.map((item, index) => {
              return (
                  <Button key={index} onPress={()=> Linking.openURL(`${item.link}`)} >
                    <Image
                      source={item.source}
                      height={sizes.m}
                      width={sizes.m}
                    />
                  </Button>
              );
            })}
          </Block>
          <Block
            row
            flex={0}
            align="center"
            justify="center"
            marginBottom={sizes.sm}
            marginVertical={sizes.padding}
            paddingHorizontal={sizes.xxl}>
            <Block
              flex={0}
              height={1}
              width="50%"
              end={[1, 0]}
              start={[0, 1]}
              gradient={gradients.divider}
            />
            <Text center marginHorizontal={sizes.s}>
              {t('common.or')}
            </Text>
            <Block
              flex={0}
              height={1}
              width="50%"
              end={[0, 1]}
              start={[1, 0]}
              gradient={gradients.divider}
            />
          </Block>
          {InputList.map((item, index) => {
            return (
              <Input
                key={index}
                secureTextEntry
                autoCapitalize="none"
                marginBottom={sizes.h1}
                label={item.label}
                placeholder={item.placeholder}
              />
            );
          })}
          <Block
            row
            flex={0}
            justify="space-evenly"
            marginVertical={sizes.padding}>
            <Image
              source={assets.ios}
              color={colors.icon}
              height={38}
              width={82}
            />
            <Image
              source={assets.android}
              color={colors.icon}
              height={38}
              width={140}
            />
          </Block>

          <Button
            gradient={gradients.primary}
            onPress={() =>
              handleWebLink(
                'https://www.creative-tim.com/product/soft-ui-pro-react-native',
              )
            }>
            <Text white bold transform="uppercase">
              save
            </Text>
          </Button>
        </Block>
      </Block>
    </Block>
  );
};

export default Setting;
