import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import { Text } from '../../../components'
import { OrderInterface } from '../../../utils/interface'


export const Header = ({ order }: { order: OrderInterface }) => {
  const status = `${order.status} . ${order.updatedAt}`

  return (
    <View style={styles.page} >
      <Image source={{ uri: order.Restaurant.image }} resizeMode="stretch" style={styles.image} />
      <View style={styles.container} >
        <Text text={order.Restaurant.name} style={styles.title} />
        <Text text={status} style={styles.subTitle} />
      </View>
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
    marginBottom: 4
  },
  subTitle: {
    fontSize: 16,
  },
  container: {
    padding: 12,
    borderBottomWidth: 2,
    borderBottomColor: 'lightgray',
  },
})