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

export const ToastDemoZoom = Template.bind({});
ToastDemoZoom.args = {
  position: "top-right",
  animation: "zoom",
};

export const ToastDemoFlip = Template.bind({});
ToastDemoFlip.args = {
  position: "top-right",
  animation: "flip",
};

export const ToastDemoBounce = Template.bind({});
ToastDemoBounce.args = {
  position: "top-right",
  animation: "bounce",
};

export const ToastDemoSpin = Template.bind({});
ToastDemoSpin.args = {
  position: "top-right",
  animation: "spin",
};
