import { View, Image } from 'react-native'
import React from 'react'
import { DishInterface } from '../../utils/interface'
import { Text } from '../Text'
import styles from './styles'

interface DishListItemProps {
  dish: DishInterface
}

export const DishListItem = (props: DishListItemProps) => {
  const { dish } = props
  return (
    <View style={styles.container} >
      <View style={{ flex: 1 }} >
        <Text style={styles.name} text={dish.name} />
        <Text style={styles.description} numberOfLines={2} text={dish.description} />
        <Text style={styles.price} text={"$ " + dish.price + ""} />
      </View>
      {dish?.image && <Image style={styles.image} source={{ uri: dish.image }} />}
    </View>
  )
}
