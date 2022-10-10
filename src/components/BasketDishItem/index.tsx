import { View } from 'react-native'
import React from 'react'
import { Text } from '..'
import { DishInterface } from '../../utils/interface'
import styles from './styles'

export const BasketDishItem = ({ dish }: { dish: DishInterface }) => {
  const quantity = 2
  const dishTotalPrice = (quantity * dish.price).toFixed(2)

  return (
    <View style={styles.dishItemCard} >
      <View style={styles.dishQuantityContainer} >
        <Text text={quantity + ""} />
      </View>
      <Text
        style={styles.dishName}
        numberOfLines={1}
        text={dish.name}
      />
      <Text style={styles.dishPrice} text={`$${dishTotalPrice}`} />
    </View>
  )
}
