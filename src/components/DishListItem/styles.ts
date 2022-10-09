import { StyleSheet } from 'react-native'

export default StyleSheet.create({
	container: {
		paddingVertical: 12,
		borderBottomWidth: 1,
		borderBottomColor: 'lightgrey',
		marginVertical: 10,
		flexDirection: 'row',
		marginHorizontal: 24,
	},
	name: {
		fontWeight: '600',
		fontSize: 16,
		letterSpacing: 0.5,
	},
	description: {
		color: 'gray',
		marginVertical: 4,
	},
	price: {
		fontSize: 15,
	},
	image: {
		height: 65,
		aspectRatio: 1,
	},
})
