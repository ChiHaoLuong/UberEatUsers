import { View, Text } from 'react-native'
import React from 'react'
import { HeaderTabs } from '../../components'
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = () => {
  return (
    <SafeAreaView>
      <HeaderTabs />
    </SafeAreaView>
  )
}

export default Home