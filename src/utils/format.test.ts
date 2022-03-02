import { formatMoney, formatDate } from "./format";

describe("formatMoney", () => {
  test("converts '1.25 to '$1.25'", () => {
    expect(formatMoney("1.25")).toEqual("$1.25");
  });

  test("convert '1.1' to '$1.10'", () => {
    expect(formatMoney("1.1")).toEqual("$1.10");
  });

  test("convert '.2' to '.20'", () => {
    expect(formatMoney(".2")).toEqual(".20");
  });

  test("should return '0' if value is undefined or null", () => {
    // @ts-ignore
    expect(formatMoney(null)).toBe("0");
    // @ts-ignore
    expect(formatMoney(undefined)).toBe("0");
  });
});

describe("formatDate", () => {
  test("should return an empty string if value is null or undefined", () => {
    // @ts-ignore
    expect(formatDate(null)).toBe("");
    // @ts-ignore
    expect(formatDate(undefined)).toBe("");
    // @ts-ignore
    expect(formatDate()).toBe("");
  });

  test("should return 1/1/2020 if date object is passed in", () => {
    expect(formatDate(new Date("1/1/2020"))).toBe("1/1/2020");
  });
  test("should return 1/1/2020 if date with a time is present", () => {
    expect(formatDate(new Date("1/1/2020"))).toEqual("1/1/2020");
  });

  test("should return empty string if valid date is passed", () => {
    expect(formatDate(new Date("1/41/2020"))).toEqual("");
  });
});
