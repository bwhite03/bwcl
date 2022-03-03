import React from "react";
import { render, screen } from "@testing-library/react";

import DataGrid from "./DataGrid";

const testData = [
  { id: 1, storeName: "IGA 001", storeNumber: "001", termCount: 3 },
  { id: 2, storeName: "IGA 002", storeNumber: "002", termCount: 4 },
  { id: 3, storeName: "IGA 003", storeNumber: "003", termCount: 6 },
];

describe("Datagrid", () => {
  test("should render correctly", () => {
    const frag = render(
      <DataGrid
        data={testData}
        identifier={"grid1"}
        headers={[
          {
            columnName: "id",
            title: "id",
            visible: true,
            style: {
              textAlign: "center",
            },
          },
          {
            columnName: "storeName",
            title: "name",
            visible: true,
            style: {
              textAlign: "left",
            },
          },
        ]}
      />
    );

    expect(frag).toMatchSnapshot();
  });
});
