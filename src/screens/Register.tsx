import React, {useCallback, useEffect, useState} from 'react';
import {Alert, Linking, Platform} from 'react-native';
import {useNavigation} from '@react-navigation/core';

import {useData, useTheme, useTranslation} from '../hooks/';
import * as regex from '../constants/regex';
import {Block, Button, Input, Image, Text, Checkbox} from '../components/';
import { CreateAccount } from '../service/api/auth_signup_password';
const isAndroid = Platform.OS === 'android';

interface IRegistration {
  name: string;
  email: string;
  password: string;
  agreed: boolean;
}
interface IRegistrationValidation {
  name: boolean;
  email: boolean;
  password: boolean;
  agreed: boolean;
}

const Register = () => {
const [user, setUser] =useState(null)
  const {isDark} = useData();
  const {t} = useTranslation();
  const navigation = useNavigation();
  const [change, setChange] = useState(true)
  const [isValid, setIsValid] = useState<IRegistrationValidation>({
    name: false,
    email: false,
    password: false,
    agreed: true,
  });
  const [registration, setRegistration] = useState<IRegistration>({
    name: '',
    email: '',
    password: '',
    agreed: true,
  });
  const {assets, colors, gradients, sizes} = useTheme();

  const handleChange = useCallback(
    (value) => {
      setRegistration((state) => ({...state, ...value}));
    },
    [setRegistration],
  );
    const handleSumbit = useCallback(async(change) => {
      if(!Object.values(isValid).includes(false)) {
        if (change == true) {
         const result = await CreateAccount(registration.email, registration.password, setUser)
           navigation.navigate("Home", {userDetails: result})
        } else {
          handleSignIn()
        }
      } else {
        Alert.alert("Wrong Information",
        "please check your information and retry",
        [
          
          { text: "OK" }
        ])
      }
      
    }, [isValid, registration]);
  async function handleSignUp () {
  };
  const handleSignIn = () => {
  }
  useEffect(() => {
    setIsValid((state) => ({
      ...state,
      name: regex.name.test(registration.name),
      email: regex.email.test(registration.email),
      password: regex.password.test(registration.password),
      agreed: registration.agreed,
    }));
  }, [registration, setIsValid]);
  return (
    <Block safe marginTop={sizes.md}>
      <Block paddingHorizontal={sizes.s}>
        <Block flex={0} style={{zIndex: 0}}>
          <Image
            background
            resizeMode="cover"
            radius={sizes.cardRadius}
            source={assets.backgroundMosque}
            height={sizes.height * 0.3}
            width="100%">
            <Text h4 center white marginBottom={sizes.md}>
              {t('register.title')}
            </Text>
          </Image>
        </Block>
        {/* register form */}
        <Block
          keyboard
          behavior={!isAndroid ? 'padding' : 'height'}
          marginTop={-(sizes.height * 0.2 - sizes.l)}>
          <Block
            flex={0}
            radius={sizes.sm}
            marginHorizontal="8%"
            shadow={!isAndroid} // disabled shadow on Android due to blur overlay + elevation issue
          >
            <Block
              blur
              flex={0}
              intensity={90}
              radius={sizes.sm}
              overflow="hidden"
              justify="space-evenly"
              tint={colors.blurTint}
              paddingVertical={sizes.sm}>
              <Text p semibold center>
                {change? t('register.subtitle'):t('register.subtitle1') }
              </Text>
              {/* social buttons */}
              <Block row center justify="space-evenly" marginVertical={sizes.m} >
                <Button outlined gray shadow={!isAndroid} onPress={() => console.log("google facebook")}>
                  <Image
                    source={assets.facebook}
                    height={sizes.m}
                    width={sizes.m}
                    color={isDark ? colors.icon : undefined}
                  />
                </Button>
                <Button outlined gray shadow={!isAndroid} onPress={() => console.log("google apple")}>
                  <Image
                    source={assets.apple}
                    height={sizes.m}
                    width={sizes.m}
                    color={isDark ? colors.icon : undefined}
                  />
                </Button>
                <Button outlined gray shadow={!isAndroid} onPress={() => console.log("google signIn")}>
                  <Image
                    source={assets.google}
                    height={sizes.m}
                    width={sizes.m}
                    color={isDark ? colors.icon : undefined}
                  />
                </Button>
              </Block>
              <Block
                row
                flex={0}
                align="center"
                justify="center"
                marginBottom={sizes.sm}
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
              {/* form inputs */}
              <Block paddingHorizontal={sizes.sm}>
                {change ?<Input
                  autoCapitalize="none"
                  marginBottom={sizes.m}
                  label={t('common.name')}
                  placeholder={t('common.namePlaceholder')}
                  success={Boolean(registration.name && isValid.name)}
                  danger={Boolean(registration.name && !isValid.name)}
                  onChangeText={(value) =>  handleChange({name: value})}
                /> : null}
                <Input
                  autoCapitalize="none"
                  marginBottom={change ? sizes.m: sizes.h1}
                  label={t('common.email')}
                  keyboardType="email-address"
                  placeholder={t('common.emailPlaceholder')}
                  success={Boolean(registration.email && isValid.email)}
                  danger={Boolean(registration.email && !isValid.email)}
                  onChangeText={(value) => handleChange({email: value})}
                />
                <Input
                  secureTextEntry
                  autoCapitalize="none"
                  marginBottom={change ? sizes.m: sizes.h1}
                  label={t('common.password')}
                  placeholder={t('common.passwordPlaceholder')}
                  onChangeText={(value) => handleChange({password: value})}
                  success={Boolean(registration.password && isValid.password)}
                  danger={Boolean(registration.password && !isValid.password)}
                />
              </Block>
              {/* checkbox terms */}
               <Block row flex={0} align="center" paddingHorizontal={sizes.sm}>
                <Checkbox
                 id="0"
                 setrank
                 updateDate={undefined}
                  marginRight={sizes.sm}
                  checked={registration?.agreed}
                  onPress={() =>handleChange({agree: !registration.agreed})}
                />
                <Text paddingRight={sizes.s}>
                  {t('common.agree')}
                  <Text
                    semibold
                    onPress={() => {
                      Linking.openURL('https://www.creative-tim.com/terms');
                    }}>
                    {t('common.terms')}
                  </Text>
                </Text>
              </Block>
              <Button
                onPress={() => handleSumbit(change)}
                marginVertical={sizes.s}
                marginHorizontal={sizes.sm}
                gradient={gradients.primary}
                disabled={Object.values(isValid).includes(false)}>
                <Text bold white transform="uppercase">
                  {change ? t('common.signup'): t('common.signin')}
                </Text>
              </Button>
              <Block
                row
                flex={0}
                align="center"
                justify="center"
                marginBottom={sizes.sm}
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
                  {change? t('register.switch'):t('register.switch1')}
                </Text>
                <Text color={colors.link} onPress={() => setChange(!change)}>{change? t('register.signin'): t('register.signup')}</Text>
                <Block
                  flex={0}
                  height={1}
                  width="50%"
                  end={[0, 1]}
                  start={[1, 0]}
                  gradient={gradients.divider}
                />
              </Block>
            </Block>
          </Block>
        </Block>
      </Block>
    </Block>
  );
};

export default Register;
