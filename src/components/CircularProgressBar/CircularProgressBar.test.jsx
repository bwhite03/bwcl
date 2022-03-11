import React from 'react';
import { render } from '@testing-library/react';
import CircularProgressBar from './CircularProgressBar';

describe('CircularProgressBar', () => {
  test('should render correctly', () => {
    const { container } = render(
      <CircularProgressBar
        progress={25}
        size={150}
        strokeWidth={15}
        circleStrokeOne={'#ff0000'}
        showPercent={false}
      />
    );
    expect(container).toMatchSnapshot();
  });

  test('should show percent', () => {
    const { container } = render(
      <CircularProgressBar
        progress={25}
        size={150}
        strokeWidth={15}
        circleStrokeOne={'#ff0000'}
        showPercent={true}
      />
    );
    expect(container).toMatchSnapshot();
  });

  test('should render with score > 75', () => {
    const { container } = render(
      <CircularProgressBar
        progress={90}
        size={150}
        strokeWidth={15}
        circleStrokeOne={'#ff0000'}
        showPercent={true}
      />
    );
    expect(container).toMatchSnapshot();
  });

  test('should render with score < 25', () => {
    const { container } = render(
      <CircularProgressBar
        progress={15}
        size={150}
        strokeWidth={15}
        circleStrokeOne={'#ff0000'}
        showPercent={true}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
