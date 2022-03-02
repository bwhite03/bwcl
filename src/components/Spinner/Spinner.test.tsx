import React from "react";
import { render } from "@testing-library/react";
import Spinner from "./Spinner";

describe("Spinner", () => {
  test("should render correctly", () => {
    const frag = render(<Spinner />);
    expect(frag).toMatchSnapshot();
  });
});
