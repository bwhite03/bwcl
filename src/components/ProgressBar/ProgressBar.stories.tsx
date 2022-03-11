import React from 'react';
import { Story, Meta } from '@storybook/react';
import ProgressBar, { ProgressBarProps } from './ProgressBar';

export default {
  title: 'Progress Bar',
  component: ProgressBar,
} as Meta;

const Template: Story<ProgressBarProps> = (args) => <ProgressBar {...args} />;
export const ProgressBarExample = Template.bind({});
ProgressBarExample.args = {
  msg: 'Progress',
  max: 100,
  progress: 50,
};
