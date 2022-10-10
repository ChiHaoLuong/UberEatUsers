import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { ORDERS_DUM_DATA, RESTAURANT_DUM_DATA } from '../../utils/data'
import { OrderInterface } from '../../utils/interface'
import styles from './styles'
import { Header } from './components'
import { BasketDishItem } from '../../components/BasketDishItem'

const order: OrderInterface = ORDERS_DUM_DATA[0]

const OrderDetailsScreen = () => {
  return (
    <View style={styles.root} >
      <FlatList
        data={RESTAURANT_DUM_DATA[0].dishes}
        renderItem={({ item }) => <View style={styles.itemCardContainer} >
          <BasketDishItem dish={item} />
        </View>}
        ListHeaderComponent={<Header order={order} />}
        keyExtractor={(item, index) => index.toString()}

      />
    </View>
  )
}

export default OrderDetailsScreen