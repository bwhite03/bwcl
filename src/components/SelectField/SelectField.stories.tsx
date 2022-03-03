import React from "react";
import { Story, Meta } from "@storybook/react";
import SelectField, { SelectFieldProps } from "./SelectField";

const fakeData = [
  {
    id: 1,
    name: "tim",
    age: 25,
  },
  {
    id: 2,
    name: "sally",
    age: 23,
  },
];

export default {
  title: "Forms/Select",
  component: SelectField,
} as Meta;

const Template =
  <T extends {}>(): Story<SelectFieldProps<T>> =>
  (args) =>
    <SelectField<T> {...args} />;

export const SelectFieldExample = Template<object>().bind({});
SelectFieldExample.args = {
  id: "s1",
  label: "select a  State",
  name: "s1",
  data: fakeData,
  emptyMsg: "select a state",
  // @ts-ignore
  displayField: "name",
  value: "id",
};
