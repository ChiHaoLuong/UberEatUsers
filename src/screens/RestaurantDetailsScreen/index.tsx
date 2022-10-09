import { FlatList } from 'react-native'
import React from 'react'
import { RestaurantItemsInterface } from '../../utils/interface'
import styles from './styles'
import { DishListItem } from '../../components'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Header } from './components'
import { RESTAURANT_DUM_DATA } from '../../utils/data'

Ionicons.loadFont()
const data: RestaurantItemsInterface = RESTAURANT_DUM_DATA[0]

const RestaurantDetailsScreen = () => {

  return (
    <SafeAreaView style={styles.page} >
      <FlatList
        data={data.dishes}
        renderItem={({ item }) => <DishListItem dish={item} />}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<Header data={data} />}
      />
      <Ionicons
        name='arrow-back-circle'
        color="white"
        size={44}
        style={styles.iconContainer}
      />
    </SafeAreaView>
  )
}

export default RestaurantDetailsScreen