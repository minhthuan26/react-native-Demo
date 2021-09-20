import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Category from './src/category';

export default function App() {
  return (
    <View style={styles.container}>
      <Category name='Item 1' />
      <Category name='Item 2' />
      <Category name='Item 3' />
      <Category name='Item 4' />
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
    alignItems: 'stretch',
    paddingLeft: 16,
    paddingRight: 16
  },
});
