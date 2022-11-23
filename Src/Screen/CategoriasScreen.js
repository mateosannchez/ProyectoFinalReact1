import { View, Text, StyleSheet, Button, Image, ImageBackground } from 'react-native'
import React from 'react'
import Colores from '../../Constantes/Colores'
import { useNavigation } from '@react-navigation/native';
import Card from '../../Componentes/Card'
import img from '../../assets/Img/pelota.jpg'
import diego from '../../assets/Img/diego2.jpg'
import beckham from '../../assets/Img/beckhamport.jpg'
import { LinearGradient } from 'expo-linear-gradient';

// const CategoriasScreen = ({ navegacion }) => {
//   return (
//     <View style={styles.container}>
//       <Text>CategoriasScreen</Text>
//       <Button title='Entrar' onPress={() => navegacion.navigate("Detalles")}/>
//     </View>
//   )
// }
function CategoriasScreen() {
  const navegacion = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground source={img} resizeMode="cover" style={{ height: "100%" }}>

        <Card newStyles={styles.card__inicio}>
          <ImageBackground source={diego} resizeMode="cover" style={{ height: "100%", width: "100%", justifyContent: "center",alignItems:"center", position:"relative", }}>
            <View style={styles.card__inicioButton}>
              <Text style={{fontWeight:"bold"}}>Década '80</Text>

            </View>
            <View style={styles.card__inicioBack}>

              <Button
                
                title='Entrar' onPress={() => navegacion.navigate("Mejores de los '80")}
              />
            </View>

          </ImageBackground>
          

          

        </Card>

        <Card newStyles={styles.card__inicio}>
          <ImageBackground source={beckham} resizeMode="cover" style={{ height: "100%", width: "100%", justifyContent: "center",alignItems:"center", position:"relative", }}>
            <View style={styles.card__inicioButton}>
              <Text style={{fontWeight:"bold"}}>Década '90</Text>

            </View>
            <View style={styles.card__inicioBack}>

              <Button
                
                title='Entrar' onPress={() => navegacion.navigate("Mejores de los '80")}
              />
            </View>

          </ImageBackground>
          

          

        </Card>

      
      </ImageBackground>

    </View>
  );
}

export default CategoriasScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colores.primary,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  card__inicio: {
    flexDirection: "column",
    justifyContent: "flex-end",
    margin: 20,
    width: 350,
    height: 190,
    //backgroundColor: (0,0,0,1.8),
  },
  card__inicioBack: {
    color: "black",
    width: "100%",

  },
  card__inicioButton: {
    backgroundColor: "gray",
    width: 350, 
    flexDirection: "row", 
    alignItems: "center", 
    justifyContent: "center", 
    position:"relative",
    margin: 57,
    height: 40, 
    borderRadius: 10,
  }
})