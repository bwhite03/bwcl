import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import MultiSelectPortal from './MultiSelectPortal';

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

describe('MultiSelectPortal', () => {
  test('should render correctly', () => {
    const div = document.createElement('div');
    div.id = 'ms-portal-container';
    document.body.appendChild(div);
    const portal = document.createElement('div');
    div.id = 'ms-portal-container';
    document.body.appendChild(portal);

    const handleCheck = jest.fn();
    const handleSearchChange = jest.fn();
    const amIChecked = jest.fn();

    const { container } = render(
      <MultiSelectPortal
        data={data}
        keyDescriptor={'select a department'}
        //@ts-ignore
        optionValue="id"
        //@ts-ignore
        optionText="value"
        open={true}
        handleCheck={handleCheck}
        handleSearchChange={handleSearchChange}
        amIChecked={amIChecked}
        search=""
        inputId="inputid"
        id="id"
      />
    );
    expect(container).toMatchSnapshot();
  });

  test('should render correctly without an id', () => {
    const div = document.createElement('div');
    div.id = 'ms-portal-container';
    document.body.appendChild(div);

    const handleCheck = jest.fn();
    const handleSearchChange = jest.fn();
    const amIChecked = jest.fn();

    const { container } = render(
      // @ts-ignore
      <MultiSelectPortal
        data={data}
        keyDescriptor={'select a department'}
        //@ts-ignore
        optionValue="id"
        //@ts-ignore
        optionText="value"
        open={true}
        handleCheck={handleCheck}
        handleSearchChange={handleSearchChange}
        amIChecked={amIChecked}
        search=""
        inputId="inputid"
      />
    );
    expect(container).toMatchSnapshot();
  });

  test('should not render a portal', () => {
    const div = document.createElement('div');
    div.id = 'ms-portal-container';
    document.body.appendChild(div);

    const handleCheck = jest.fn();
    const handleSearchChange = jest.fn();
    const amIChecked = jest.fn();

    const { container } = render(
      // @ts-ignore
      <MultiSelectPortal
        data={data}
        keyDescriptor={'select a department'}
        //@ts-ignore
        optionValue="id"
        //@ts-ignore
        optionText="value"
        open={false}
        handleCheck={handleCheck}
        handleSearchChange={handleSearchChange}
        amIChecked={amIChecked}
        search=""
        inputId="inputid"
        id="id"
      />
    );

    expect(container).toMatchSnapshot();
  });

  test('should render with no data', () => {
    // const div = document.createElement("div");
    // div.id = "ms-portal-container";
    // document.body.appendChild(div);

    const handleCheck = jest.fn();
    const handleSearchChange = jest.fn();
    const amIChecked = jest.fn();

    const { container } = render(
      // @ts-ignore
      <MultiSelectPortal
        data={[]}
        keyDescriptor={'select a department'}
        //@ts-ignore
        optionValue="id"
        //@ts-ignore
        optionText="value"
        open={true}
        handleCheck={handleCheck}
        handleSearchChange={handleSearchChange}
        amIChecked={amIChecked}
        search=""
        inputId="inputid"
        id="id"
      />
    );
    expect(container).toMatchSnapshot();
  });

  test('should check a box', () => {
    const div = document.createElement('div');
    div.id = 'ms-portal-container';
    document.body.appendChild(div);

    const handleCheck = jest.fn();
    const handleSearchChange = jest.fn();
    const amIChecked = jest.fn();

    const { container, getByRole } = render(
      // @ts-ignore
      <MultiSelectPortal
        data={[]}
        keyDescriptor={'select a department'}
        //@ts-ignore
        optionValue="id"
        //@ts-ignore
        optionText="value"
        open={true}
        handleCheck={handleCheck}
        handleSearchChange={handleSearchChange}
        amIChecked={amIChecked}
        search=""
        inputId="inputid"
        id="id"
      />
    );

    // const check = getByRole("checkbox", { name: /Grocery/ });
    // fireEvent.click(check);
  });
});
