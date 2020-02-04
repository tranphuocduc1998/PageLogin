import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Screen from './screens/Screen';

export default function App() {
  return (
    <View style={styles.container}>
      <Screen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
