import 'react-native-gesture-handler';
import React from 'react';
// import {View, Text, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
// import Router from './src/navigation/Router';
// import {MenuLateralBasico} from './src/navigation/MenuLateralBasico';
import {MenuLateral} from './src/navigation/MenuLateral';

export default function App() {
  return (
    <NavigationContainer>
      <MenuLateral />
    </NavigationContainer>
  );
}
