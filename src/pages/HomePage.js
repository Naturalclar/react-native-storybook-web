// @flow
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: { flex: 1 }
});

const HomePage = () => (
  <View style={styles.container}>
    <Text>Hello World</Text>
  </View>
);

export default HomePage;
