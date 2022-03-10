import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Confirm from './Confirm';

describe('Confirm', () => {
  test('should render correctly', () => {
    const hide = jest.fn();
    const setSuccess = jest.fn();
    const { container } = render(
      <Confirm
        title={'Delete Me'}
        isShowing={true}
        hide={hide}
        confirmText="delete me"
        setSuccess={setSuccess}
      />
    );
    expect(container).toMatchSnapshot();
  });
  test('should render without a title', () => {
    const hide = jest.fn();
    const setSuccess = jest.fn();
    const { container } = render(
      // @ts-ignore
      <Confirm
        isShowing={true}
        hide={hide}
        confirmText="delete me"
        setSuccess={setSuccess}
      />
    );
    expect(container).toMatchSnapshot();
  });
  test('should render with more info', () => {
    const hide = jest.fn();
    const setSuccess = jest.fn();
    const { container } = render(
      // @ts-ignore
      <Confirm
        isShowing={true}
        hide={hide}
        confirmText="delete me"
        setSuccess={setSuccess}
        moreInfo={'This operation cannot be undone'}
      />
    );
    expect(container).toMatchSnapshot();
  });
  test('should handle input and errors', () => {
    const hide = jest.fn();
    const setSuccess = jest.fn();
    const { container, getByTestId, getByText } = render(
      <Confirm
        title="delete something"
        isShowing={true}
        hide={hide}
        confirmText="delete me"
        setSuccess={setSuccess}
        moreInfo={'This operation cannot be undone'}
      />
    );
    userEvent.type(screen.getByTestId('confirm-input'), 'dele');
    const btn = screen.getByText('Confirm');
    fireEvent.click(btn);
    const error = screen.getByText('dele does not match delete me');
    expect(error).toBeInTheDocument();
  });
  test('should confirm without errors', () => {
    const hide = jest.fn();
    const setSuccess = jest.fn();
    const { container, getByTestId, getByText } = render(
      <Confirm
        title="delete something"
        isShowing={true}
        hide={hide}
        confirmText="delete me"
        setSuccess={setSuccess}
        moreInfo={'This operation cannot be undone'}
      />
    );
    userEvent.type(screen.getByTestId('confirm-input'), 'delete me');
    const btn = screen.getByText('Confirm');
    fireEvent.click(btn);
  });
  test('should not show', () => {
    const hide = jest.fn();
    const setSuccess = jest.fn();
    const { container, getByTestId, getByText } = render(
      <Confirm
        title="delete something"
        isShowing={false}
        hide={hide}
        confirmText="delete me"
        setSuccess={setSuccess}
        moreInfo={'This operation cannot be undone'}
      />
    );
  });
});
