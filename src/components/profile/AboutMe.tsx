import { AntDesign, Ionicons } from '@expo/vector-icons';
import React from 'react'
import { TouchableOpacity } from 'react-native';
import { useTheme, useTranslation } from '../../hooks';
import Block from '../Block';
import Input from '../Input';
import Text from '../Text';

function AboutMe(props) {
    const {setChangeBio, changeBio, bio, setBio} =props
    const {t} = useTranslation();
    const {sizes, colors} = useTheme()
  return (
    <Block paddingHorizontal={sizes.sm}>
    <TouchableOpacity
      onPress={() => {
        setChangeBio(!changeBio);
      }}>
      {changeBio ? (
        <AntDesign
          name="check"
          style={{position: 'absolute', right: 0}}
          size={24}
          color="black"
        />
      ) : (
        <Ionicons
          size={18}
          name="settings"
          color={colors.black}
          style={{position: 'absolute', right: 0}}
        />
      )}
    </TouchableOpacity>

    <Text h5 semibold marginBottom={sizes.s} marginTop={sizes.sm}>
      {t('profile.aboutMe')}
    </Text>
    {!changeBio ? (
      <Text p lineHeight={26}>
        {bio}
      </Text>
    ) : (
      <Input
        placeholder="tape your new bio here :) "
        onChangeText={(newtext) => setBio(newtext)}
      />
    )}
  </Block>
  )
}

export default AboutMe