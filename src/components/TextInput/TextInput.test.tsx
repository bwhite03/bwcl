import React from "react";
import TextInput from "./TextInput";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

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

  test("should get an error", () => {
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
        error="You got an error"
      />
    );

    const div: HTMLInputElement = screen.getByTestId("alert");
    expect(div.innerHTML).toEqual("You got an error");
  });

  test("should render the correct value", () => {
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
        error="error"
      />
    );

    const input: HTMLInputElement = screen.getByRole("textbox", {
      name: /test/i,
    });

    expect(input.value).toEqual("test");
  });

  test("should not render an error", () => {
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
        error=""
      />
    );

    let div = null;
    try {
      div = screen.getByTestId("alert");
    } catch {}
    expect(div).toBeNull();
  });
});
