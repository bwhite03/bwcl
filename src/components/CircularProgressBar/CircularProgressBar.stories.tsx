import React from 'react';
import { Story, Meta } from '@storybook/react';
import CircularProgressBar, {
  CircularProgressProps,
} from './CircularProgressBar';

export default {
  title: 'CircularProgressBar',
  component: CircularProgressBar,
} as Meta;

const Template: Story<CircularProgressProps> = (args) => (
  <CircularProgressBar {...args} />
);

export const CircularProgressBarExample = Template.bind({});
CircularProgressBarExample.args = {
  size: 150,
  progress: 75,
  strokeWidth: 15,
  circleStrokeOne: '#d93dfe',
  showPercent: false,
};
