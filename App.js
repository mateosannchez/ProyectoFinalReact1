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

export default function App() {

  const [loaded] = useFonts({
    WorkSans: require("./Src/assets/Fonts/WorkSans-Black.ttf"),
  });

  //juego
  const [userNumber, setUserNumber] = useState();
  const [winOrLose, setWinOrLose] = useState(false);
  const [result, setResult] = useState("");

  const handleStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  const handleFinishGame = (selection, number) => {
    if (
      (selection === "lower" && userNumber < number) ||
      (selection === "greater" && userNumber > number)
    ) {
      setResult("win");
    } else {
      setResult("lose");
    }
    setWinOrLose(true);
  };

  let content = <StartGameScreen onStartGame={handleStartGame} />;

  if (userNumber && winOrLose === true) {
    content = <ResultScreen result={result} />
  } else if (userNumber) {
    content = <GameScreen handleResult={handleFinishGame} />;
  }

  // if (!loaded) {
  //   return null;
  // }

  //juego

  //shop
  const [textItem, setTextItem] = useState("");
  const [list, setList] = useState([]);

  const [modalVisible, setModalVisible] = useState(false);

  const [itemSelected, setItemSelected] = useState({});

  const onHandleChange = (t) => setTextItem(t);

  const addItem = () => {
    setList((currentState) => [
      ...currentState,
      { id: Math.random().toString(), value: textItem },
    ]);
    setTextItem("");
    
  };

  const selectedItem = (id) => {
    console.log(id);
    //setItemSelected(list.filter((item) => item.id === id)[0]);
    setItemSelected(list.find((item) => item.id === id));
    setModalVisible(true);
  };

  const deleteItem = () => {
    console.log(itemSelected);
    setList((currentState) =>
      currentState.filter((item) => item.id !== itemSelected.id)
    );
    setItemSelected({});
    setModalVisible(false);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => selectedItem(item.id)}>
      <Text>{item.value}</Text>
    </TouchableOpacity>
  );
  //shop

  return <ShopNavegacion/>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colores.primary,
    //backgroundImage: `url(${background})`,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputcontainer: {
    marginTop: 200,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 30,
  },
  inputStyle: {
    borderBottomColor: Colores.secondary,
    borderBottomWidth: 1,
    width: 200,

  },
  button: {
    backgroundColor: Colores.primary,
    height: 35,
    width: 85,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  listado: {
    margin: 20,
    fontSize: 50,
  }
});
