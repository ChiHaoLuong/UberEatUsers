import React from 'react';
import {
  StatusBar,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from './src/screens';
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
// import RootNavigator from './src/navigation';

Ionicons.loadFont()
AntDesign.loadFont()
MaterialCommunityIcons.loadFont()

const App = () => {
  return (
    <SafeAreaProvider >
      <StatusBar
        translucent
        animated={true}
        backgroundColor="rgba(0, 0, 0, 0)"
        barStyle="dark-content"
      />
      <NavigationContainer >
        <Home />
      </NavigationContainer>
    </SafeAreaProvider >
  );
};
export default App;
