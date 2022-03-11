import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Tooltip, { ToolTipProps } from './Tooltip';

describe('Tooltip', () => {
  test('should render correctly', () => {
    const { container } = render(
      <Tooltip position="top" message="tooltip">
        <h2>test</h2>
      </Tooltip>
    );

    expect(container).toMatchSnapshot();
  });

  test('should render with style', () => {
    const { container } = render(
      <Tooltip
        position="top"
        message="tooltip"
        style={{ backgroundColor: 'red' }}
      >
        <h2>test</h2>
      </Tooltip>
    );

    expect(container).toMatchSnapshot();
  });

  test('should fire events', () => {
    const { container, getByRole, unmount } = render(
      <Tooltip position="top" message="tooltip">
        <h2>test</h2>
      </Tooltip>
    );

    const header = container.querySelector(
      '.bwcl-tooltip-trigger'
    ) as HTMLDivElement;
    fireEvent.mouseOver(header);
    fireEvent.mouseLeave(header);
  });

  test('should run useEffect cleanup', () => {
    const remover = jest
      .spyOn(React, 'useEffect')
      .mockImplementation((f) => f());
    const { unmount } = render(
      <Tooltip position="top" message="tooltip">
        <h2>Hello</h2>
      </Tooltip>
    );
    unmount();
  });
});
