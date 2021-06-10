import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system'

export default function App() {
  const [imageUri, setImageUri] = useState(null);
  const openImagePicker = async () => {
    try {
      const response = await ImagePicker.launchImageLibraryAsync({ allowsEditing: true, quality: 0.5 })
      console.log(response)
      if (response.uri) {
        setImageUri(response.uri)
        await FileSystem.copyAsync({ from: response.uri, to: FileSystem.documentDirectory + 'test/test.jpg' })
        console.log(FileSystem.documentDirectory)
      }
    } catch (e) { alert(e) }
  }
  const openCamera = async () => {
    const response = await ImagePicker.launchCameraAsync()
    console.log(response)
  }


  return (
    <View style={styles.container}>
      <Button title="open image" onPress={openImagePicker} />
      {imageUri && <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />}
      <Button title="open camera" onPress={openCamera} />
    </View>
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
