import React from "react";
import { render } from "@testing-library/react";

import { Icons } from "./Icons";

describe("Icons", () => {
  test("should render info", () => {
    const { info: Info } = Icons;
    const { container } = render(<Info theme="light" type="info" />);
    expect(container).toMatchSnapshot();
  });

  test("should render success", () => {
    const { success: Success } = Icons;
    const { container } = render(<Success theme="light" type="success" />);
    expect(container).toMatchSnapshot();
  });

  test("should render warning", () => {
    const { warning: Warning } = Icons;
    const { container } = render(<Warning theme="light" type="warning" />);
    expect(container).toMatchSnapshot();
  });

  test("should render error", () => {
    const { error: Error } = Icons;
    const { container } = render(<Error theme="light" type="error" />);
    expect(container).toMatchSnapshot();
  });

  test("should should render color", () => {
    const { error: Error } = Icons;
    const { container } = render(<Error theme="colored" type="error" />);
    expect(container).toMatchSnapshot();
  });
});
