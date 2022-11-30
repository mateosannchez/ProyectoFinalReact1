import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import  Colores  from "../../Constantes/Colores";
import CartScreen from "../Screen/CartScreen";

const Stack = createNativeStackNavigator();

export default CartNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator
                initialRouteName="Categorias"
                screenOptions={{
                    headerStyle: { backgroundColor: Colores.primary },
                    headerTintColor: Colores.secondary,
                    headerTitleStyle: {
                    fontWeight: "bold",
                    },
                }}
            >
        <Stack.Screen
            name="Cart"
            component={CartScreen}
            options={{ title: "Carrito" }}
        />
        </Stack.Navigator>

    </NavigationContainer>
  );
};