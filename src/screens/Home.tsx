import React, {useCallback, useState} from 'react';

import {useData, useTheme, useTranslation} from '../hooks/';
import {Block, Button, Image, Text} from '../components/';
import SwitchTab from '../components/SwitchTab';

const Home = ({route}) => {
  const details = route?.params
  console.log("details", details)
  const {t} = useTranslation();
  const [tab, setTab] = useState<number>(1);
  const {badges, trending} = useData();
  const [products, setProducts] = useState(badges);
  const {assets, colors, fonts, gradients, sizes} = useTheme();

  const handleHome = useCallback(
    (tab: number) => {
      setTab(tab);
      setProducts(tab === 0 ? badges : trending);
    },
    [badges, trending, setTab, setProducts],
  );

  return (
    <Block>
      {/* Home list */}
      <SwitchTab tab={tab} products={products} />
      {/* toggle products list */}
      <Block
        row
        flex={0}
        align="center"
        justify="center"
        color={colors.card}
        paddingBottom={sizes.sm}>
        <Button onPress={() => handleHome(1)}>
          <Block row align="center">
            <Block
              flex={0}
              radius={6}
              align="center"
              justify="center"
              marginRight={sizes.s}
              width={sizes.socialIconSize}
              height={sizes.socialIconSize}
              gradient={gradients?.[tab === 1 ? 'primary' : 'secondary']}>
              <Image
                radius={0}
                color={colors.white}
                source={assets.bell}
                width={16}
                height={16}
              />
            </Block>
            <Text p font={fonts?.[tab === 1 ? 'medium' : 'normal']}>
              {t('home.trending')}
            </Text>
          </Block>
        </Button>
        <Block
          gray
          flex={0}
          width={1}
          marginHorizontal={sizes.sm}
          height={sizes.socialIconSize}
        />
        <Button onPress={() => handleHome(0)}>
          <Block row align="center">
            <Block
              flex={0}
              radius={6}
              align="center"
              justify="center"
              marginRight={sizes.s}
              width={sizes.socialIconSize}
              height={sizes.socialIconSize}
              gradient={gradients?.[tab === 0 ? 'primary' : 'secondary']}>
              <Image
                source={assets.document}
                color={colors.white}
                radius={0}
                width={16}
                height={16}
              />
            </Block>
            <Text p font={fonts?.[tab === 0 ? 'medium' : 'normal']}>
              {t('home.following')}
            </Text>
          </Block>
        </Button>
      </Block>
    </Block>
  );
};

export default Home;
