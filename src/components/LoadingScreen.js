import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const LoadingScreen = props => (
  <View style={styles.container}>
    <Text style={styles.title}>
      Loading..
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center' },
  title: { fontSize: 20, textAlign: 'center' },
});

export default LoadingScreen;
