import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import BarChartPage from './src/Screens/BarChartPage'
import HomePage from './src/Screens/HomePage';
import PieChartPage from './src/Screens/PieChartPage';

const Stack = createStackNavigator()

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={'Home'} component={HomePage} />
        <Stack.Screen name={'BarChart'} component={BarChartPage} />
        <Stack.Screen name={'PieChart'} component={PieChartPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App