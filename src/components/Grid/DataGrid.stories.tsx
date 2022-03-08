import React from "react";
import { Story, Meta } from "@storybook/react";

import DataGrid, { TableProps } from "./DataGrid";

const testData = [
  {
    id: 1,
    storeName: "IGA 001",
    storeNumber: "001",
    termCount: 3,
    active: true,
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
    active: false,
    image: {
      url: "https://www.datacashreg.com/DMS/_images/pinpadlogos/l5300_3.png",
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
    active: true,
    image: {
      url: "https://www.datacashreg.com/DMS/_images/pinpadlogos/MX850.png",
      name: "l5300",
      height: "20",
      width: "30",
    },
  },
];

const renderers = {
  active: (i: any) => {
    console.log("i", i);
    return <input type="checkbox" checked={i.active} />;
  },
  image: (i: any) => {
    return (
      <img
        alt={`${i.title}`}
        src={i.image.url}
        height={i.image.height}
        width={i.image.width}
      />
    );
  },
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
      textAlign: "center",
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
  },
  {
    columnName: "active",
    title: "active",
    style: {
      textAlign: "center",
    },
  },
  {
    columnName: "image",
    title: "PinPad",
    style: {
      textAlign: "center",
    },
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
  style: { color: "slateblue" },
  customRenderers: renderers,
};
