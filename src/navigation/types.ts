import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { BasketItemsInterface } from '../utils/interface'

export type RootStackParamList = {
	homeTabs: undefined
}

export type BottomTabParamList = {
	homeStack: undefined
	profileStack: undefined
	orderStack: undefined
}

export type HomeStackParamList = {
	basket: BasketItemsInterface
	dishDetails: { restaurantId: string; dishId: string }
	restaurantDetails: { id: string }
	home: undefined
}

export type OrderStackParamsList = {
	ordersDetails: undefined
	orders: undefined
}

export type RestaurantDetailsProps = NativeStackScreenProps<
	HomeStackParamList,
	'restaurantDetails'
>
export type BasketProps = NativeStackScreenProps<HomeStackParamList, 'basket'>
export type DishDetailsProps = NativeStackScreenProps<
	HomeStackParamList,
	'dishDetails'
>
export type HomeProps = NativeStackScreenProps<HomeStackParamList, 'home'>

export type OrdersProps = NativeStackScreenProps<OrderStackParamsList, 'orders'>
export type OrderDetailsProps = NativeStackScreenProps<
	OrderStackParamsList,
	'ordersDetails'
>
