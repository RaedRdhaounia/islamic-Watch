import React, {useCallback, useState} from 'react';
import {Platform, Linking, TouchableOpacity, View} from 'react-native';
import {Ionicons, AntDesign} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/core';
import * as ImagePicker from 'expo-image-picker';
import {Block, Button, Image, Input, Text} from '../components/';
import {useData, useTheme, useTranslation} from '../hooks/';
import {pickImage} from '../utility/pickImage';
import Locationfind from '../components/Locationfind';
import Album from '../components/Album';
import {AboutMe, Statistics} from '../components/profile';

const Profile = () => {
  const {user} = useData();
  const {t} = useTranslation();
  const navigation = useNavigation();
  const {assets, colors, sizes, icons} = useTheme();

  const handleSocialLink = useCallback(
    (type: 'twitter' | 'facebook') => {
      const url =
        type === 'twitter' ? `https://twitter.com/` : `https://facebook.com/`;

      try {
        Linking.openURL(url);
      } catch (error) {
        alert(`Cannot open URL: ${url}`);
      }
    },
    [user],
  );
  const [backgroundImage, setBackgroundImage] = useState(icons.background);
  const [userProfile, setUserProfile] = useState(user?.avatar);
  const [changeUserName, setChangeUserName] = useState(false);
  const [userName, setUserName] = useState('user name');
  const [changeBio, setChangeBio] = useState(false);
  const [bio, setBio] = useState(user?.about);
  return (
    <Block safe marginTop={sizes.md}>
      <Block
        scroll
        paddingHorizontal={sizes.s}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: sizes.padding}}>
        <Block flex={0}>
          {/* go back button */}
          <Image
            background
            resizeMode="cover"
            padding={sizes.sm}
            paddingBottom={sizes.l}
            radius={sizes.cardRadius}
            source={backgroundImage}
            width={undefined}
            height={undefined}>
            <Button
              row
              flex={0}
              justify="flex-start"
              onPress={() => navigation.goBack()}>
              <Image
                radius={0}
                width={10}
                height={18}
                color={colors.white}
                source={assets.arrow}
                transform={[{rotate: '180deg'}]}
              />
              {/* edit userName componet  */}
              <View>
                <TouchableOpacity
                  onPress={() => {
                    setChangeUserName(!changeUserName);
                  }}>
                  {changeUserName ? (
                    <AntDesign
                      name="check"
                      style={{position: 'absolute', right: -280}}
                      size={24}
                      color="black"
                    />
                  ) : (
                    <Ionicons
                      size={18}
                      name="settings"
                      color={colors.black}
                      style={{position: 'absolute', right: -280}}
                    />
                  )}
                </TouchableOpacity>
                <Text p white marginLeft={sizes.s}>
                  {t('profile.title')}
                </Text>
              </View>
            </Button>
            <Block flex={0} align="center">
              {/* picture user profile */}
              <TouchableOpacity
                onPress={() => {
                  pickImage(ImagePicker, setUserProfile);
                }}>
                <Image
                  width={64}
                  height={64}
                  marginBottom={sizes.sm}
                  source={{uri: userProfile}}
                />
              </TouchableOpacity>
              <View>
                {!changeUserName ? (
                  <Text h5 center white bold>
                    {userName}
                  </Text>
                ) : (
                  <Input
                    label="user name"
                    style={{width: '100%'}}
                    white
                    onChangeText={(newtext) => setUserName(newtext)}
                  />
                )}
              </View>
              {/* location component */}
              <Locationfind />
              {/* social media component */}
              <Block row marginVertical={sizes.m}>
                <Button
                  shadow={false}
                  radius={sizes.m}
                  color={
                    !changeUserName ? 'rgba(255,255,255,0.2)' : colors.success
                  }
                  outlined={String(colors.white)}
                  onPress={() => handleSocialLink('facebook')}>
                  <Ionicons
                    size={18}
                    name="logo-instagram"
                    color={colors.white}
                  />
                </Button>

                <Button
                  shadow={false}
                  radius={sizes.m}
                  marginHorizontal={sizes.sm}
                  color={
                    !changeUserName ? 'rgba(255,255,255,0.2)' : colors.success
                  }
                  outlined={String(colors.white)}
                  onPress={() => handleSocialLink('twitter')}>
                  <Ionicons
                    size={18}
                    name="logo-twitter"
                    color={colors.white}
                  />
                </Button>
                <Button
                  shadow={false}
                  radius={sizes.m}
                  color={
                    !changeUserName ? 'rgba(255,255,255,0.2)' : colors.success
                  }
                  outlined={String(colors.white)}
                  onPress={() => handleSocialLink('facebook')}>
                  <Ionicons
                    size={18}
                    name="logo-facebook"
                    color={colors.white}
                  />
                </Button>
              </Block>
            </Block>
          </Image>
          {/* profile: stats */}
          <Statistics />
          {/* profile: about me */}
          <AboutMe
            setChangeBio={setChangeBio}
            changeBio={changeBio}
            bio={bio}
            setBio={setBio}
          />
          {/* profile: photo album */}
          <Album header={true} nav={true} />
        </Block>
      </Block>
    </Block>
  );
};

export default Profile;
