import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState, useEffect } from "react";
import Card from "../Componentes/Card";
import win from "../assets/Img/172-1725252_transparent-you-win-png-transparent-you-win-text.png";
import lose from "../assets/Img/lose.png";

const ResultScreen = ({ result }) => {
  const [image, setImage] = useState("");

  useEffect(() => {
    handleImage();
  }, []);

  const handleImage = () => {
    if (result === "win") {
      setImage(win);
      return;
    }
    setImage(lose);
  };

  return (
    <View style={styles.container}>
      <Card>
        <Text>{`you ${result}`}</Text>
      </Card>
      <Image style={styles.imageContainer} source={image} />
    </View>
  );
};

export default ResultScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    height: 320,
    width: 320,
    marginTop: 50,
  },
});