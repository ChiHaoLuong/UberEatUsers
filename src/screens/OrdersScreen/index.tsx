import { FlatList, View } from 'react-native'
import React from 'react'
import styles from './styles'
import { OrderListItem, Text } from '../../components'
import { ORDERS_DUM_DATA } from '../../utils/data'
import { OrdersProps } from '../../navigation/types'

const OrdersScreen = (props: OrdersProps) => {
  const { navigation, route } = props

  const navHandle = (orderId: string) => {
    navigation.navigate("ordersDetails")
  }

  return (
    <View style={styles.root} >
      <Text style={styles.headerTitle} text="Your orders" />
      <FlatList
        data={ORDERS_DUM_DATA}
        renderItem={({ item }) => <OrderListItem callBackHandle={navHandle} order={item} />}
        keyExtractor={(item, index) => index.toString()
        }
      />
    </View>
  )
}

export default OrdersScreen