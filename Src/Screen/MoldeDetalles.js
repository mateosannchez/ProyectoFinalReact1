import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addItem } from '../Store/Acciones/Cart.action';


const MoldeDetalles = () => {

  const molde = useSelector((state) => state.molde.selected)
  
  useEffect(() => {
    console.log(molde);
  }, []);

  const dispatch = useDispatch();

  const handlerAddItemCart = () => dispatch(addItem(molde));
  return (
    <View style={styles.container}>
      <View style={styles.screen}>
        <View>
          <Image>{molde.imagen}</Image>
        </View>
        <Text style={styles.title}>{molde.nombre}</Text>
        <Text style={styles.description}>{molde.nacionalidad}</Text>
        <Text style={styles.price}>{molde.trayectoria}</Text>
        <View style={styles.button}>
          <Button title="Agregar al carrito" onPress={handlerAddItemCart} />
        </View>
      </View>
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
    padding: 10,
  },
  screen: {
    flex: 0.9,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 25,
  },
  description: {
    fontSize: 20,
  },
  price: {
    fontSize: 40,
  },
  button: {
    marginTop: 15,
  },
 
})

