import { StyleSheet } from 'react-native'
import colors from '../../theme/colors'

export default StyleSheet.create({
	root: {
		flex: 1,
		backgroundColor: colors.white[500],
	},
	imgBG: {
		width: '100%',
		marginTop: 8,
	},
	title: {
		fontWeight: '500',
		fontSize: 24,
		lineHeight: 36,
		padding: 16,
	},
	btnContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingVertical: 12,
		paddingHorizontal: 24,
		backgroundColor: '#E6E6E6',
		marginHorizontal: 16,
	},
	countryCode: {
		marginHorizontal: 12,
	},
})
