import { StyleSheet, Text, View, Image, TouchableOpacity, Pressable } from 'react-native'
import React, { useState } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import colors from '../../theme/colors'
import { RestaurantInterface } from './data'
import { isFunction } from 'lodash'

interface RestaurantItemProps {
  item: RestaurantInterface,
  onPressItem?: (itemId: string) => void
}

export const RestaurantItem = (props: RestaurantItemProps) => {
  const { item, onPressItem } = props

  const pressHandle = () => {
    if (isFunction(onPressItem)) {
      onPressItem()
    }
  }

  const RestaurantImage = () => {
    const [isLiked, setIsLiked] = useState<boolean>(false)
    const nameIcon = isLiked ? 'cards-heart' : 'heart-outline'

    const pressLikeHandle = () => {
      setIsLiked(!isLiked)
    }

    return (
      <>
        <Image
          resizeMode='stretch'
          source={{ uri: item?.img_url }}
          style={styles.restaurantImgContainer}
        />
        <Pressable onPress={pressLikeHandle} style={styles.btnLike} >
          <MaterialCommunityIcons name={nameIcon} size={24} color={colors.white[500]} />
        </Pressable>
      </>
    )
  }

  return (
    <TouchableOpacity onPress={pressHandle} style={styles.container} >
      <RestaurantImage />
      <View style={styles.itemInfoContainer} >
        <Text style={styles.name} >{item?.name}</Text>
        <View style={styles.ratingContainer} >
          <Text style={styles.ratingText} >{item?.rating}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  restaurantImgContainer: {
    width: "100%",
    aspectRatio: 23 / 10
  },
  btnLike: {
    position: "absolute",
    right: 20,
    top: 20
  },
  container: {
    marginHorizontal: 16,
    marginBottom: 8,
    paddingBottom: 20
  },
  itemInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 4
  },
  name: {
    color: colors.black[500],
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 21
  },
  ratingContainer: {
    padding: 4,
    backgroundColor: colors.black[50],
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  ratingText: {
    color: colors.black[500],
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 21
  }
})