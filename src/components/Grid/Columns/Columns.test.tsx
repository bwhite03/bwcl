import React from "react";
import { render } from "@testing-library/react";
import Columns from "./Columns";

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
        headers={[]}
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
});
