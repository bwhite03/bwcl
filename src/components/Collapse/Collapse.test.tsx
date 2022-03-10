import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Collapse from './Collapse';

describe('Collapse', () => {
  test('should render correctly', () => {
    const { container } = render(
      <Collapse label="c1" id="c1">
        <h2>test</h2>
      </Collapse>
    );
    expect(container).toMatchSnapshot();
  });

  test('should handle click', () => {
    const { container, getByRole, getByTestId } = render(
      <Collapse label="c1" id="c1">
        <h2>test</h2>
      </Collapse>
    );

    const label1 = container.querySelector('label') as HTMLElement;
    fireEvent.click(label1);
  });
});
