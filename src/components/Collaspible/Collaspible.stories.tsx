import React from 'react';
import { Story, Meta } from '@storybook/react';
import Collapsible, { CollapsibleProps } from './Collapsible';

export default {
  title: 'Collapsible',
  component: Collapsible,
} as Meta;

const Template: Story<CollapsibleProps> = (args) => <Collapsible {...args} />;
export const CollaspibleExample = Template.bind({});

CollaspibleExample.args = {
  label: 'Test Div',
  children: [
    <div>
      <h2>Here is a Collapsible</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus
        delectus, aut fugit repellendus perspiciatis cumque, tempore deleniti
        sunt velit corporis aliquid saepe, consequuntur ipsum? Voluptate
        repellat distinctio optio sunt ipsum?
      </p>
    </div>,
  ],
};
