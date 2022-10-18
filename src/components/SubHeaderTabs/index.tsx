import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import colors from '../../theme/colors'
import AntDesign from 'react-native-vector-icons/AntDesign'

interface SubHeaderTabsProps {
  location: string,

}

export const SubHeaderTabs = (props: SubHeaderTabsProps) => {
  const { location } = props

  return (
    <View style={styles.container} >
      <View style={styles.sideContainer} />
      <TouchableOpacity style={styles.locationBtnContainer} >
        <Text style={styles.locationText} >{`${location} `}</Text>
        <AntDesign color={colors.black[500]} size={16} name='down' />
      </TouchableOpacity>
      <TouchableOpacity style={styles.sideContainer} >
        <Ionicons name='color-filter' color={colors.black[500]} size={24} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingVertical: 8
  },
  locationBtnContainer: {
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 12,
    flexDirection: "row",
    flex: 1
  },
  locationText: {
    fontWeight: "500",
    fontSize: 18,
    lineHeight: 22,
    color: colors.black[500],
  },
  sideContainer: {
    width: 48,
    justifyContent: "center",
    alignItems: "center"
  }
})