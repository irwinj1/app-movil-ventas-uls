import { Button, Text } from '@rneui/themed';
import { useContext, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import BotomTabsNavigator from './src/navigation/BotomTabsNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { AuthNavigationScreen } from './src/navigation/AuthNavigationScreen';
import './gesture-handler';
import { AuthProvider,AuthContext } from './src/context/AuthContext';

const Navigation = ()=>{
  const {isLogin} = useContext(AuthContext);
  console.log(isLogin);
  return isLogin ?<BotomTabsNavigator />:<AuthNavigationScreen />
}
export default function App() {
  
  return (
    
    <AuthProvider >
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>  
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textCount:{
    fontSize:'100px',
    fontWeight:'bold'
  }
});
