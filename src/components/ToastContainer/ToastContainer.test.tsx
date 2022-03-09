import React from "react";
import { render } from "@testing-library/react";
import ToastContainer from "./ToastContainer";

describe("ToastContainer", () => {
  test("should render correctly", () => {
    const { container } = render(<ToastContainer position="top-right" />);
    expect(container).toMatchSnapshot;
  });
});
