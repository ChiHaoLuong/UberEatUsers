import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BasketScreen, DishDetailsScreen, HomeScreen, OrderDetailsScreen, OrdersScreen, RestaurantDetailsScreen } from '../screens'
import { BottomTabParamList, HomeStackParamList, OrderStackParamsList } from './types'
import Foundation from 'react-native-vector-icons/Foundation'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

Foundation.loadFont()
const Tab = createMaterialBottomTabNavigator<BottomTabParamList>()
const { Navigator, Screen } = Tab
const HomeStack = createNativeStackNavigator<HomeStackParamList>()
const OrderStack = createNativeStackNavigator<OrderStackParamsList>()

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator screenOptions={{
      headerShown: false
    }} initialRouteName='home' >
      <HomeStack.Screen name="home" component={HomeScreen} />
      <HomeStack.Screen name="basket" component={BasketScreen} />
      <HomeStack.Screen name="dishDetails" component={DishDetailsScreen} />

      <HomeStack.Screen name="restaurantDetails" component={RestaurantDetailsScreen} />
    </HomeStack.Navigator>
  )
}

const OrderNavigator = () => {
  return (
    <OrderStack.Navigator initialRouteName='orders' screenOptions={{
      headerShown: false
    }} >
      <OrderStack.Screen name="orders" component={OrdersScreen} />
      <OrderStack.Screen name="ordersDetails" component={OrderDetailsScreen} />
    </OrderStack.Navigator>
  )
}

export const HomeTabs = () => {
  return (
    <Navigator initialRouteName='homeStack' barStyle={{
      backgroundColor: "white"
    }} >
      <Screen
        name='homeStack'
        component={HomeNavigator}
        options={{
          tabBarLabel: "Home",
          tabBarIcon(props) {
            return <Foundation name='home' color={props.color} size={24} />
          },
        }}
      />
      <Screen
        name='orderStack'
        component={OrderNavigator}
        options={{
          tabBarLabel: "Order",
          tabBarIcon(props) {
            return <MaterialIcons name='list-alt' color={props.color} size={24} />
          },
        }}
      />
      <Screen
        name='profileStack'
        component={OrdersScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon(props) {
            return <FontAwesome5 name='user-alt' color={props.color} size={24} />
          },
        }}
      />
    </Navigator>
  )
}