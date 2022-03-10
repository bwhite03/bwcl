import React from 'react';
import { Story, Meta } from '@storybook/react';
import Collapse, { CollapseProps } from './Collapse';

export default {
  title: 'Collapse',
  component: Collapse,
} as Meta;

const Template: Story<CollapseProps> = (args) => <Collapse {...args} />;

export const CollapseExample = Template.bind({});
CollapseExample.args = {
  id: 'collapse',
  label: 'collapse',
  children: [<div>Here is some content</div>],
};
