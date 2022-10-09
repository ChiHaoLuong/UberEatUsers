import { StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

export default StyleSheet.create({
	container: {
		marginVertical: 12,
		marginHorizontal: 12,
	},
	img: {
		width: '100%',
		aspectRatio: 5 / 3,
		marginBottom: 4,
	},
	title: {
		fontSize: 18,
		fontWeight: 'bold',
		marginVertical: 8,
	},
	subTitle: {
		color: 'grey',
	},
	infoContainer: {
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
	},
	titleContainer: {
		flex: 1,
	},
	ratingContainer: {
		marginLeft: 'auto',
		backgroundColor: 'lightgray',
		width: 32,
		height: 32,
		alignItems: 'center',
		borderRadius: 20,
		justifyContent: 'center',
	},
	rating: {},
})
