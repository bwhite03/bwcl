import React from 'react';
import { Story, Meta } from '@storybook/react';

import Tree2, { Tree2Props } from './Tree2';

export default {
  title: 'Tree2',
  component: Tree2,
} as Meta;

const data = {
  error: 0,
  success: true,
  storeName: 'Crossroads 773',
  stores: [
    {
      storeId: 1,
    },
    {
      storeId: 2,
    },
  ],
};

const Template: Story<Tree2Props> = (args) => <Tree2 {...args} />;
export const Tree2Example = Template.bind({});
Tree2Example.args = {
  json: data,
};
