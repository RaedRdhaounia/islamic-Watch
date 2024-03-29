import React from 'react';
import {Dimensions, FlatList} from 'react-native';
import {Block} from '../components';
import NotificationItem from '../components/NotificationItem';
import {useTheme} from '../hooks';

function Notification() {
  const width = Dimensions.get('screen').width;
  const {sizes} = useTheme();
  const fakeNotifications = [{id: '1'}, {id: '2'}, {id: '3'}, {id: '4'}];
  return (
    <Block center>
      <FlatList
        data={fakeNotifications}
        showsVerticalScrollIndicator={true}
        keyExtractor={(item) => `${item?.id}`}
        style={{paddingHorizontal: sizes.base, width: width}}
        contentContainerStyle={{paddingBottom: sizes.l}}
        renderItem={({item}) => <NotificationItem key={item.id} />}
      />
    </Block>
  );
}

export default Notification;
