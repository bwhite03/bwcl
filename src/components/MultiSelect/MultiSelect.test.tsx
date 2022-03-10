import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MultiSelect from './MultiSelect';

const data = [
  {
    id: 1,
    value: 'Grocery',
  },
  {
    id: 2,
    value: 'Nonfood',
  },
  {
    id: 3,
    value: 'HBA',
  },
  {
    id: 4,
    value: 'Meat',
  },
  {
    id: 5,
    value: 'Meat by #',
  },
  {
    id: 6,
    value: 'Produce',
  },
  {
    id: 7,
    value: 'Produce by #',
  },
];

describe('MultiSelect', () => {
  test('should render correctly', () => {
    const setCheckedItems = jest.fn();
    jest.useFakeTimers();
    jest.spyOn(global, 'setTimeout');
    const { container } = render(
      <MultiSelect
        data={data}
        defaultOption="select a department"
        keyDescriptior="keyDescriptor"
        optionValue="id"
        optionText="value"
        checkedItems={[]}
        setCheckedItems={setCheckedItems}
        id="id"
        selectBoxId="selectBoxId"
        backgroundColor="red"
        selectId="selectId"
        inputId="inputId"
      />
    );

    expect(container).toMatchSnapshot();
    expect(setTimeout).toHaveBeenCalled();
  });

  test('should rener without default props', () => {
    const setCheckedItems = jest.fn();
    const { container, getByRole } = render(
      <MultiSelect
        data={data}
        defaultOption="select a department"
        keyDescriptior="keyDescriptor"
        optionValue="id"
        optionText="value"
        checkedItems={[]}
        setCheckedItems={setCheckedItems}
        id="id"
        selectBoxId="selectBoxId"
        backgroundColor="red"
        selectId="selectId"
        inputId="inputId"
      />
    );

    expect(container).toMatchSnapshot();
    const option = getByRole('option', { name: /select a department/ });
    fireEvent.click(option);
    fireEvent.click(option);
  });

  test('should handle click outside', () => {
    const div = document.createElement('div');
    div.id = 'outside';
    document.body.appendChild(div);
    const setCheckedItems = jest.fn();
    const { container, getByRole } = render(
      <MultiSelect
        data={data}
        defaultOption="select a department"
        keyDescriptior="keyDescriptor"
        optionValue="id"
        optionText="value"
        checkedItems={[]}
        setCheckedItems={setCheckedItems}
        id="id"
        selectBoxId="selectBoxId"
        backgroundColor="red"
        selectId="selectId"
        inputId="inputId"
      />
    );

    const option = getByRole('option', { name: /select a department/ });
    fireEvent.click(option);
    const outside = document.querySelector('outside');
    if (outside) {
      fireEvent.click(outside);
    }
  });

  test('should handle check', () => {
    const div = document.createElement('div');
    div.id = 'ms-portal-container';
    document.body.appendChild(div);
    const setCheckedItems = jest.fn();
    const { container, getByRole } = render(
      <MultiSelect
        data={data}
        defaultOption="select a department"
        keyDescriptior="keyDescriptor"
        optionValue="id"
        optionText="value"
        checkedItems={[]}
        setCheckedItems={setCheckedItems}
        id="id"
        selectBoxId="selectBoxId"
        backgroundColor="red"
        selectId="selectId"
        inputId="inputId"
      />
    );

    const option = getByRole('option', { name: /select a department/ });
    fireEvent.click(option);

    const dept = getByRole('checkbox', { name: /Grocery/ });
    fireEvent.click(dept);
    fireEvent.click(dept);
  });

  test('should handle search', () => {
    const div = document.createElement('div');
    div.id = 'ms-portal-container';
    document.body.appendChild(div);
    const setCheckedItems = jest.fn();
    const { container, getByRole, getByPlaceholderText } = render(
      <MultiSelect
        data={data}
        defaultOption="select a department"
        keyDescriptior="keyDescriptor"
        optionValue="id"
        optionText="value"
        checkedItems={[]}
        setCheckedItems={setCheckedItems}
        id="id"
        selectBoxId="selectBoxId"
        backgroundColor="red"
        selectId="selectId"
        inputId="inputId"
      />
    );

    const option = getByRole('option', { name: /select a department/ });
    fireEvent.click(option);

    userEvent.type(screen.getByPlaceholderText(/search/i), 'gro');
    const input = getByPlaceholderText('search') as HTMLInputElement;
    expect(input.value).toEqual('gro');

    userEvent.type(
      screen.getByPlaceholderText(/search/i),
      '{backspace}{backspace}{backspace}'
    );

    expect(input.value).toEqual('');
  });
});
