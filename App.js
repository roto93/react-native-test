import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Article from './src/components/Article';

export default function App() {
  const [color, setColor] = useState();
  return (
    <View style={styles.container}>
      <TouchableOpacity testID="btn-blue" style={styles.TO}
        onPress={() => { setColor('lightblue') }}>
        <Text>blue</Text>
      </TouchableOpacity>
      <TouchableOpacity testID="btn-tomato" style={styles.TO}
        onPress={() => { setColor('tomato') }}>
        <Text>tomato</Text>
      </TouchableOpacity>
      <Article color={color} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TO: {
    borderWidth: 1,
    width: 120,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  t: {
    color: 'lightblue',
  }
});
