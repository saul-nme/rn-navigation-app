import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentOptions,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Feather';
import SettingsScreen from '../screens/SettingsScreen';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {Colors, styles} from '../theme/appTheme';
import {Tabs} from './Tabs';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="TabsScreen" component={Tabs} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

const DrawerContent = ({
  navigation,
}: DrawerContentComponentProps<DrawerContentOptions>) => {
  return (
    <DrawerContentScrollView>
      {/* Configuración del Avatar */}
      <View style={styles.avatarContainer}>
        <View style={[styles.circle, styles.circle1]} />
        <View style={[styles.circle, styles.circle2]} />
        <Image
          source={{
            uri: 'https://image.flaticon.com/icons/png/512/4832/4832263.png',
          }}
          style={styles.avatar}
        />
      </View>

      {/* Opciones del drawer */}

      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={[styles.buttonContainer]}
          onPress={() => navigation.navigate('TabsScreen')}>
          <View style={styles.buttonContainer1}>
            <Icon name="git-branch" size={24} color={Colors.gray} />
            <Text style={styles.textButton}>Stack</Text>
          </View>
          <Text>
            <Icon name="chevron-right" size={24} color={Colors.gray} />
          </Text>
        </TouchableOpacity>
        <View style={styles.divider} />
        <TouchableOpacity
          style={[styles.buttonContainer]}
          onPress={() => navigation.navigate('SettingsScreen')}>
          <View style={styles.buttonContainer1}>
            <Icon name="settings" size={24} color={Colors.gray} />
            <Text style={styles.textButton}>Settings</Text>
          </View>
          <Text>
            <Icon name="chevron-right" size={24} color={Colors.gray} />
          </Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
