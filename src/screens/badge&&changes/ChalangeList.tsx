import React, {useEffect, useState} from 'react';
import {Alert, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Block from '../../components/Block';
import Image from '../../components/Image';
import Text from '../../components/Text';
import {IProduct} from '../../constants/types';
import {useData, useTheme, useTranslation} from '../../hooks/';
import {StatusAction} from '../../utility/StatusAction';
import {StatusColors} from '../../utility/StatusColors';
import * as Contacts from "expo-contacts"

const ChalangeList = ({type, linkLabel}: IProduct) => {
  const {t} = useTranslation();
  const {assets, colors, sizes} = useTheme();
  const {challenges} = useData();
  const isHorizontal = type !== 'vertical';
  const CARD_WIDTH = (sizes.width - sizes.padding * 2 - sizes.sm) / 2;
  const [loadingText, setLoadingText] = useState('see more')
  const [contactList, setContactList] = useState([])
  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.Emails, Contacts.Fields.FirstName, Contacts.Fields.LastName, Contacts.Fields.PhoneNumbers],
        });

        if (data.length > 0) {
          const contact = data[0];
          setContactList(data)
        }
        else {
          Alert.alert("you have no contact")
        }
      } else {
        Alert.alert("you need to accept")
      }
    })();},[])
  return (
    <ScrollView style={{margin: 15}}>
      <Text align="center" bold>
        All Challenge List
      </Text>
      {challenges.map((el, index) => {
        return (
          <Block
            key={index}
            color={StatusColors(el.status)}
            card
            flex={0}
            row={isHorizontal}
            marginBottom={sizes.sm}
            width={isHorizontal ? CARD_WIDTH * 2 + sizes.sm : CARD_WIDTH}>
            <Image
              resizeMode="cover"
              source={{uri: el.image}}
              height={isHorizontal ? 114 : 110}
              width={!isHorizontal ? '100%' : sizes.width / 2.435}
            />
            <Block
              paddingTop={sizes.s}
              justify="space-between"
              paddingLeft={isHorizontal ? sizes.sm : 0}
              paddingBottom={isHorizontal ? sizes.s : 0}>
              <Text p marginBottom={sizes.s}>
                {el.title}
              </Text>
              <Text size={sizes.s}>descreption</Text>
              <Block row={true}>
                {el?.friends &&
                  el.friends.map((friend, index) => {
                    return (
                      <Text key={index} paddingRight={5} size={sizes.base}>
                        {friend}
                      </Text>
                    );
                  })}
              </Block>
              <TouchableOpacity>
                <Block row flex={0} align="flex-end">
                  <Text
                    p
                    color={colors.link}
                    semibold
                    size={sizes.linkSize}
                    marginRight={sizes.s}>
                    {StatusAction(el.status)}
                  </Text>
                </Block>
              </TouchableOpacity>
            </Block>
          </Block>
        );
      })}
      <Text
        center
        onPress={() => {
          setLoadingText(' loading...');
        }}>
        {loadingText}
      </Text>
    </ScrollView>
  );
};

export default ChalangeList;
