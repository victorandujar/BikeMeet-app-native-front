import { StyleSheet, View } from "react-native";
import React from "react";
import Header from "./src/components/Header/Header";

const App = (): JSX.Element => (
  <View style={styles.container}>
    <Header />
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
});

export default App;
