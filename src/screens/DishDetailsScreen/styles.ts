import { StyleSheet } from 'react-native'

export default StyleSheet.create({
	root: {
		flex: 1,
		backgroundColor: 'white',
		marginHorizontal: 12,
	},
	iconBack: {
		paddingVertical: 32,
	},
	name: {
		fontSize: 30,
		fontWeight: '600',
		marginVertical: 12,
	},
	description: {
		color: 'gray',
	},
	horizontalLine: {
		height: 1,
		backgroundColor: 'lightgrey',
		marginVertical: 12,
	},
	quantityContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 52,
	},
	quantityText: {
		fontSize: 25,
		marginHorizontal: 20,
	},
	button: {
		backgroundColor: 'black',
		marginTop: 'auto',
		padding: 20,
		alignItems: 'center',
		marginBottom: 12,
	},
	buttonText: {
		color: 'white',
		fontWeight: '600',
		fontSize: 18,
	},
})
