import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MoldeCategorias from "../Screen/MoldeCategorias";
import MoldeDetalles from "../Screen/MoldeDetalles";
import CategoriasScreen from "../Screen/CategoriasScreen";
import Colores from "../../Constantes/Colores";


const stack = createNativeStackNavigator();

export default shopNavegacion = () => {
    return (
        
            <stack.Navigator initialRouteName="Mejores jugadores por décadas" screenOptions={{
                headerStyle: { backgroundColor: "#777777" },
                headerTitleAlign: "center",
                headerTintColor: "white",
                headerTitleStyle: {
                    fontWeight: "bold"
                },
            }}>
                <stack.Screen name=" Mejores jugadores por décadas" component={CategoriasScreen} options={{
                    title: "Mejores jugadores por décadas"
                }} />
                <stack.Screen name="Mejores de los '80" component={MoldeDetalles} options={({ route }) => ({
                    title: route.params.name,
                })} />
                <stack.Screen name="Molde" component={MoldeCategorias} options={({ route }) => ({
                    title: route.params.name,
                })} />
            </stack.Navigator>
        
    )
}