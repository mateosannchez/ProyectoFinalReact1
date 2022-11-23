import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colores from '../../Constantes/Colores'
import Card from '../../Componentes/Card'

const MoldeDetalles = () => {
  return (
    <View style={styles.container}>
      <Card newStyles={styles.card__inicio}>
          
            <View style={styles.card__inicioButton}>
              <Text style={{fontWeight:"bold"}}>Maradona</Text>

            </View>
            <View style={styles.card__inicioBack}>

              {/* <Button
                
                title='Entrar' onPress={() => navegacion.navigate("Mejores de los '80")}
              /> */}
            </View>

        </Card>

        <Card newStyles={styles.card__inicio}>
          
            <View style={styles.card__inicioButton}>
              <Text style={{fontWeight:"bold"}}>Schuter</Text>

            </View>
            <View style={styles.card__inicioBack}>

              {/* <Button
                
                title='Entrar' onPress={() => navegacion.navigate("Mejores de los '80")}
              /> */}
            </View>

        </Card>

      
    </View>
  )
}

export default MoldeDetalles

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colores.white,
        alignItems: "center",
        justifyContent: "center",

    },
    card__inicio: {
      flexDirection: "column",
      justifyContent: "flex-end",
      margin: 20,
      width: 350,
      height: 190,
      //backgroundColor: (0,0,0,1.8),
    },
})