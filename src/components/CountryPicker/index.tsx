import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import CountryPickerLib, { Country, CountryCode, FlagButton } from 'react-native-country-picker-modal'
import colors from '../../theme/colors'

const { width } = Dimensions.get("window")

function CountryButton({ countryCode, setCountryCode }: { countryCode: CountryCode, setCountryCode: (countryCode: CountryCode) => void }) {

  const onSelect = (country: Country) => {
    setCountryCode(country.cca2)

  }
  return (
    <CountryPickerLib
      countryCode={countryCode}
      containerButtonStyle={styles.btnContainer}
      onSelect={onSelect}
      withCallingCode={true}
      region="Asia"
      withEmoji={true}
      withFlag={true}
      withCallingCodeButton={true}
      withAlphaFilter={true}
      withFilter={true}
      visible={false}
    />
  )
}

interface CountryPickerProps {
  countryCode: CountryCode
  setCountryCode: (code: CountryCode) => void
  phoneNumber: string
  setPhoneNumber: (val: string) => void
}

export const CountryPicker = (props: CountryPickerProps) => {
  const { countryCode, setCountryCode, phoneNumber, setPhoneNumber } = props

  const [phoneNumberInput, setPhoneNumberInput] = useState<string>(phoneNumber)

  const onchangeHandle = (val: string) => {
    setPhoneNumberInput(val)
    setTimeout(() => {
      setPhoneNumber(val)
    }, 500)
  }

  return (
    <TouchableOpacity style={styles.container} >
      <CountryButton countryCode={countryCode} setCountryCode={setCountryCode} />
      <TextInput
        style={styles.input}
        placeholder="Mobile number"
        value={phoneNumberInput}
        onChangeText={onchangeHandle}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    width: width / 1.6,
    backgroundColor: colors.black[50],
    paddingHorizontal: 8,
    color: colors.black[500],
    fontWeight: "bold",
    fontSize: 16,
    lineHeight: 24,
    height: 52
  },
  btnContainer: {
    width: width / 3.5,
    height: 52,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.black[50],

  }
})