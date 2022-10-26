import React, {useCallback, useEffect, useState} from 'react';
import {Linking} from 'react-native';

import {useTheme, useTranslation} from '../hooks/';
import {Block, Button, Image, Text} from '../components/';
import { GetAuth } from '../service/api/Auth_change';

const Pro = () => {
  const {t} = useTranslation();
  const {assets, colors, gradients, sizes} = useTheme();
  const [userDetails, setUserDetails] = useState(null)
  useEffect(() => {
    GetAuth(setUserDetails)
  }, []);
  const handleWebLink = useCallback((url) => Linking.openURL(url), []);

  return (
    <Image
      background
      source={assets.background1}
      padding={sizes.padding}
      style={{flex: 1}}>
      <Block safe justify="center">
        <Block card flex={0} padding={sizes.sm} marginBottom={sizes.sm}>
          <Text h6 center semibold marginBottom={sizes.sm}>
            {userDetails?.email} 
          </Text>

          <Text marginBottom={sizes.padding}>{t('pro.appTemplate')}</Text>

   

          <Text marginVertical={sizes.padding}>{t('pro.saveTime')}</Text>

          <Text>{t('pro.takeAdvantage')}</Text>

          <Block
            row
            flex={0}
            justify="space-evenly"
            marginVertical={sizes.padding}>
            <Image
              source={assets.ios}
              color={colors.icon}
              style={{height: 38, width: 82}}
            />
            <Image
              source={assets.android}
              color={colors.icon}
              style={{height: 38, width: 140}}
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
              {t('pro.buyNow')}
            </Text>
          </Button>
        </Block>
      </Block>
    </Image>
  );
};

export default Pro;
