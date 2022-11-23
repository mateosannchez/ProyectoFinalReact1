import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react';
import Colores from '../../Constantes/Colores';

const MoldeCategorias = ({ navegacion }) => {
  return (
    <View style={styles.container}>
      <Text>MoldeCategorias</Text>
      <Button title='Detalles' onPress={() => navegacion.navigate("Molde")}/>
    </View>
  )
}

export default MoldeCategorias

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colores.secondary,
        alignItems: "center",
        justifyContent: "center",

    }
})