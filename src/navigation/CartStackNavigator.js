import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { CartScreen } from "../screens/CartScreen";

const CartStack = createStackNavigator();
export function CartStackNavigator() {
  return (
    <CartStack.Navigator>
      <CartStack.Screen
        name="Carrito"
        component={CartScreen}
        options={{
          headerShown: false, // O true si quieres encabezado
          title: "Carrito",
        }}
      />
      {/* <CartStack.Screen name="Orders" component={OrdersScreen} />
    <CartStack.Screen name="Profile" component={ProfileScreen} /> */}
    </CartStack.Navigator>
  );
}
