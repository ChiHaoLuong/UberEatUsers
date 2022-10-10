import { TouchableOpacity, View } from 'react-native'
import React, { useCallback, useMemo, useState } from 'react'
import { RESTAURANT_DUM_DATA } from '../../utils/data'
import { DishInterface, RestaurantItemsInterface } from '../../utils/interface'
import styles from './styles'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Text } from '../../components'
import { DishDetailsProps } from '../../navigation/types'
import { isEmpty } from 'lodash'
import { SafeAreaView } from 'react-native-safe-area-context'

Ionicons.loadFont()
AntDesign.loadFont()
// const data: DishInterface = RESTAURANT_DUM_DATA[0].dishes[0]

const DishDetailsScreen = (props: DishDetailsProps) => {
  const { navigation, route } = props
  const { dishId, restaurantId } = route.params
  const restaurantData = RESTAURANT_DUM_DATA.find(i => i.id === restaurantId)
  const dishData = restaurantData?.dishes?.find(i => i.id === dishId)

  const [quantity, setQuantity] = useState<number>(1)

  const onMinusHandle = useCallback(
    () => {
      if (quantity > 1) {
        setQuantity(quantity - 1)
      }
    },
    [quantity],
  )

  const onPlusHandle = useCallback(
    () => {
      setQuantity(quantity + 1)
    },
    [quantity],
  )

  const goBackHandle = () => {
    if (navigation.canGoBack()) {
      navigation.goBack()
    }
  }

  const navHandle = () => {
    navigation.navigate("basket", {
      dishId,
      restaurantId,
      quantity,
      totalPrice: parseFloat(getTotal)
    })
  }

  const getTotal = useMemo(() => ((dishData?.price || 0) * quantity).toFixed(2), [quantity])

  return (
    <SafeAreaView style={styles.root} >
      <Ionicons
        name='arrow-back'
        color="black"
        style={styles.iconBack}
        size={32}
        onPress={goBackHandle}
      />
      <Text text={dishData?.name || ""} style={styles.name} />
      <Text text={dishData?.description} style={styles.description} />
      <View style={styles.horizontalLine} />
      <View style={styles.quantityContainer} >
        <AntDesign
          name='minuscircleo'
          size={60}
          color="black"
          onPress={onMinusHandle}
        />
        <Text style={styles.quantityText} text={quantity + ""} />
        <AntDesign
          name='pluscircleo'
          size={60}
          color="black"
          onPress={onPlusHandle}
        />
      </View>
      <TouchableOpacity onPress={navHandle} style={styles.button} >
        <Text style={styles.buttonText} text={`Add ${quantity} to basket ($${getTotal})`} />
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default DishDetailsScreen