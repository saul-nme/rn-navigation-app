import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {RootStackParams} from '../navigation/Router';
import {styles} from '../theme/appTheme';

interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'> {}
// interface RouteParams {
//    id: number;
//    nombre: string;
// }

export default function PersonaScreen({route, navigation}: Props) {
  const params = route.params;
  // const params  = route.params as RouteParams;

  useEffect(() => {
    navigation.setOptions({
      title: params?.nombre,
    });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>{JSON.stringify(params, null, 3)}</Text>
    </View>
  );
}
