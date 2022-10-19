import React from 'react';
import {useTheme, useTranslation} from '../../hooks';
import Block from '../Block';
import Button from '../Button';
import Image from '../Image';
import Text from '../Text';

function MenuBlock(props) {
  const {active, itemlist, handleNavigation, header} = props;
  const {sizes, colors, gradients} = useTheme();
  const {t} = useTranslation();
  return (
    <Block>
      {header ? (
        <Text semibold transform="uppercase" opacity={0.5}>
          {header}
        </Text>
      ) : null}
      {itemlist?.map((item: Object, index: Number) => {
        const isActive = active === item.to;
        return (
          <Block key={`menu-screen-${item.name}-${index}`}>
            <Button
              row
              justify="flex-start"
              marginBottom={sizes.s}
              onPress={() => handleNavigation(item.to)}>
              <Block
                flex={0}
                radius={6}
                align="center"
                justify="center"
                width={sizes.md}
                height={sizes.md}
                marginRight={sizes.s}
                gradient={gradients[isActive ? 'primary' : 'white']}>
                <Image
                  radius={0}
                  width={14}
                  height={14}
                  source={item.icon}
                  color={colors[isActive ? 'white' : 'black']}
                />
              </Block>
              <Text p semibold={isActive} color={colors.text}>
                {item.name}
              </Text>
            </Button>
          </Block>
        );
      })}
      {/* line component */}
      <Block
        flex={0}
        height={1}
        marginRight={sizes.md}
        marginVertical={sizes.sm}
        gradient={gradients.menu}
      />
    </Block>
  );
}

export default MenuBlock;
