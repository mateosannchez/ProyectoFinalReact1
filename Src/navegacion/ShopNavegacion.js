import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MoldeCategorias from "../Screen/MoldeCategorias";
import MoldeDetalles from "../Screen/MoldeDetalles";
import CategoriasScreen from "../Screen/CategoriasScreen";

const stack = createNativeStackNavigator();

export default shopNavegacion = () => {
    return(
        <NavigationContainer>
            <stack.Navigator>
                <stack.Screen name=" Mejores jugadores por décadas"  component={CategoriasScreen}/>
                <stack.Screen name="Mejores de los '80" component={MoldeDetalles}/>
                <stack.Screen name="Molde" component={MoldeCategorias}/>
            </stack.Navigator>
        </NavigationContainer>
    )
}