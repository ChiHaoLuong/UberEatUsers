import { FlatList, ScrollView, View } from 'react-native'
import React from 'react'
import { RestaurantItemsInterface } from '../../utils/interface'
import styles from './styles'
import { DishListItem } from '../../components'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Header } from './components'
import { RESTAURANT_DUM_DATA } from '../../utils/data'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { RestaurantDetailsProps } from '../../navigation/types'

Ionicons.loadFont()

const RestaurantDetailsScreen = (props: RestaurantDetailsProps) => {
  const { navigation, route } = props
  const { params: { id } } = route
  const notchHeight = useSafeAreaInsets().top
  const data: RestaurantItemsInterface | undefined = RESTAURANT_DUM_DATA.find(i => i.id === id)

  const goBackHandle = () => {
    if (navigation.canGoBack()) {
      navigation.goBack()
    }
  }

  const navHandle = (dishId: string) => {
    navigation.navigate("dishDetails", {
      dishId, restaurantId: id
    })
  }

  if (!data) {
    return <View></View>
  }

  return (
    <View style={styles.page}>
      <FlatList
        data={data.dishes}
        renderItem={({ item }) => <DishListItem callBackHandle={navHandle} dish={item} />}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<Header data={data} />}
      />
      <Ionicons
        name='arrow-back-circle'
        color="white"
        size={44}
        style={[styles.iconContainer, {
          marginTop: notchHeight || 0
        }]}
        onPress={goBackHandle}
      />
    </View>

  )
}

export default RestaurantDetailsScreen