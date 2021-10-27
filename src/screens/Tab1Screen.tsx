import React from 'react';
import {View, Text} from 'react-native';
import {Colors, styles} from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Feather';

export default function Tab1Screen() {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Iconos</Text>
      <Text>
        <Icon name="home" size={30} color={Colors.primary} />
      </Text>
    </View>
  );
}
