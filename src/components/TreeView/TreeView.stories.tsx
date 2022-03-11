import React from 'react';
import { Story, Meta } from '@storybook/react';
import TreeView, { TreeViewProps } from './TreeView';

export default {
  title: 'TreeView',
  component: TreeView,
} as Meta;

const data = {
  home: {
    link1: 'link1',
    link2: {
      url: 'www.google.com',
      sites: [
        'site1',
        'site2',
        {
          content: 'test',
        },
        {
          rating: 'x',
        },
      ],
    },
  },
  buttons: 'Buttons',
};

const data1 = {
  home: 'home',
  home1: 'home1',
};

const Template =
  <T extends {}>(): Story<TreeViewProps<T>> =>
  (args) =>
    <TreeView {...args} />;

export const TreeViewExample = Template<object>().bind({});
TreeViewExample.args = {
  data,
  toggled: false,
  name: 'Treeview 1',
  isLast: false,
  isChildElement: false,
  isParentToggled: false,
};
