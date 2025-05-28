import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ProductScreen } from "../screens/ProductScreen";
import { ProductDetailsComponent } from "../components/ProductsComponent/ProductDetailsComponent";
import { useNavigation } from "@react-navigation/native";
import { Button, Icon } from "@rneui/base";

const ProductStack = createStackNavigator();

export default function ProductStackNavigator() {
  const navigation = useNavigation()
  return (
    <ProductStack.Navigator>
      <ProductStack.Screen
        name="Products"
        component={ProductScreen}
        options={{
          
          title: "Productos",
          
        }}
      />
      <ProductStack.Screen
        name="ProductDetails"
        component={ProductDetailsComponent}
        options={{
         
          title: "Detalles del Producto",
          headerLeft: () => (
      <TouchableOpacity
        onPress={() => navigation.goBack()}     
      >
        <Icon type="material-community" name="chevron-left" />
      </TouchableOpacity>
    ),
        }}
      />
      {/* <ProductStack.Screen name="Orders" component={OrdersScreen} />
     <ProductStack.Screen name="Profile" component={ProfileScreen} /> */}
    </ProductStack.Navigator>
  );
}
