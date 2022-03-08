import { render } from "@testing-library/react";

import { generateToastId, getToastContainerPosition } from "./fns";

describe("fns", () => {
  test("should generate a test id", () => {
    const id = generateToastId();
    expect(id.length > 0).toBeTruthy();
  });

  test("should get top-right position", () => {
    const pos = getToastContainerPosition("top-right");
    expect(pos).toEqual("position: fixed; top: 10px; right: 10px");
  });

  test("should get top-center position", () => {
    const pos = getToastContainerPosition("top-center");
    expect(pos).toEqual("position: fixed; top: 10px; left: 50%");
  });
});
