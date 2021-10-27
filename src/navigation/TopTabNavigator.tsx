import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ChatsScreen from '../screens/ChatsScreen';
import ContactsScreen from '../screens/ContactsScreen';
import AlbumsScreen from '../screens/AlbumsScreen';
import {Colors} from '../theme/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
  const {top} = useSafeAreaInsets();
  return (
    <Tab.Navigator
      style={{paddingTop: top}}
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      tabBarOptions={{
        showIcon: true,
        indicatorStyle: {
          backgroundColor: Colors.primary,
        },
        style: {
          borderTopColor: Colors.primary,
          elevation: 0,
          borderTopWidth: 0,
        },
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({color, focused}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Chat':
              iconName = 'message-circle';
              break;
            case 'Contacts':
              iconName = 'users';
              break;
            case 'Albums':
              iconName = 'image';
              break;

            default:
              break;
          }
          return (
            <Icon
              name={iconName}
              size={24}
              color={focused ? Colors.primary : Colors.gray}
            />
          );
        },
      })}>
      <Tab.Screen name="Chat" component={ChatsScreen} />
      <Tab.Screen name="Contacts" component={ContactsScreen} />
      <Tab.Screen name="Albums" component={AlbumsScreen} />
    </Tab.Navigator>
  );
};
