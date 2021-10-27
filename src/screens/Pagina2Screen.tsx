import { useNavigation } from '@react-navigation/core';
import React, { useEffect } from 'react'
import { View, Text, Button } from 'react-native'
import { styles } from '../theme/appTheme';

export default function Pagina2Screen() {

   const navigation = useNavigation();

   useEffect(() => {
      navigation.setOptions({headerBackTitle: "Atrás"});
   }, []);

   return (
      <View style={styles.globalMargin}>
         <Text style={styles.title}>Pagina 2 screen</Text>
         <Button
            title="Ir a página 3"
            onPress={() => navigation.navigate("Pagina3Screen") }
         />
      </View>
   )
}
