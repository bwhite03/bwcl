import React from 'react';
import { Story, Meta } from '@storybook/react';
import PagingToolBar, { PagingToolbarProps } from './PagingToolbar';

export default {
  title: 'Paging Toolbar',
  component: PagingToolBar,
  parameters: {
    layout: 'centered',
  } as Meta,
};

const data = [
  {
    id: 1,
    value: 'Grocery',
  },
  {
    id: 2,
    value: 'Nonfood',
  },
  {
    id: 3,
    value: 'HBA',
  },
  {
    id: 4,
    value: 'Meat',
  },
  {
    id: 5,
    value: 'Meat by #',
  },
  {
    id: 6,
    value: 'Produce',
  },
  {
    id: 7,
    value: 'Produce by #',
  },
];

const Template =
  <T extends {}>(): Story<PagingToolbarProps<T>> =>
  (args) =>
    <PagingToolBar {...args} />;

export const PagingToolBarExample = Template<object>().bind({});
PagingToolBarExample.args = {
  data,
  currentPage: 1,
  totalRecords: data.length,
  recordsPerPage: 25,
  start: 1,
  end: 25,
};
