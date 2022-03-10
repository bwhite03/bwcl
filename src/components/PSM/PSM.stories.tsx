import React from 'react';
import { Story, Meta } from '@storybook/react';
import PSM, { PSMProps } from './PSM';

export default {
  title: 'PSM',
  component: PSM,
} as Meta;

const Template: Story<PSMProps> = (args) => <PSM {...args} />;
export const PSMExample = Template.bind({});
PSMExample.args = { userid: 1 };
