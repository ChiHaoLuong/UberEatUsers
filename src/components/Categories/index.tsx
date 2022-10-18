import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ItemInterface, ITEMS } from './data'
import colors from '../../theme/colors'

export const Categories = () => {

  const renderItem = ({ item }: { item: ItemInterface }) => {

    return (
      <View style={styles.itemWrap} >
        <Image source={item.image} style={styles.image} />
        <Text style={styles.text} >{item.text}</Text>
      </View>
    )
  }

  return (
    <FlatList
      style={styles.container}
      data={ITEMS}
      renderItem={renderItem}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => item.text}
    />
  )
}

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 40,
    resizeMode: "contain"
  },
  text: {
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 21,
  },
  itemWrap: {
    alignItems: "center",
    marginRight: 32,
    justifyContent: "center"
  },
  container: {
    backgroundColor: colors.white[500],
    paddingVertical: 12,
    paddingLeft: 20,
  }
})