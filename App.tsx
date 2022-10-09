import React from 'react';
import {
  StatusBar,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import DishDetailsScreen from './src/screens/DishDetailsScreen';
import HomeScreen from './src/screens/HomeScreen';
import RestaurantDetailsScreen from './src/screens/RestaurantDetailsScreen';


const App = () => {

  return (
    <SafeAreaProvider >
      <StatusBar animated={true} />
      <DishDetailsScreen />
    </SafeAreaProvider >
  );
};
export default App;
