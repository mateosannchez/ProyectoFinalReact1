import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import BreadItem from "../Componentes/BreadItem";
import { MOLDE } from "../Data/Molde";

const MoldeDetalles = () => {
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bread Category</Text>
    </View>
  )
}

export default MoldeDetalles

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDBF50",
    alignItems: "center",
    justifyContent: "center",
  },
 
})

