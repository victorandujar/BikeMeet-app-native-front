import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 2,
    padding: 10,
    borderRadius: 37,
    width: "100%",
    fontFamily: "monospace",
    paddingLeft: 20,
  },
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
  field: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  button: {
    width: "100%",
    height: 45,
    backgroundColor: "#000",
    borderRadius: 37,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 15,
    fontFamily: "monospace",
    fontWeight: "bold",
    height: 45,
  },
  label: {
    fontFamily: "monospace",
    fontWeight: "bold",
    fontSize: 12,
  },
  separator: {
    textAlign: "center",
    fontFamily: "monospace",
    fontWeight: "bold",
  },
  strava: {
    color: "orange",
  },
  externalLogin: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    height: 45,
  },
  google: {
    color: "#fff",
  },
});

export default styles;
