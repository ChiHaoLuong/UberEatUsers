import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useEffect, useState } from 'react'
import { Home, LandingScreen, PasswordInput, PhoneInputScreen } from '../screens'
import { LoginParamList, RootParamList } from './type'
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

const RootStack = createNativeStackNavigator<RootParamList>()

const LoginStack = createNativeStackNavigator<LoginParamList>()

export const RootStackScreen = () => {

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>();
  

  useEffect(() => {
    auth().onAuthStateChanged(userState => {
      setUser(userState);

      if (initializing) {
        setInitializing(false);
      }
    });
  }, []);

  if (user) {
    return (
      <RootStack.Navigator screenOptions={{ headerShown: false }} >
        <RootStack.Screen name='home' component={Home} />
      </RootStack.Navigator>
    )
  }

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
