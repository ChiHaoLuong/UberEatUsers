import { View, Text } from 'react-native'
import React from 'react'
import { passwordInputProps } from '../../navigators/type'

const PasswordInput = (props: passwordInputProps) => {
  const { navigation, route } = props
  const { phoneNumber } = props.route.params

  return (
    <View>
      <Text>{phoneNumber}</Text>
    </View>
  )
}

export default PasswordInput