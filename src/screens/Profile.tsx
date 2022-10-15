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

const isAndroid = Platform.OS === 'android';

const Profile = () => {
  const {user} = useData();
  const {t} = useTranslation();
  const navigation = useNavigation();
  const {assets, colors, sizes} = useTheme();

 


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
  const [backgroundImage, setBackgroundImage] = useState(assets.background);
  const [userProfile, setUserProfile] = useState(user?.avatar);
  const [changeUserName, setChangeUserName] = useState(false)
  const [userName, setUserName] = useState("user name")
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
         
            <Image
              background
              resizeMode="contain"
              padding={sizes.sm}
              paddingBottom={sizes.l}
              radius={sizes.cardRadius}
              source={backgroundImage}
              width={undefined}
              height={undefined}

              >
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
                        
                  <View>
                  <TouchableOpacity
              onPress={() => {
                setChangeUserName(!changeUserName);
              }}>
              {changeUserName ? (
                <AntDesign
                  name="check"
                  style={{position: 'absolute', right: -280,}}
                  size={24}
                  color="black"
                />
              ) : (
                <Ionicons
                  size={18}
                  name="settings"
                  color={colors.black}
                  style={{position: 'absolute', right: -280,}}
                />
              )}
            </TouchableOpacity>
            <Text p white marginLeft={sizes.s}>
                  {t('profile.title')}
                </Text> 
               </View>
              </Button>
              <Block flex={0} align="center">
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
                {!changeUserName ?<Text h5 center white>
                  {userName}
                </Text> : <Input label='user name' style={{width: "100%"}} white
                onChangeText={newtext => setUserName(newtext)}
                />}
                
                <Locationfind/>
                <Block row marginVertical={sizes.m}>
                <Button
                    shadow={false}
                    radius={sizes.m}
                    color={!changeUserName ? "rgba(255,255,255,0.2)": colors.success}
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
                    color={!changeUserName ? "rgba(255,255,255,0.2)": colors.success}
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
                    color={!changeUserName ? "rgba(255,255,255,0.2)": colors.success}
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
          <Block
            flex={0}
            radius={sizes.sm}
            shadow={!isAndroid} // disabled shadow on Android due to blur overlay + elevation issue
            marginTop={-sizes.l}
            marginHorizontal="8%"
            color="rgba(255,255,255,0.2)">
            <Block
              row
              blur
              flex={0}
              intensity={100}
              radius={sizes.sm}
              overflow="hidden"
              tint={colors.blurTint}
              justify="space-evenly"
              paddingVertical={sizes.sm}
              renderToHardwareTextureAndroid>
              <Block align="center">
                <Text h5>{5}</Text>
                <Text>{t('profile.posts')}</Text>
              </Block>
              <Block align="center">
                <Text h5>{3}</Text>
                <Text>{t('profile.Badges')}</Text>
              </Block>
              <Block align="center">
                <Text h5>{4}</Text>
                <Text>{t('profile.chalanges')}</Text>
              </Block>
            </Block>
          </Block>

          {/* profile: about me */}
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
              placeholder='tape your new bio here :) '
              onChangeText={newtext => setBio(newtext)}
              />
            )}
          </Block>

          {/* profile: photo album */}
              <Album header={true} nav={true}  />
        </Block>
      </Block>
    </Block>
  );
};

export default Profile;
