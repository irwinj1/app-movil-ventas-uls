import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import { HomeScreen } from '../screens/HomeScreen'
import { ProductScreen } from '../screens/ProductScreen';

const Tabs = createBottomTabNavigator()
export default function BotomTabsNavigator() {
  return (
   <Tabs.Navigator>
    <Tabs.Screen name='Inicio' component={HomeScreen} />
    <Tabs.Screen name='Productos' component={ProductScreen} />
   </Tabs.Navigator>
  )
}
