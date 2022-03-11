import React from 'react';
import { Story, Meta } from '@storybook/react';
import ToolTip, { ToolTipProps } from './Tooltip';
import TooltipDemo, { ToolTipDemoProps } from './TooltipDemo';

export default {
  title: 'Tooltip',
  component: TooltipDemo,
  parameters: {
    layout: 'centered',
  },
} as Meta;

const Template: Story<ToolTipDemoProps> = (args) => <TooltipDemo {...args} />;
export const TooltipDemoExampleTop = Template.bind({});
TooltipDemoExampleTop.args = {
  position: 'top',
  message: 'top-demo',
};

export const TooltipDemoExampleBottom = Template.bind({});
TooltipDemoExampleBottom.args = {
  position: 'bottom',
  message: 'bottom-demo',
};

export const TooltipDemoExampleLeft = Template.bind({});
TooltipDemoExampleLeft.args = {
  position: 'left',
  message: 'left-demo',
};

export const TooltipDemoExampleRight = Template.bind({});
TooltipDemoExampleRight.args = {
  position: 'right',
  message: 'right-demo',
};
