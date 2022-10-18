import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import colors from '../../theme/colors'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'

export const SearchBar = () => {

  const renderLeftButton = () => {

    return (
      <View style={styles.leftIconContainer} >
        <Ionicons name='location-sharp' size={24} />
      </View>
    )
  }

  const renderRightButton = () => {
    return (
      <View style={styles.rightIconContainer} >
        <AntDesign name='clockcircle' size={12} color={colors.black[500]} style={styles.rightIcon} />
        <Text style={{ color: colors.black[500] }} >Search</Text>
      </View>
    )
  }

  return (
    <View style={styles.container} >
      {/* TODO: Làm sau */}
      <GooglePlacesAutocomplete
        placeholder='Search'
        styles={{
          textInput: styles.textInput,
          textInputContainer: styles.textInputContainer
        }}
        renderLeftButton={renderLeftButton}
        renderRightButton={renderRightButton}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    flexDirection: "row"
  },
  textInput: {
    backgroundColor: "#eee",
    borderRadius: 20,
    fontWeight: "700",
    marginTop: 8,
  },
  textInputContainer: {
    backgroundColor: "#eee",
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
    marginRight: 12
  },
  leftIconContainer: {
    marginLeft: 12
  },
  rightIconContainer: {
    flexDirection: "row",
    marginRight: 8,
    backgroundColor: colors.white[500],
    padding: 8,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  rightIcon: {
    marginRight: 8,
  }
})