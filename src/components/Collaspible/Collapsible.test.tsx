import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Collapsible from './Collapsible';

describe('Collapsible', () => {
  test('should render correctly', () => {
    const { container } = render(
      <Collapsible label="c1">
        <h1>Hello</h1>
      </Collapsible>
    );
    expect(container).toMatchSnapshot();
  });
});
