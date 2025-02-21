import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Archive() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Archive</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
}); 