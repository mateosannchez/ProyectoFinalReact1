import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Component } from "react";
import Colores from "../../Constantes/Colores";
import OrdenScreen from "../Screen/OrdenScreen";


const stack = createNativeStackNavigator();

export default shopNavegacion = () => {
    return (
        
            <stack.Navigator initialRouteName="Orden" screenOptions={{
                headerStyle: { backgroundColor: "#777777" },
                headerTitleAlign: "center",
                headerTintColor: "white",
                headerTitleStyle: {
                    fontWeight: "bold"
                },
            }}>
                <stack.Screen name="Orden" component={OrdenScreen} options={{
                    title: "Orden",
                    
                }} />
               
            </stack.Navigator>
        
    )
}