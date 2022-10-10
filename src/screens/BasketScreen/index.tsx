import { FlatList, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import styles from './styles'
import { Text } from '../../components'
import { RESTAURANT_DUM_DATA } from '../../utils/data'
import { BasketDishItem } from '../../components/BasketDishItem'
import { SafeAreaView } from 'react-native-safe-area-context'
import { BasketProps } from '../../navigation/types'

Ionicons.loadFont()

const BasketScreen = (props: BasketProps) => {
  const { navigation, route } = props
  const { dishId, quantity, restaurantId, totalPrice } = route.params
  const restaurantData = RESTAURANT_DUM_DATA.find(i => i.id === restaurantId)

  const goBackHandle = () => {
    if (navigation.canGoBack()) {
      navigation.goBack()
    }
  }

  return (
    <View style={styles.root} >
      <Ionicons
        name='arrow-back'
        color="black"
        style={styles.iconBack}
        size={32}
        onPress={goBackHandle}
      />
      <Text text={restaurantData?.name} style={styles.name} />
      <Text style={styles.yourItem} text='Your items' />
      <FlatList
        data={restaurantData?.dishes}
        renderItem={({ item }) => <BasketDishItem dish={item} />}
        keyExtractor={(item, index) => index.toString()}
        ListFooterComponent={<View style={styles.horizontalLine} />}
      />
      <View style={styles.button} >
        <Text style={styles.buttonText} text={`Next . `} />
      </View>
    </View>
  )
}

export default BasketScreen