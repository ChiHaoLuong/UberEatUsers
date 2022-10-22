import React, { useState } from 'react'
import styles from './styles'
import { Button, CountryPicker, RootView, Text, View } from '../../components'
import { colors } from '../../theme'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { isEmpty } from 'lodash'
import { PhoneInputProps } from '../../navigators/type'
import { CountryCode } from 'react-native-country-picker-modal'

const PhoneInputScreen = (props: PhoneInputProps) => {
  const { navigation } = props

  const [phoneNumber, setPhoneNumber] = useState<string>('')
  const [countryCode, setCountryCode] = useState<CountryCode>('VN')

  const nextHandle = () => {
    if (!isEmpty(phoneNumber)) {
      navigation.navigate("passwordInput", {
        phoneNumber: `${countryCode}${phoneNumber}`
      })
    }
  }

  return (
    <RootView ph={16} pt={52} >
      <Text
        fontWeight='500'
        size={20}
        lineHeight={28}
        text='Enter your mobile number'
        mb={16}
      />
      <CountryPicker
        countryCode={countryCode}
        setCountryCode={setCountryCode}
        phoneNumber={phoneNumber}
        setPhoneNumber={setPhoneNumber}
      />
      <Button
        title='Next'
        btnColor={colors.black[500]}
        titleColor={colors.white[500]}
        iconRight={
          <FontAwesome5 name='arrow-right' color={colors.white[500]} size={20} />
        }
        titleSize={16}
        mt={28}
        onPress={nextHandle}
      />
      <Text
        fontWeight='500'
        size={12}
        color={"#888888"}
        mt={12}
        text='By proceeding, you consent to get calls, Whatsapp or SMS messages, including by automated means, from uber and its affiliates to the number provided.'
      />
      <View mv={16} justifyContent="space-between" alignItems='center' flexDirection='row' >
        <View height={1} width="40%" backgroundColor={"#A4A4A4"} />
        <Text text='or' flex={1} textAlign="center" size={14} lineHeight={20} color="#888888" />
        <View height={1} width="40%" backgroundColor={"#A4A4A4"} />
      </View>
      <Button
        btnColor={colors.white[500]}
        borW={1}
        borColor={colors.black[500]}
        title="Continue with google"
        titleSize={16}
        pv={16}
        iconLeft={
          <AntDesign name='google' size={28} color={colors.black[500]} />
        }
        mb={12}
      />
      <Button
        btnColor={colors.white[500]}
        borW={1}
        borColor={colors.black[500]}
        title="Continue with facebook"
        titleSize={16}
        pv={16}
        iconLeft={
          <AntDesign name='facebook-square' size={28} color={colors.black[500]} />
        }

      />
    </RootView>
  )
}

export default PhoneInputScreen