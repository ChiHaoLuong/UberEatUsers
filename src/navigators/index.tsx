import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home, LandingScreen, PasswordInput, PhoneInputScreen } from '../screens'
import { LoginParamList, RootParamList } from './type'

const RootStack = createNativeStackNavigator<RootParamList>()

const LoginStack = createNativeStackNavigator<LoginParamList>()

export const RootStackScreen = () => {
  // return (
  //   <RootStack.Navigator >
  //     <RootStack.Screen options={{
  //       headerShown: false
  //     }} name='home' component={Home} />
  //   </RootStack.Navigator>
  // )

  return (
    <LoginStack.Navigator screenOptions={{
      headerShown: false
    }} >
      <LoginStack.Screen name='landing' component={LandingScreen} />
      <LoginStack.Screen name='phoneInput' component={PhoneInputScreen} />
      <LoginStack.Screen name='passwordInput' component={PasswordInput} />
    </LoginStack.Navigator>
  )
}
