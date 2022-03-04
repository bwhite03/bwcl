import React from "react";
import { render, screen } from "@testing-library/react";
import Columns from "./Columns";
import userEvent from "@testing-library/user-event";

const testData = [
  {
    id: 1,
    storeName: "IGA 001",
    storeNumber: "001",
    termCount: 3,
  },
  {
    id: 2,
    storeName: "IGA 002",
    storeNumber: "002",
    termCount: 4,
  },
  {
    id: 3,
    storeName: "IGA 003",
    storeNumber: "003",
    termCount: 6,
  },
];

const headers = [
  {
    columnName: "id",
    title: "ID",
    visible: true,
    style: {
      textAlign: "center",
    },
  },
  {
    columnName: "storeName",
    title: "Name",
    style: {
      textAlign: "left",
    },
  },
  {
    columnName: "storeNumber",
    title: "#",
    style: {
      textAlign: "center",
    },
  },
  {
    columnName: "termCount",
    title: "Terms",
    style: {
      textAlign: "center",
    },
    visible: false,
  },
];

const header = {
  columnName: "id",
  title: "ID",
  visible: true,
  style: {
    textAlign: "center",
  },
};

describe("Columns", () => {
  test("should render correctly", () => {
    const testFn = jest.fn;
    document.body.innerHTML = '<div id="col-1"></div>';
    const frag = render(
      <Columns
        open={true}
        divId="col-1"
        headers={headers as unknown as string[]}
        checkedColumns={[]}
        handleCheckClick={testFn}
        // @ts-ignore
        header={header}
        identifier={"testid"}
        data={testData}
      />
    );

    expect(frag).toMatchSnapshot();
  });
  test("should allow a header to be clicked", () => {
    const testFn = jest.fn;
    document.body.innerHTML = '<div id="col-1"></div>';
    const frag = render(
      <Columns
        open={true}
        divId="col-1"
        headers={headers as unknown as string[]}
        checkedColumns={[]}
        handleCheckClick={testFn}
        // @ts-ignore
        header={header}
        identifier={"testid"}
        data={testData}
      />
    );

    const check: HTMLInputElement = screen.getByTestId(
      "mikto-table-check-testid-1"
    );
    userEvent.click(check);
    expect(check.checked).toBeTruthy();
  });
  test("should test if a column is already checked", () => {
    const testFn = jest.fn;
    document.body.innerHTML = '<div id="col-1"></div>';
    const frag = render(
      <Columns
        open={true}
        divId="col-1"
        headers={headers as unknown as string[]}
        checkedColumns={["ID"]}
        handleCheckClick={testFn}
        // @ts-ignore
        header={header}
        identifier={"testid"}
        data={testData}
      />
    );
  });
  test("should test if a column is already checked but does not have visible as an attribute", () => {
    const testFn = jest.fn;
    document.body.innerHTML = '<div id="col-1"></div>';
    const frag = render(
      <Columns
        open={true}
        divId="col-1"
        headers={headers as unknown as string[]}
        checkedColumns={["Name"]}
        handleCheckClick={testFn}
        // @ts-ignore
        header={header}
        identifier={"testid"}
        data={testData}
      />
    );
  });
});
