import { StyleSheet } from "react-native";

const headerStyles = StyleSheet.create({
  container: {
    width: "100%",
    position: "absolute",
    flex: 1,
  },
  image: {
    width: "100%",
    height: 279,
    resizeMode: "cover",
    left: 0,
  },
  textTitle: {
    color: "#fff",
    textAlign: "center",
    fontSize: 32,
    top: 36,
    fontFamily: "monospace",
  },
  textSlogan: {
    color: "#fff",
    textAlign: "center",
    top: 40,
  },
  slider: {
    aspectRatio: 1 / 2,
    width: "100%",
    height: 279,
  },
});

export default headerStyles;
