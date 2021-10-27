import React, {useEffect} from 'react';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {View, Text, Button} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {styles, Colors} from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Feather';

// interface Props extends StackScreenProps<any, any> {}
interface Props extends DrawerScreenProps<any, any> {}

export default function Pagina1Screen({navigation}: Props) {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => {
            navigation.toggleDrawer();
          }}>
          <Text>
            <Icon name="menu" size={32} color={Colors.gray} />
          </Text>
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina 1 screen</Text>
      <Button
        title="Ir a página 2"
        onPress={() => navigation.navigate('Pagina2Screen')}
      />
      <Button
        title="Ir persona"
        onPress={() => navigation.navigate('PersonaScreen')}
      />
      <Text>Navegar con argumentos</Text>

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{
            ...styles.bigButton,
            backgroundColor: 'purple',
          }}
          onPress={() =>
            navigation.navigate('PersonaScreen', {id: 1, nombre: 'Pedro'})
          }>
          <Icon name="user" size={24} color={Colors.white} />
          <Text style={styles.bigText}>Pedro</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.bigButton,
            backgroundColor: 'pink',
          }}
          onPress={() =>
            navigation.navigate('PersonaScreen', {id: 2, nombre: 'Saul'})
          }>
          <Text>
            <Icon name="user" size={24} color={Colors.white} />
          </Text>
          <Text style={styles.bigText}>Saul</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
