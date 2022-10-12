import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { ENUM_HEADER_TABS } from '../../utils/enums'
import colors from '../../theme/colors'

interface HeaderButtonProps {
  text: ENUM_HEADER_TABS,
  activeTab: ENUM_HEADER_TABS,
  setActiveTab: (val: ENUM_HEADER_TABS) => void
}

const HeaderButton = (props: HeaderButtonProps) => {
  const { activeTab, setActiveTab, text } = props
  const isActive = activeTab === text

  const pressTab = () => {
    setActiveTab(text)
  }

  return (
    <Pressable onPress={pressTab} style={[styles.tabContainer, {
      backgroundColor: isActive ? colors.black[500] : colors.white[500]
    }]} >
      <Text style={[styles.tabTitle, {
        color: isActive ? colors.white[500] : colors.black[500]
      }]} >{text}</Text>
    </Pressable>
  )
}

export const HeaderTabs = () => {
  const [activeTab, setActiveTab] = useState<ENUM_HEADER_TABS>(ENUM_HEADER_TABS.DELIVERY)

  return (
    <View style={styles.container} >
      <HeaderButton
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        text={ENUM_HEADER_TABS.DELIVERY}
      />
      <HeaderButton
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        text={ENUM_HEADER_TABS.PICKUP}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignSelf: "center"
  },
  tabContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 26,
    marginHorizontal: 4,
    justifyContent: "center",
    alignItems: "center"
  },
  tabTitle: {
    fontWeight: "bold",
    fontSize: 14,
    lineHeight: 21,
  }
})