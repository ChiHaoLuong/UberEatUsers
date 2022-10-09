export interface DishInterface {
	id: string
	name: string
	price: number
	description: string
	image: string
}

export interface RestaurantItemsInterface {
	id: string
	deliveryFee: number
	minDeliveryTime: number
	maxDeliveryTime: number
	rating: number
	image: string
	dishes: DishInterface[]
	name: string
}
