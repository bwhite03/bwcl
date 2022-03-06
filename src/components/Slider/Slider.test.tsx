import React from "react";
import { render } from "@testing-library/react";
import Slider from "./Slider";

describe("Slider", () => {
  test("component renders correctly", () => {
    const testFn = jest.fn();
    const frag = render(
      <Slider
        id="test"
        name="test"
        onChange={testFn}
        min={1}
        max={10}
        step={2}
        value={4}
      />
    );
    expect(frag).toMatchSnapshot();
  });
});
