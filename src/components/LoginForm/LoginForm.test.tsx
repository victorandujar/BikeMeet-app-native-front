import LoginForm from "./LoginForm";
import React from "react";
import { screen, render } from "@testing-library/react-native";

describe("Given a LoginForm component", () => {
  describe("When it is rendered", () => {
    test("Then it should show an input with the text 'Enter a valid email' and an input with the text 'Password'", () => {
      const emailPlacholderText = "Enter a valid email";
      const passowrdPlacholderText = "Password";

      render(<LoginForm />);

      const expectedEmailInput =
        screen.getByPlaceholderText(emailPlacholderText);
      const expectedPasswordInput = screen.getByPlaceholderText(
        passowrdPlacholderText
      );

      expect(expectedEmailInput).toBeOnTheScreen();
      expect(expectedPasswordInput).toBeOnTheScreen();
    });

    test("Then it should show a button with the text 'Log in'", () => {
      const loginText = "Log in";

      render(<LoginForm />);

      const expectedButton = screen.getByText(loginText);

      expect(expectedButton).toBeOnTheScreen();
    });
  });
});
