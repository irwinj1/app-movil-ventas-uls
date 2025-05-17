import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { OrderStackNavigator } from "./OrderStackNavigator";
import { Icon } from "@rneui/base";
import { CartStackNavigator } from "./CartStackNavigator";
import { ProfileStackNavigator } from "./ProfileStackNavigator";
import ProductStackNavigator from "./ProductStackNavigator";

const Tabs = createBottomTabNavigator();
export default function BotomTabsNavigator() {
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="Productos"
        component={ProductStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="shopping" type="material-community" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Ordenes"
        component={OrderStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon
              name="clipboard-list"
              type="material-community"
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Carrito"
        component={CartStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="cart" type="material-community" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Perfil"
        component={ProfileStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="account" type="material-community" color={color} />
          ),
        }}
      />
     
    </Tabs.Navigator>

  );
}
