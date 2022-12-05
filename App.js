import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { useFonts } from "expo-font";
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
