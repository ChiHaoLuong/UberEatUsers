import { FlatList, ScrollView } from 'react-native'
import React from 'react'
import { RestaurantItems, Text } from '../../components'
import { RESTAURANT_DUM_DATA } from '../../utils/data'
import { HomeProps } from '../../navigation/types'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './styles'

const HomeScreen = (props: HomeProps) => {
  const { navigation } = props

  const navHandle = (id: string) => {
    navigation.navigate("restaurantDetails", {
      id
    })
  }

  return (
    <SafeAreaView style={styles.page} >
      <Text style={styles.headerTitle} text='Restaurants' />
      <ScrollView >
        {
          RESTAURANT_DUM_DATA.map((e, i) => <RestaurantItems callBackHandle={navHandle} restaurant={e} key={i} />)
        }
      </ScrollView>
    </SafeAreaView>

  )
}

export default HomeScreen