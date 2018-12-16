import './config/Reactotronconfig';
import './config/DevToolsConfig';

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const bgColor = '#F5FCFF';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: bgColor,
  },
});

const App = () => (
  <View style={styles.container}>
    <Text style={styles.welcome}>Welcome to React Native!</Text>
    <Text style={styles.instructions}>To get started, edit App.js</Text>
  </View>
);

export default App;
