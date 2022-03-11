import React from 'react';
import { render } from '@testing-library/react';
import ProgressBar from './ProgressBar';

describe('ProgressBar', () => {
  test('should render correctly', () => {
    const { container } = render(
      <ProgressBar msg="progress" max={100} progress={50} />
    );

    expect(container).toMatchSnapshot();
  });
});
