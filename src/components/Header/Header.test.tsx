import { render, screen } from "@testing-library/react-native";
import Header from "./Header";
import React from "react";

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the text 'BikeMeet'", () => {
      const headerText = "BikeMeet";

      render(<Header />);

      const expectedText = screen.getByText(headerText);

      expect(expectedText).toBeOnTheScreen();
    });
  });
});
