import { FlatList } from 'react-native'
import React from 'react'
import { RestaurantItems } from '../../components'
import { RESTAURANT_DUM_DATA } from '../../utils/data'

const HomeScreen = () => {
  return (
    <FlatList
      data={RESTAURANT_DUM_DATA}
      renderItem={({ item }) => <RestaurantItems restaurant={item} />}
      showsVerticalScrollIndicator={false}
    />
  )
}

export default HomeScreen