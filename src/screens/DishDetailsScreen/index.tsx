import { View } from 'react-native'
import React, { useState } from 'react'
import { RESTAURANT_DUM_DATA } from '../../utils/data'
import { DishInterface } from '../../utils/interface'
import styles from './styles'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Text } from '../../components'

Ionicons.loadFont()
AntDesign.loadFont()
const data: DishInterface = RESTAURANT_DUM_DATA[0].dishes[0]

const DishDetailsScreen = () => {

  const [quantity, setQuantity] = useState<number>(1)

  const onMinusHandle = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const onPlusHandle = () => {
    setQuantity(quantity + 1)
  }

  const getTotal = () => {
    return (data.price * quantity).toFixed(2)
  }

  return (
    <View style={styles.root} >
      <Ionicons
        name='arrow-back'
        color="black"
        style={styles.iconBack}
        size={32}
      />
      <Text text={data.name} style={styles.name} />
      <Text text={data.description} style={styles.description} />
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
      <View style={styles.button} >
        <Text style={styles.buttonText} text={`Add ${quantity} to basket ($${getTotal()})`} />

      </View>
    </View>
  )
}

export default DishDetailsScreen