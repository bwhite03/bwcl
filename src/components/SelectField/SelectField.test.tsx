import React from "react";
import { render } from "@testing-library/react";
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
});
