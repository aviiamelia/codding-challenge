import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../../components/Header/index";

describe("header component", () => {
  test("should be able to render header component", () => {
    render(<Header />);
    expect(screen.getByTestId("headerContainer")).toBeTruthy();
  });
});
