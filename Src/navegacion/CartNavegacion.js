import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import Colores from "../../Constantes";
import CartScreen from "../Screen/CartScreen";

const Stack = createNativeStackNavigator();

export default CartNavigator = () => {
  return (
   
        <Stack.Navigator
                initialRouteName="Categorias"
                screenOptions={{
                    headerStyle: { backgroundColor: "#777777"},
                    headerTintColor: '#0E0DD3',
                    headerTitleStyle: {
                    fontWeight: "bold",
                    },
                }}
            >
        <Stack.Screen
            name="Cart"
            component={CartScreen}
            options={{ title: "Me gusta" }}
        />
        </Stack.Navigator>

    
  );
};