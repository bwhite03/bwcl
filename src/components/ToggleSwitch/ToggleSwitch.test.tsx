import React from "react";
import ToggleSwitch from "./ToggleSwitch";
import { render, screen, fireEvent } from "@testing-library/react";

describe("ToggleSwitch", () => {
  test("should render", () => {
    const testFn = jest.fn();
    const frag = render(
      <ToggleSwitch id="t1" active={true} handleClick={testFn} />
    );
    expect(frag).toMatchSnapshot();
  });

  test("should handle click", () => {
    const testFn = jest.fn();
    render(<ToggleSwitch id="t1" active={true} handleClick={testFn} />);
    const check: HTMLInputElement = screen.getByTestId(
      "toggle-switch-checkbox-t1"
    );
    fireEvent.click(check);
    expect(check.checked).toBeTruthy();
  });
});
