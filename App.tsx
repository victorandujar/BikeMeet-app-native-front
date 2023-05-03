import { StyleSheet, View } from "react-native";
import React from "react";
import Header from "./src/components/Header/Header";
import LoginForm from "./src/components/LoginForm/LoginForm";
import globalStyles from "./src/styles/globalStyles";

const App = (): JSX.Element => (
  <View style={styles.container}>
    <Header />
    <View style={globalStyles.screen}>
      <LoginForm />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    gap: 300,
    backgroundColor: "#fff",
  },
});

export default App;
