import React from "react";
import { render, screen } from "@testing-library/react";
import CardCart from "../../components/CardCart/index";

describe("CardCart component", () => {
  test("should be able to render an Card", () => {
    render(<CardCart name="salad" quantity={2} price={500} />);
    expect(screen.getByTestId("Cart-card-element")).toBeTruthy();
  });
});
