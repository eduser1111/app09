import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './components/Home';
import { navigation } from '@react-navigation/native';

export default function App() {
  function onHandler() {
    console.log('Valami történik');
    navigation.navigate('Home');
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tartalom</Text>
      <Text>Másik</Text>
      <Text onPress={onHandler}>Harmadik</Text>
      <StatusBar style="auto" />
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
  text: {
    fontSize: 32,
  }
});
