import React from "react";
import { render, screen } from "@testing-library/react";
import SelectField from "./SelectField";

describe("SelectField", () => {
  test("component renders correctly", () => {
    const testFn = jest.fn();
    const fakeData = [
      {
        id: 1,
        name: "tim",
        age: 25,
      },
      {
        id: 2,
        name: "sally",
        age: 23,
      },
    ];
    const frag = render(
      <SelectField
        id="test"
        label="test"
        name="test"
        onChange={testFn}
        data={fakeData}
        displayField="name"
        valueField="id"
        emptyMsg="select a person"
      />
    );
    expect(frag).toMatchSnapshot();
  });

  test("should render with an error", () => {
    const testFn = jest.fn();
    const fakeData = [
      {
        id: 1,
        name: "tim",
        age: 25,
      },
      {
        id: 2,
        name: "sally",
        age: 23,
      },
    ];
    const frag = render(
      <SelectField
        id="test"
        label="test"
        name="test"
        onChange={testFn}
        data={fakeData}
        displayField="name"
        valueField="id"
        emptyMsg="select a person"
        error="error"
      />
    );
    expect(frag).toMatchSnapshot();
  });

  test("should render with an empty error", () => {
    const testFn = jest.fn();
    const fakeData = [
      {
        id: 1,
        name: "tim",
        age: 25,
      },
      {
        id: 2,
        name: "sally",
        age: 23,
      },
    ];
    const frag = render(
      <SelectField
        id="test"
        label="test"
        name="test"
        onChange={testFn}
        data={fakeData}
        displayField="name"
        valueField="id"
        emptyMsg="select a person"
        error=""
      />
    );
    expect(frag).toMatchSnapshot();
  });

  test("should render error message You got an error", () => {
    const testFn = jest.fn();
    const fakeData = [
      {
        id: 1,
        name: "tim",
        age: 25,
      },
      {
        id: 2,
        name: "sally",
        age: 23,
      },
    ];
    const frag = render(
      <SelectField
        id="test"
        label="test"
        name="test"
        onChange={testFn}
        data={fakeData}
        displayField="name"
        valueField="id"
        emptyMsg="select a person"
        error="You got an error"
      />
    );

    const div: HTMLDivElement = screen.getByTestId("alert");
    expect(div.innerHTML).toEqual("You got an error");
  });
});
