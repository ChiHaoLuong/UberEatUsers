import { StyleSheet } from 'react-native'

export default StyleSheet.create({
	dishItemCard: {
		paddingVertical: 12,
		marginVertical: 4,
		flexDirection: 'row',
		alignItems: 'center',
	},
	dishPrice: {
		marginLeft: 'auto',
	},
	dishQuantityContainer: {
		marginRight: 12,
		backgroundColor: 'lightgray',
		width: 20,
		height: 20,
		justifyContent: 'center',
		alignItems: 'center',
	},
	dishName: {
		flex: 1,
		fontWeight: '600',
		marginRight: 12,
	},
})
