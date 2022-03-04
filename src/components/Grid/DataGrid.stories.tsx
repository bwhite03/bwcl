import React from "react";
import { Story, Meta } from "@storybook/react";

import DataGrid, { TableProps } from "./DataGrid";

const testData = [
  {
    id: 1,
    storeName: "IGA 001",
    storeNumber: "001",
    termCount: 3,
    image: {
      url: "https://www.datacashreg.com/DMS/_images/pinpadlogos/l5300.png",
      name: "l5300",
      height: "20",
      width: "30",
    },
  },
  {
    id: 2,
    storeName: "IGA 002",
    storeNumber: "002",
    termCount: 4,
    image: {
      url: "https://www.datacashreg.com/DMS/_images/pinpadlogos/l5300.png",
      name: "l5300",
      height: "20",
      width: "30",
    },
  },
  {
    id: 3,
    storeName: "IGA 003",
    storeNumber: "003",
    termCount: 6,
    image: {
      url: "https://www.datacashreg.com/DMS/_images/pinpadlogos/l5300.png",
      name: "l5300",
      height: "20",
      width: "30",
    },
  },
];

const image = (img: any) => {
  console.log("custom renderer");
  return (
    <img
      alt={`${img.storeNumber}`}
      src={`${img.src}`}
      width={`${img.width}`}
      height={`${img.height}`}
    />
  );
};

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
  {
    columnName: "image",
    title: "Img",
    customRenderer: image,
  },
];

export default {
  title: "Grid",
  component: DataGrid,
} as Meta;

const Template =
  <T extends {}>(): Story<TableProps<T>> =>
  (args) =>
    <DataGrid<T> {...args} />;

export const GridExample = Template<object>().bind({});
// @ts-ignore
GridExample.args = {
  data: testData,
  identifier: "grid1",
  // @ts-ignore
  headers: headers,
  style: { color: "slateblue", marginTop: "300px" },
};
