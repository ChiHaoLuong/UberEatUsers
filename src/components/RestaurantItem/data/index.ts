import { ImageSourcePropType } from 'react-native'
export interface RestaurantInterface {
	name: string
	img_url: string
	categories: string[]
	price: number
	reviews: number
	rating: number
	id: number
}

export const RestaurantData: RestaurantInterface[] = [
	{
		id: 1,
		name: 'Beachside Bar',
		img_url:
			'https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg',
		categories: ['Cafe', 'Bar'],
		price: 500,
		reviews: 1244,
		rating: 4.5,
	},
	{
		id: 2,
		name: 'Benihana',
		img_url:
			'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
		categories: ['Cafe', 'Bar'],
		price: 30,
		reviews: 1244,
		rating: 3.7,
	},
	{
		id: 3,
		name: "India's Grill",
		img_url:
			'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
		categories: ['Indian', 'Bar'],
		price: 70,
		reviews: 700,
		rating: 4.9,
	},
	{
		id: 4,
		name: "India's Grill",
		img_url:
			'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
		categories: ['Indian', 'Bar'],
		price: 70,
		reviews: 700,
		rating: 4.9,
	},
	{
		id: 5,
		name: "India's Grill",
		img_url:
			'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
		categories: ['Indian', 'Bar'],
		price: 70,
		reviews: 700,
		rating: 4.9,
	},
]
