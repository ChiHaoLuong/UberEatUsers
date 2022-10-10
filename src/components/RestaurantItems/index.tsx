import { View, Image, Pressable } from 'react-native'
import React from 'react'
import styles from './styles'
import { Text } from '../'
import { RestaurantItemsInterface } from '../../utils/interface'

interface RestaurantItemsProps {
  restaurant: RestaurantItemsInterface
  callBackHandle: (id: string) => void
}

export const RestaurantItems = (props: RestaurantItemsProps) => {
  const { restaurant, callBackHandle } = props
  const delivery: string = `$${restaurant.deliveryFee}​ * ${restaurant.minDeliveryTime}-${restaurant.maxDeliveryTime} minutes`

  const pressItemHandle = () => {
    callBackHandle(restaurant.id)
  }

  return (
    <Pressable onPress={pressItemHandle} style={styles.container} >
      <Image
        source={{ uri: restaurant.image }}
        style={styles.img}
        resizeMode="stretch"
      />
      <View style={styles.infoContainer} >
        <View style={styles.titleContainer} >
          <Text style={styles.title} text={restaurant.name} />
          <Text style={styles.subTitle} text={delivery} />
        </View>
        <View style={styles.ratingContainer} >
          <Text style={styles.rating} text={restaurant.rating + ""} />
        </View>
      </View>
    </Pressable>
  )
}
