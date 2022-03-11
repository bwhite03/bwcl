import React from 'react';
import { render } from '@testing-library/react';

import { Icons } from './Icons';

describe('Icons', () => {
  test('should render info', () => {
    const { info: Info } = Icons;
    const { container } = render(<Info theme="light" type="info" />);
    expect(container).toMatchSnapshot();
  });

  test('should render success', () => {
    const { success: Success } = Icons;
    const { container } = render(<Success theme="light" type="success" />);
    expect(container).toMatchSnapshot();
  });

  test('should render backward', () => {
    const { backward: Backward } = Icons;
    const { container } = render(<Backward theme="dark" type="dark" />);
    expect(container).toMatchSnapshot();
  });

  test('should render forward', () => {
    const { forward: Forward } = Icons;
    const { container } = render(<Forward theme="dark" type="dark" />);
    expect(container).toMatchSnapshot();
  });

  test('should render previous', () => {
    const { previous: Previous } = Icons;
    const { container } = render(<Previous theme="dark" type="dark" />);
    expect(container).toMatchSnapshot();
  });

  test('should render next', () => {
    const { next: Next } = Icons;
    const { container } = render(<Next theme="dark" type="dark" />);
    expect(container).toMatchSnapshot();
  });

  test('should render circleLeft', () => {
    const { circleLeft: CircleLeft } = Icons;
    const { container } = render(<CircleLeft theme="dark" type="dark" />);
    expect(container).toMatchSnapshot();
  });

  test('should render circleRight', () => {
    const { circleRight: CircleRight } = Icons;
    const { container } = render(<CircleRight theme="colored" type="dark" />);
    expect(container).toMatchSnapshot();
  });

  test('should render circleNext', () => {
    const { circleNext: CircleNext } = Icons;
    const { container } = render(<CircleNext theme="dark" type="dark" />);
    expect(container).toMatchSnapshot();
  });

  test('should render circlePrevious', () => {
    const { circlePrevious: CirclePrevious } = Icons;
    const { container } = render(<CirclePrevious theme="dark" type="dark" />);
    expect(container).toMatchSnapshot();
  });

  test('should render warning', () => {
    const { warning: Warning } = Icons;
    const { container } = render(<Warning theme="light" type="warning" />);
    expect(container).toMatchSnapshot();
  });

  test('should render error', () => {
    const { error: Error } = Icons;
    const { container } = render(<Error theme="light" type="error" />);
    expect(container).toMatchSnapshot();
  });

  test('should should render color', () => {
    const { error: Error } = Icons;
    const { container } = render(<Error theme="colored" type="error" />);
    expect(container).toMatchSnapshot();
  });
});
