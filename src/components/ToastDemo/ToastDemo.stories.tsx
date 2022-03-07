import React from "react";
import { Story, Meta } from "@storybook/react";
import ToastDemo from "./ToastDemo";

export default {
  title: "Toast Demo",
  component: ToastDemo,
} as Meta;

const Template: Story = (args) => <ToastDemo {...args} />;

export const ToastDemoExample = Template.bind({});
