import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import Home from './pages/Home';
import About from './pages/About';

const Stack = createStackNavigator();

function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
}

export default () => {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <App />
    </NavigationContainer>
  )
}