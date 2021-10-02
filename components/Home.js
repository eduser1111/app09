import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
 
export default () => {
  return (
    <View style={styles.container}>
      <Text>Tartalom</Text>
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