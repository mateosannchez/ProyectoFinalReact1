import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from "react-native";
import img from '../../assets/Img/diego2.jpg'
import Colores from "../../Constantes/Colores";

const GridItem = ({ item, onSelected }) => {
  return (
    <View style={styles.gridITem}>
      <ImageBackground source={img} resizeMode="cover" style={{ height: "100%" }}>
        
          <TouchableOpacity
            style={{ ...styles.container, backgroundColor: item.color }}
            onPress={() => onSelected(item)}
          >
            <View style={styles.backCover}>
              <Text style={styles.titulo}>{item.titulo}</Text>
            </View>
          </TouchableOpacity>
        
      </ImageBackground>

    </View>
  );
};

export default GridItem;

const styles = StyleSheet.create({
  gridITem: {
    flex: 1,
    borderRadius: 6,
    margin: 15,
    height: 175,
    flexDirection: "column",


  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 8.5,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 8,
  },
  titulo: {
    backgroundColor: Colores.white,
    width: 330,
    //height: 30,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

  },
  backCover: {
    position: 'absolute',
    marginTop: 10,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 0.7,
    height: 20,
  }


});