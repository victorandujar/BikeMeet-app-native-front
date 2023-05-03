import {
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";
import styles from "./LoginFormStyled";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faStrava, faGoogle } from "@fortawesome/free-brands-svg-icons";

const LoginForm = (): JSX.Element => (
  <TouchableWithoutFeedback>
    <View style={styles.container}>
      <View style={styles.field}>
        <Text style={styles.label}>Email adress</Text>
        <TextInput
          placeholder="Enter a valid email"
          style={styles.input}
          autoCorrect
        />
      </View>
      <View style={styles.field}>
        <Text style={styles.label}>Password</Text>
        <TextInput placeholder="Password" style={styles.input} autoCorrect />
      </View>
      <TouchableOpacity
        accessibilityLabel="Press to log in"
        style={styles.button}
      >
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>
      <Text style={styles.separator}>OR</Text>
      <TouchableOpacity
        accessibilityLabel="Press to log in with google"
        style={styles.button}
      >
        <View style={styles.externalLogin}>
          <FontAwesomeIcon icon={faGoogle} style={styles.google} size={25} />
          <Text style={styles.buttonText}>Log in with Google</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        accessibilityLabel="Press to log in with strava"
        style={styles.button}
      >
        <View style={styles.externalLogin}>
          <FontAwesomeIcon icon={faStrava} style={styles.strava} size={25} />
          <Text style={styles.buttonText}>Log in with Strava</Text>
        </View>
      </TouchableOpacity>
    </View>
  </TouchableWithoutFeedback>
);

export default LoginForm;
