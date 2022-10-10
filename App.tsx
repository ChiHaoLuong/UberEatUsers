import React from 'react';
import {
  StatusBar,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigation';



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
        <RootNavigator />
      </NavigationContainer>
    </SafeAreaProvider >
  );
};
export default App;
