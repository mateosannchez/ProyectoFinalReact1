import { View, Text, StyleSheet, Button, FlatList, ImageBackground } from 'react-native'
import React from 'react';
import Colores from '../../Constantes/Colores';
import BreadItem from "../Componentes/BreadItem";
import { MOLDE } from "../Data/Molde";
import img from '../../assets/Img/nazario.jpg'

const MoldeCategorias = ({ navegacion, route }) => {

  const moldes = MOLDE.filter(
    (molde) => molde.categoria === route.params.categoriaID
  );

  const handleSelectedCategory = (item) => {
    navegacion.navigate("Mejores de los '80", {
      productID: item.id,
      name: item.nombre,
    });
  };

  const renderBreadItem = ({ item }) => (
    <BreadItem item={item} onSelected={handleSelectedCategory} />
  );

  return (
    <ImageBackground source={img} resizeMode="cover" style={{ height: "100%" }}>

      <FlatList
        data={moldes}
        keyExtractor={(item) => item.id}
        renderItem={renderBreadItem}
      />
    </ImageBackground>
  )
}

export default MoldeCategorias

const styles = StyleSheet.create({

})