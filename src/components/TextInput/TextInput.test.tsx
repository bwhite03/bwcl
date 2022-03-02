import React from "react";
import TextInput from "./TextInput";
import { render, screen, getByRole } from "@testing-library/react";

describe("TextInput", () => {
  test("should render correctly", () => {
    const testFn = jest.fn();
    const frag = render(
      <TextInput
        id="testId"
        name="test"
        value="test"
        placeholder="test"
        label="test"
        type="text"
        onChange={testFn}
      />
    );
    expect(frag).toMatchSnapshot();
  });
});
