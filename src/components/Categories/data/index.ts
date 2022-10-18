import { ImageSourcePropType } from 'react-native'

export interface ItemInterface {
	image: ImageSourcePropType
	text: string
}

export const ITEMS: ItemInterface[] = [
	{
		image: require('../../../assets/images/shopping-bag.png'),
		text: 'Pickup',
	},
	{
		image: require('../../../assets/images/soft-drink.png'),
		text: 'Soft Drinks',
	},
	{
		image: require('../../../assets/images/bread.png'),
		text: 'Bakery Items',
	},
	{
		image: require('../../../assets/images/fast-food.png'),
		text: 'Fast Foods',
	},
	{
		image: require('../../../assets/images/deals.png'),
		text: 'Deals',
	},
	{
		image: require('../../../assets/images/coffee.png'),
		text: 'Coffee & Tea',
	},
	{
		image: require('../../../assets/images/desserts.png'),
		text: 'Desserts',
	},
]
