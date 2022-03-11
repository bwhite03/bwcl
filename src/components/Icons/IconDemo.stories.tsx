import React from 'react';
import { Story, Meta } from '@storybook/react';
import IconDemo from './IconDemo';

export default {
  title: 'icons',
  component: IconDemo,
} as Meta;

const Template: Story = (args) => <IconDemo />;
export const IconDemoExample = Template.bind({});
