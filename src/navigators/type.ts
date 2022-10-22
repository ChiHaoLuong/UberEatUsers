import { NativeStackScreenProps } from '@react-navigation/native-stack'

export type RootParamList = {
	home: undefined
}

export type LoginParamList = {
	landing: undefined
	phoneInput: undefined
	passwordInput: {
		phoneNumber: string
	}
}

// Login Param List
export type landingProps = NativeStackScreenProps<LoginParamList, 'landing'>
export type PhoneInputProps = NativeStackScreenProps<
	LoginParamList,
	'phoneInput'
>
export type passwordInputProps = NativeStackScreenProps<
	LoginParamList,
	'passwordInput'
>
