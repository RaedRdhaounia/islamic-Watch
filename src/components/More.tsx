import { useNavigation } from '@react-navigation/native';
import React from 'react'
import {useTheme, useTranslation} from '../hooks/';
import Button from './Button';
import Text from './Text';

function More() {
  const navigation = useNavigation()
  const {t} = useTranslation();
  const {colors,sizes} = useTheme();

  return (
      <Button
      onPress={() => navigation.navigate("BadgeList")}
        width="100%" color={colors.link}  marginBottom={sizes.s}>
      <Text color="white"> See all</Text> 
      </Button>

  
  )
}

export default More