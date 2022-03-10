import React, { Component } from 'react';
import { Story, Meta } from '@storybook/react';
import ConfirmDemo from './ConfirmDemo';

export default {
  title: 'Confirm',
  component: ConfirmDemo,
} as Meta;

const Template: Story = (args) => <ConfirmDemo {...args} />;

export const ConfirmDemoExample = Template.bind({});

ConfirmDemoExample.args = {};
