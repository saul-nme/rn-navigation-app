import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Router from './Router';
import SettingsScreen from '../screens/SettingsScreen';
import {useWindowDimensions} from 'react-native';

const Drawer = createDrawerNavigator();

export const MenuLateralBasico = () => {
  const {width, height} = useWindowDimensions();

  return (
    <Drawer.Navigator drawerType={width > height ? 'permanent' : 'front'}>
      <Drawer.Screen
        name="StackNavigator"
        options={{title: 'Home'}}
        component={Router}
      />
      <Drawer.Screen
        name="SettingsScreen"
        options={{title: 'Settings'}}
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
};
