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

export interface RestaurantInterface {
	id: string
	deliveryFee: number
	minDeliveryTime: number
	maxDeliveryTime: number
	rating: number
	image: string
	name: string
	address: string
	lat: number
	lng: number
	createdAt: string
	updatedAt: string
}

export interface OrderInterface {
	id: string
	userId: string
	status: string
	createdAt: string
	updatedAt: string
	orderRestaurantId: string
	Restaurant: RestaurantInterface
}
