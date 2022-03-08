import React from "react";
import { render } from "@testing-library/react";
import Toast from "./Toast";

describe("Toast", () => {
  test("it should render correctly", () => {
    const { container } = render(
      <Toast
        content={"Here is my toast"}
        toastId={"123"}
        type={"success"}
        position={"top-right"}
      />
    );

    expect(container).toMatchSnapshot();
  });
});
