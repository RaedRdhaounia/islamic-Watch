import React from 'react'
import { ScrollView, View } from 'react-native'
import { Text } from '../../components'
import Album from '../../components/Album'
import AlbumList from '../../components/AlbumList'

function Pictures() {
  return (
    <ScrollView >
        <AlbumList/>
    </ScrollView>
  )
}

export default Pictures