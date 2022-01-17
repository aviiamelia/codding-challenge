import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "../../components/Button";

describe("button component", () => {
  test("should be able to render an button", () => {
    render(<Button text="Buy" disabled={false} />);
    expect(screen.getByText("Buy")).toBeTruthy();
  });
  test("Should be disbaled", () => {
    render(<Button text="Buy" disabled={true} />);
    expect(screen.getByText("Buy").closest("button")).toBeDisabled();
  });
});
