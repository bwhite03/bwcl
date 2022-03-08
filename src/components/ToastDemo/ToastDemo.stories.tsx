import React from "react";
import { Story, Meta } from "@storybook/react";
import ToastDemo, { ToastDemoProps } from "./ToastDemo";

export default {
  title: "Toast Demo",
  component: ToastDemo,
} as Meta;

const Template: Story<ToastDemoProps> = (args) => <ToastDemo {...args} />;

export const ToastDemoExampleTopRight = Template.bind({});

ToastDemoExampleTopRight.args = {
  position: "top-right",
};

export const ToastDemoExampleTopLeft = Template.bind({});
ToastDemoExampleTopLeft.args = {
  position: "top-left",
};

export const ToastDemoExampleTopCenter = Template.bind({});
ToastDemoExampleTopCenter.args = {
  position: "top-center",
};

export const ToastDemoExampleBottomCenter = Template.bind({});
ToastDemoExampleBottomCenter.args = {
  position: "bottom-center",
};
