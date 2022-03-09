import React from "react";
import { render, fireEvent } from "@testing-library/react";
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

  test("should render without position", () => {
    const { container } = render(
      // @ts-ignore
      <Toast content={"Here is toast"} toastId={"123"} type={"success"} />
    );
    expect(container).toMatchSnapshot();
  });

  test("should show success icon", () => {
    const { container } = render(
      <Toast
        content={"Here is toast"}
        toastId={"123"}
        type={"success"}
        toastShowIcon={true}
        position="top-right"
        toastAnimation="slide"
      />
    );
    expect(container).toMatchSnapshot();
  });

  test("should show info icon", () => {
    const { container } = render(
      <Toast
        content={"Here is toast"}
        toastId={"123"}
        type={"info"}
        toastShowIcon={true}
        position="top-right"
        toastAnimation="slide"
      />
    );
    expect(container).toMatchSnapshot();
  });

  test("should show error icon", () => {
    const { container } = render(
      <Toast
        content={"Here is toast"}
        toastId={"123"}
        type={"error"}
        toastShowIcon={true}
        position="top-right"
        toastAnimation="slide"
      />
    );
    expect(container).toMatchSnapshot();
  });

  test("should show warning icon", () => {
    const { container } = render(
      <Toast
        content={"Here is toast"}
        toastId={"123"}
        type={"warning"}
        toastShowIcon={true}
        position="top-right"
        toastAnimation="slide"
      />
    );
    expect(container).toMatchSnapshot();
  });

  test("should handle removal of tosat", () => {
    const { container, getByRole } = render(
      <Toast
        content={"toast"}
        toastId={"123"}
        type={"warning"}
        position="top-right"
      />
    );

    const div = getByRole("main");
    fireEvent.click(div);
  });
});
