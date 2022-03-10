import React from 'react';
import { createPortal } from 'react-dom';

export interface MultiSelectProps<T> {
  data: T[];
  keyDescriptor: string;
  optionValue: keyof T;
  optionText: keyof T;
  open: boolean;
  handleCheck: (checkbox: React.ChangeEvent<HTMLInputElement>, data: T) => void;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  search: string;
  amIChecked: (e: T) => boolean;
  inputId: string;
  id: string;
}

function MultiSelectPortal<T>(props: MultiSelectProps<T>) {
  const {
    open,
    handleSearchChange,
    search,
    inputId,
    data,
    keyDescriptor,
    optionValue,
    optionText,
    amIChecked,
    handleCheck,
    id = 'multi-select-checkboxes',
  } = props;
  const portalDiv = document.getElementById('ms-portal-container');

  return (
    <React.Fragment>
      {open && portalDiv
        ? createPortal(
            <div className="multi-select-checkboxes" id={id}>
              <input
                className="form-control"
                placeholder="search"
                type="text"
                onChange={handleSearchChange}
                value={search}
                id={inputId}
              />
              {data && data.length > 0 ? (
                <React.Fragment>
                  {data.map((d, i) => (
                    <label key={`${keyDescriptor}-${i}`}>
                      <input
                        type="checkbox"
                        checked={amIChecked(d)}
                        onChange={(e) => handleCheck(e, d)}
                      />
                      {d[optionText]}
                    </label>
                  ))}
                </React.Fragment>
              ) : null}
            </div>,
            portalDiv
          )
        : null}
    </React.Fragment>
  );
}

export default MultiSelectPortal;
