import React from 'react';
import { Story, Meta } from '@storybook/react';
import Tree1, { TreeProps } from './Tree1';

export default {
  title: 'Tree1',
  component: Tree1,
} as Meta;

const data = {
  error: 0,
  success: true,
  name: 'storename',
  stores: [
    {
      storeid: 1,
      storeName: 'Crossroads 773',
    },
    {
      storeid: 2,
      storeName: 'Crossroads 774',
    },
  ],
  id: 1,
};

const Template: Story<TreeProps> = (args) => <Tree1 {...args} />;

export const Tree1Example = Template.bind({});
Tree1Example.args = {
  json: data,
};
