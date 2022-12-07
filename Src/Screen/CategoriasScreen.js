import { View, Text, StyleSheet, Button, Image, ImageBackground, FlatList } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import GridItem from "../Componentes/GridItem";
import img from '../../assets/Img/pelota.jpg'
import { useSelector, useDispatch, connect } from "react-redux";
import { selectedCategory } from "../Store/Acciones/Categoria.acciones";

// const CategoriasScreen = ({ navegacion }) => {
//   return (
//     <View style={styles.container}>
//       <Text>CategoriasScreen</Text>
//       <Button title='Entrar' onPress={() => navegacion.navigate("Detalles")}/>
//     </View>
//   )
// }
function CategoriasScreen() {

  const categorias = useSelector((state)=> state.categorias.categorias);
  const dispatch = useDispatch();

  const handleSelectedCategory = (item) => {
    dispatch(selectedCategory[item.id])
    navegacion.navigate("Molde", {
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
        data={categorias}
        keyExtractor={(item) => item.id}
        renderItem={renderGridItem}
      />
      
    </ImageBackground>
  );
}

export default connect() (CategoriasScreen)

