import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import { Text } from '../../../components'
import { RestaurantItemsInterface } from '../../../utils/interface'

export const Header = ({ data }: { data: RestaurantItemsInterface }) => {
  const delivery: string = `$ . ${data.rating}​ `


  return (
    <View style={styles.page} >
      <Image source={{ uri: data.image }} resizeMode="stretch" style={styles.image} />
      <View style={styles.container} >
        <Text text={data.name} style={styles.title} />
        <Text text={delivery} style={styles.subTitle} />
      </View>
      <Text text="Menu" style={styles.menu} />
    </View>
  )
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    aspectRatio: 5 / 3,
  },
  title: {
    fontSize: 36,
    fontWeight: '600',
  },
  subTitle: {
    color: 'grey',
    fontSize: 16,
  },
  container: {
    padding: 12,
    borderBottomWidth: 2,
    borderBottomColor: 'lightgray',
  },
  menu: {
    color: 'grey',
    marginTop: 12,
    marginHorizontal: 24,
    fontSize: 18,
    letterSpacing: 0.7
  },
})