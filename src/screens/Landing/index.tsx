import { View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { landingProps } from '../../navigators/type'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../assets/images'
import styles from './styles'
import { Text, Image, RootView } from '../../components'
import { colors } from '../../theme'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const LandingScreen = (props: landingProps) => {
  const { navigation, route } = props

  const pressHandle = () => {
    navigation.navigate('phoneInput')
  }

  return (
    <RootView>
      <Image style={styles.imgBG} imgPath={images.landingBG} />
      <Text style={styles.title} text="Use your uber account to get started" />
      <TouchableOpacity onPress={pressHandle} style={styles.btnContainer} >
        <Image imgPath={images.USFlag} width={44} height={28} />
        <Text text='+44' fontWeight='400' size={16} lineHeight={24} style={styles.countryCode} />
        <FontAwesome5 name='angle-down' size={20} color={colors.black[500]} />
        <View style={{ alignItems: "center", flex: 1 }} >
          <Text
            text='343702946'
            color="#A4A4A4"
            fontWeight='400'
            size={16}
            lineHeight={24}
          />
        </View>
      </TouchableOpacity>
    </RootView>
  )
}

export default LandingScreen