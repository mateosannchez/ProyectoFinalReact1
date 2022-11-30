import { StyleSheet, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from '@expo/vector-icons/Ionicons';
import ShopNavegacion from "./ShopNavegacion";
import CartNavegacion from "./CartNavegacion";

const BottomTabs = createBottomTabNavigator();

export default BotonTabNav = () => {
  return (
    <NavigationContainer>
      <BottomTabs.Navigator
        initialRouteName="ShopTab"
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: styles.tabBar,
        }}
      >
        <BottomTabs.Screen
          name="ShopTab"
          component={ShopNavegacion}
          options={{
            tabBarIcon: ({ focus }) => (
              <View style={styles.item}>
                <Ionicons name="home" size={20} color='black'/>
                <Text>Inicio</Text>
              </View>
            ),
          }}
        />
        <BottomTabs.Screen
          name="CartTab"
          component={CartNavegacion}
          options={{
            tabBarIcon: ({ focus }) => (
              <View style={styles.item}>
                <Ionicons name="heart" size={20} color='black'/>
                <Text>Me gusta</Text>
              </View>
            ),
          }}
        />
      </BottomTabs.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    shadowColor: "#7f5df0",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 0.5,
    elevation: 1,
    position: "absolute",
    bottom: 10,
    left: 20,
    right: 20,
    borderRadius: 15,
    height: 70,
  },
  item: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});