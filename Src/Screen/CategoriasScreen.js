import { View, Text, StyleSheet, Button, Image, ImageBackground, FlatList } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { CATEGORIAS } from "../Data/Categorias";
import GridItem from "../Componentes/GridItem";
import img from '../../assets/Img/pelota.jpg'


// const CategoriasScreen = ({ navegacion }) => {
//   return (
//     <View style={styles.container}>
//       <Text>CategoriasScreen</Text>
//       <Button title='Entrar' onPress={() => navegacion.navigate("Detalles")}/>
//     </View>
//   )
// }
function CategoriasScreen() {
  const handleSelectedCategory = (item) => {
    navegacion.navigate("Molde", {
      categoryID: item.id,
      name: item.titulo,
    });
  };
  const navegacion = useNavigation();

  const renderGridItem = ({ item }) => (
    <GridItem item={item} onSelected={handleSelectedCategory} />
  );
 
  return (
    <ImageBackground source={img} resizeMode="cover" style={{ height: "100%" }}>

      <FlatList
        data={CATEGORIAS}
        keyExtractor={(item) => item.id}
        renderItem={renderGridItem}
      />
      
    </ImageBackground>
  );
}

export default CategoriasScreen

