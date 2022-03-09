import React from "react";

import { render, fireEvent } from "@testing-library/react";
import Tab from "./Tab";

describe("Tab", () => {
  test("should render correctly", () => {
    const testFn = jest.fn();
    const { container } = render(
      <Tab
        label="tab1"
        className="tab1"
        onClick={testFn}
        activeTab="tab1"
        id="tab1"
        disabled={false}
      />
    );
    expect(container).toMatchSnapshot();
  });

  test("should be active tab", () => {
    const testFn = jest.fn();
    const { container } = render(
      <Tab
        id="tab1"
        label="tab1"
        disabled={false}
        className="tab1"
        onClick={testFn}
        activeTab="tab1"
      />
    );
    expect(container).toMatchSnapshot();
  });

  test("should handle click", () => {
    const testFn = jest.fn();
    const { getByRole } = render(
      <Tab
        id="tab1"
        label="tab1"
        disabled={false}
        className="tab1"
        onClick={testFn}
        activeTab="tab1"
      />
    );

    const role = getByRole("listitem");
    fireEvent.click(role);
  });
});
