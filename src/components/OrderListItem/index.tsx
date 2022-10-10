import { View, Image, Pressable } from 'react-native'
import React from 'react'
import { OrderInterface } from '../../utils/interface'
import styles from './styles'
import { Text } from '../'

interface OrderListItemProps {
  order: OrderInterface,
  callBackHandle: (id: string) => void
}

export const OrderListItem = (props: OrderListItemProps) => {
  const { order, callBackHandle } = props

  const pressItemHandle = () => {
    callBackHandle(order.id)
  }

  return (
    <Pressable onPress={pressItemHandle} style={styles.container} >
      <Image resizeMode='stretch' style={styles.img} source={{ uri: order.Restaurant.image }} />
      <View style={styles.infoContainer} >
        <Text style={styles.name} text={order.Restaurant.name} />
        <Text style={styles.price} text={`items $38.5`} />
        <Text style={styles.status} text={`2 days ago . ${order.status}`} />
      </View>
    </Pressable>
  )
}