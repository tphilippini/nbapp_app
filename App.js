import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import List from './components/List';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='dark' />
      <Text style={styles.title}>Résultats de la nuit</Text>
      <List />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2C2839",
    backgroundColor: "#E8EAED",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    // color: "#fff",
    paddingTop: 30,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
});
