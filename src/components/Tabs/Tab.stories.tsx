import React from "react";
import { Story, Meta } from "@storybook/react";

import Tab, { TabProps } from "./Tab";

export default {
  title: "Tab",
  component: Tab,
} as Meta;

const Template: Story<TabProps> = (args) => <Tab {...args} />;

export const Tab1 = Template.bind({});

Tab1.args = {
  label: "Tab1",
};

export const Tab2 = Template.bind({});
Tab2.args = {
  label: "Tab2",
};
