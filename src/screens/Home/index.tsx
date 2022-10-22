import { View, Text, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { HeaderTabs, Categories, SearchBar, RestaurantItem, SubHeaderTabs } from '../../components'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './styles'
import { RestaurantData, RestaurantInterface } from '../../components/RestaurantItem/data'

const Home = () => {

  // function FooterMainComponent() {
  //   return (
  //     <TouchableOpacity style={styles.expandContainer} >
  //       <Text style={styles.expandTitle} >{expandRestaurantTitle}</Text>
  //     </TouchableOpacity>
  //   )
  // }

  return (
    <SafeAreaView style={styles.root} >
      <ScrollView >
        <View style={styles.headerContainer} >
          <HeaderTabs />
          <SubHeaderTabs location='Ho Chi Minh City' />
        </View>
        <Categories />
        {
          RestaurantData?.map((e, i) => <RestaurantItem item={e} key={i} />)
        }

      </ScrollView>
    </SafeAreaView>
  )
}

export default Home