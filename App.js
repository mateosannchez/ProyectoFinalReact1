import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import Header from "./Componentes/Header";
import GameScreen from "./Screen/GameScreen";
import StartGameScreen from "./Screen/StartGameScreen";
import { useFonts } from "expo-font";
import ResultScreen from "./Screen/ResultScreen";
import Modal from "./Componentes/Modal";
import Colores from './Constantes/Colores';
import ShopNavegacion from './Src/navegacion/ShopNavegacion';
import BotonTabNav from './Src/navegacion/BotonTabNav';


export default function App() {

  const [loaded] = useFonts({
    WorkSans: require("./Src/assets/Fonts/WorkSans-Black.ttf"),
  });

  // if (!loaded) {
  //   return null;
  // }

  return <BotonTabNav/>;
}

const styles = StyleSheet.create({
 
});
