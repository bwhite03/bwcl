import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PSM, { PSMProps } from './PSM';

describe('PSM', () => {
  test('should render correctly', () => {
    const testFn = jest.fn();
    const { container } = render(
      <PSM userid={1} confirmPasswordChange={testFn} />
    );

    expect(container).toMatchSnapshot();
  });

  test('should handle a single character', () => {
    const testFn = jest.fn();
    const { getByPlaceholderText } = render(
      <PSM userid={1} confirmPasswordChange={testFn} />
    );
    userEvent.type(screen.getByPlaceholderText('Enter Password'), '!');
    const input = screen.getByPlaceholderText(
      'Enter Password'
    ) as HTMLInputElement;
    expect(input.value).toEqual('!');
  });

  test('should handle a three character', () => {
    const testFn = jest.fn();
    const { getByPlaceholderText } = render(
      <PSM userid={1} confirmPasswordChange={testFn} />
    );
    userEvent.type(screen.getByPlaceholderText('Enter Password'), '!Ss');
    const input = screen.getByPlaceholderText(
      'Enter Password'
    ) as HTMLInputElement;
    expect(input.value).toEqual('!Ss');
  });

  test('should handle a five character', () => {
    const testFn = jest.fn();
    const { getByPlaceholderText } = render(
      <PSM userid={1} confirmPasswordChange={testFn} />
    );
    userEvent.type(screen.getByPlaceholderText('Enter Password'), '!Ssss');
    const input = screen.getByPlaceholderText(
      'Enter Password'
    ) as HTMLInputElement;
    expect(input.value).toEqual('!Ssss');
  });

  test('should handle a seven character', () => {
    const testFn = jest.fn();
    const { getByPlaceholderText } = render(
      <PSM userid={1} confirmPasswordChange={testFn} />
    );
    userEvent.type(screen.getByPlaceholderText('Enter Password'), '!Ssss11');
    const input = screen.getByPlaceholderText(
      'Enter Password'
    ) as HTMLInputElement;
    expect(input.value).toEqual('!Ssss11');
  });

  test('should handle a password greater than 17 characters', () => {
    const testFn = jest.fn();
    const { getByPlaceholderText } = render(
      <PSM userid={1} confirmPasswordChange={testFn} />
    );
    userEvent.type(
      screen.getByPlaceholderText('Enter Password'),
      '!Ssss1111111111111'
    );
    const input = screen.getByPlaceholderText(
      'Enter Password'
    ) as HTMLInputElement;
    expect(input.value).toEqual('!Ssss1111111111111');
  });

  test('should handle a two adjecent special characters', () => {
    const testFn = jest.fn();
    const { getByPlaceholderText } = render(
      <PSM userid={1} confirmPasswordChange={testFn} />
    );
    userEvent.type(
      screen.getByPlaceholderText('Enter Password'),
      '!!@5Teams5!!@'
    );
    const input = screen.getByPlaceholderText(
      'Enter Password'
    ) as HTMLInputElement;
    expect(input.value).toEqual('!!@5Teams5!!@');
  });

  test('should handle submit button click', () => {
    const testFn = jest.fn();
    const { container, getByPlaceholderText } = render(
      <PSM userid={1} confirmPasswordChange={testFn} />
    );
    userEvent.type(
      screen.getByPlaceholderText('Enter Password'),
      '!!@5Teams5!!@'
    );
    const input = screen.getByPlaceholderText(
      'Enter Password'
    ) as HTMLInputElement;
    const btn = container.querySelector('button');

    expect(btn).toBeVisible();

    if (btn) {
      fireEvent.click(btn);
    }
  });

  test('should handle no user for props', () => {
    const testFn = jest.fn();
    const { container, getByPlaceholderText } = render(
      // @ts-ignore
      <PSM confirmPasswordChange={testFn} />
    );
    userEvent.type(
      screen.getByPlaceholderText('Enter Password'),
      '!!@5Teams5!!@'
    );
    userEvent.type(
      screen.getByPlaceholderText('Confirm Password'),
      '!!@5Teams5!!@'
    );
    const btn = container.querySelector('button');
    if (btn) {
      fireEvent.click(btn);
      const text = screen.getByText('Please select a user');
      expect(text).toBeVisible();
    }
  });

  test('should handle userid of 0', () => {
    const testFn = jest.fn();
    const { container, getByPlaceholderText } = render(
      // @ts-ignore
      <PSM confirmPasswordChange={testFn} userid={0} />
    );
    userEvent.type(
      screen.getByPlaceholderText('Enter Password'),
      '!!@5Teams5!!@'
    );
    userEvent.type(
      screen.getByPlaceholderText('Confirm Password'),
      '!!@5Teams5!!@'
    );
    const btn = container.querySelector('button');
    if (btn) {
      fireEvent.click(btn);
      const text = screen.getByText('Please select a user');
      expect(text).toBeVisible();
    }
  });

  test('should successfully submit new password', () => {
    const testFn = jest.fn();
    const { container, getByPlaceholderText } = render(
      // @ts-ignore
      <PSM confirmPasswordChange={testFn} userid={1} />
    );
    userEvent.type(
      screen.getByPlaceholderText('Enter Password'),
      '!!@5Teams5!!@'
    );
    userEvent.type(
      screen.getByPlaceholderText('Confirm Password'),
      '!!@5Teams5!!@'
    );
    const btn = container.querySelector('button');
    if (btn) {
      fireEvent.click(btn);
    }
  });
});
