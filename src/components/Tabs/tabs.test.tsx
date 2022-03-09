// @ts-nocheck
import React from "react";

import { render, fireEvent } from "@testing-library/react";
import Tabs from "./Tabs";

describe("Tabs", () => {
  test("should render correctly", () => {
    const testFn = jest.fn();
    const { container } = render(
      <Tabs>
        <div label="tab1" name="tab1">
          <h2>Tab1</h2>
        </div>
        <div label="tab2" name="tab2">
          <h2>Tab2</h2>
        </div>
      </Tabs>
    );
    expect(container).toMatchSnapshot();
  });

  test("should handle click", () => {
    const testFn = jest.fn();
    const { container, getByRole } = render(
      <Tabs>
        <div label="tab1" name="tab1">
          <h2>Tab1</h2>
        </div>
        <div label="tab2" name="tab2">
          <h2>Tab2</h2>
        </div>
      </Tabs>
    );

    const tab = container.querySelector("div > div:nth-child(1)");
    // @ts-ignore
    fireEvent.click(tab);
  });
});
