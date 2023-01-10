import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { useFonts } from "expo-font";
import BotonTabNav from './src/navegacion/BotonTabNav';
import { Provider } from 'react-redux';
import Store from './src/Store';
import MainNavegacion from "./src/navegacion"

import init from "./src/db/Index"

init()
  .then(() => console.log("Database initialized"))
  .catch((err) => {
    console.log("Data base fail connect");
    console.log(err.message);
  });
  
export default function App() {


  const [loaded] = useFonts({
    WorkSans: require("./src/assets/Fonts/WorkSans-Black.ttf"),
  });

  // if (!loaded) {
  //   return null;
  // }

  return (
    <Provider store={Store}>

      <MainNavegacion />
    </Provider>
  )
}

const styles = StyleSheet.create({

});
