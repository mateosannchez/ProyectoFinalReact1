import { View, Text, StyleSheet, Button, FlatList, ImageBackground } from 'react-native'
import React from 'react';
import BreadItem from "../Componentes/BreadItem";
import { MOLDE } from "../Data/Molde";
import img from '../../assets/Img/nazario.jpg'

import { useSelector, useDispatch, connect } from "react-redux";
import { filteredBread, selectBread } from "../Store/Acciones/Bread.action";

const MoldeCategorias = ({ navegacion, route }) => {

  const dispatch = useDispatch();
  const MoldeCategoria = useSelector((state) => state.breads.filteredBread);
  const categoria = useSelector((state) => state.categoria.selected);

  useEffect(() => {
    dispatch(filteredBread(categoria.id));
  }, []);

  // const moldes = MOLDE.filter(
  //   (molde) => molde.categoria === route.params.categoriaID
  // );

  const handleSelectedCategory = (item) => {
    dispatch(selectBread(item.id));
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
        data={categoryBreads}
        keyExtractor={(item) => item.id}
        renderItem={renderBreadItem}
      />
    </ImageBackground>
  )
}

export default connect()(MoldeCategorias)

const styles = StyleSheet.create({

})