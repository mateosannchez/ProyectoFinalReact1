import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Colores from "../../Constantes/Colores";
import AuthScreen from "../Screen/AuthScreen";

const Stack = createNativeStackNavigator();

export default CartNavigator = () => {
  return (
   
        <Stack.Navigator
                initialRouteName="Jugadores"
                screenOptions={{
                    headerStyle: { backgroundColor: "#777777"},
                    headerTintColor: Colores.white,
                    headerTitleStyle: {
                    fontWeight: "bold",
                    },
                    headerTitleAlign: "center"
                }}
            >
        <Stack.Screen
            name="Acceder"
            component={AuthScreen}
           
        />
        </Stack.Navigator>

    
  );
};