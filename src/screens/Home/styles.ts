import { StyleSheet } from 'react-native'
import colors from '../../theme/colors'

export default StyleSheet.create({
	root: {
		flex: 1,
	},
	headerContainer: {
		backgroundColor: colors.white[500],
		paddingTop: 16,
		paddingHorizontal: 16,
		justifyContent: 'center',
		alignItems: 'center',
	},
	spacing: {
		height: 8,
	},
	expandTitle: {
		fontWeight: '500',
		fontSize: 14,
		lineHeight: 21,
		color: colors.black[500],
	},
	expandContainer: {
		justifyContent: 'center',
		alignItems: 'center',
	},
})
