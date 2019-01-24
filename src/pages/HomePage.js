// @flow
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Header } from "react-native-elements";

const styles = StyleSheet.create({
  container: { flex: 1 }
});

const HomePage = () => (
  <View style={styles.container}>
    <Header
      leftComponent={{ icon: "menu", color: "#fff" }}
      centerComponent={{ text: "MY TITLE", style: { color: "#fff" } }}
      rightComponent={{ icon: "home", color: "#fff" }}
    />
  </View>
);

export default HomePage;
