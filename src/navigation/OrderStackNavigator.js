import { createStackNavigator } from "@react-navigation/stack";
import { OrdersScreen } from "../screens/OrdersScreen";

const Stack = createStackNavigator();

export function OrderStackNavigator() {
    return (
        <Stack.Navigator>
        <Stack.Screen 
        name="Ordenes" 
        component={OrdersScreen} 
        options={{ 
          headerShown: false,  // O true si quieres encabezado
          title: "Órdenes" 
        }} 
      />
       
        </Stack.Navigator>
    );
}