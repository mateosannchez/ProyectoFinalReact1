import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const BreadItem = ({ item, onSelected }) => {
  return (
    <TouchableOpacity onPress={() => onSelected(item)}>
      <View style={styles.breadItem}>
        <View>
            <Image></Image>
        </View>
        <View>
          <Text style={styles.title}>{item.nombre}</Text>
        </View>
        <View>
          <Text style={styles.details}>{item.nacionalidad}</Text>
          <Text style={styles.details}>{item.trayectoria}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default BreadItem;

const styles = StyleSheet.create({
  breadItem: {
    padding: 20,
    margin: 10,
    borderRadius: 3,
    backgroundColor: "#ccc",
  },
  title: {
    fontSize: 20,
    
  },
  details: {
    fontSize: 18,
  },
});