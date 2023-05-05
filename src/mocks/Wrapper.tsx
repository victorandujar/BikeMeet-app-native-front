import { Provider } from "react-redux";
import { store } from "../store/store";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";

interface WrapperProps {
  children: JSX.Element | JSX.Element[];
}

const Wrapper = ({ children }: WrapperProps): JSX.Element => (
  <Provider store={store}>
    <NavigationContainer>{children}</NavigationContainer>
  </Provider>
);

export default Wrapper;
