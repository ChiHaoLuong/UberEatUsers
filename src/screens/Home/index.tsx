import { View, Text, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { HeaderTabs, Categories, SearchBar, RestaurantItem, SubHeaderTabs } from '../../components'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './styles'
import { RestaurantData, RestaurantInterface } from '../../components/RestaurantItem/data'

const Home = () => {
  const initialData: RestaurantInterface[] = [RestaurantData[0], RestaurantData[1], RestaurantData[2]]

  const [restaurantRenderData, setRestaurantRenderData] = useState<RestaurantInterface[]>(initialData)
  const [isExpandRestaurant, setIsExpandRestaurant] = useState<boolean>(false)

  const expandRestaurantTitle = isExpandRestaurant ? "Thu gọn" : "Xem thêm..."

  function HeaderMainComponent() {
    return (
      <View style={styles.headerContainer} >
        <HeaderTabs />
        <SubHeaderTabs location='Ho Chi Minh City' />
      </View>
    )
  }

  function FooterMainComponent() {
    return (
      <TouchableOpacity style={styles.expandContainer} >
        <Text style={styles.expandTitle} >{expandRestaurantTitle}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={styles.root} >
      <FlatList
        ListHeaderComponent={HeaderMainComponent}
        renderItem={({ item }) => <RestaurantItem item={item} />}
        data={restaurantRenderData}
        keyExtractor={(item) => item.id.toString()}
        ListFooterComponent={FooterMainComponent}
      />
    </SafeAreaView>
  )
}

export default Home