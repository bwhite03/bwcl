import React from "react";
import { Story, Meta } from "@storybook/react";

import RippleButton, { RippleButtonProps } from "./RippleButton";

export default {
  title: "Buttons/RippleButton",
  components: RippleButton,
} as Meta;

const Template: Story<RippleButtonProps> = (args) => <RippleButton {...args} />;
export const RippleButtonExample = Template.bind({});
RippleButtonExample.args = {
  text: "Click Me",
};
