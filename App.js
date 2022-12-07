import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { useFonts } from "expo-font";
import BotonTabNav from './Src/navegacion/BotonTabNav';
import { Provider } from 'react-redux';
import Store from './Src/Store';

export default function App() {

  const [loaded] = useFonts({
    WorkSans: require("./Src/assets/Fonts/WorkSans-Black.ttf"),
  });

  // if (!loaded) {
  //   return null;
  // }

  return (
    <Provider store={Store}>

      <BotonTabNav/>
    </Provider>
    ) 
}

const styles = StyleSheet.create({
 
});
