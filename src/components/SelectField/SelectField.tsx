import React from "react";
import "./selectfield.css";

export interface SelectFieldProps<T> {
  id: string;
  name: string;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => string;
  valueField: T[keyof T];
  displayField: keyof T;
  error?: string;
  emptyMsg: string;
  data: T[];
}

function SelectField<T>(props: SelectFieldProps<T>) {
  let wrapperClass = "bwcl-select";
  if (props.error && props.error.length > 0) {
    wrapperClass += " has-error";
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={props.id}>{props.label}</label>
      <div className="field">
        <select
          id={props.id}
          onChange={props.onChange}
          className="form-control"
        >
          <option value="0">{props.emptyMsg}</option>
          {props.data && props.data.length === 0
            ? null
            : props.data.map((item: T, index: number) => (
                <option
                  key={`${props.id}-${index}`}
                  // @ts-ignore
                  value={item[props.valueField]}
                >
                  {item[props.displayField]}
                </option>
              ))}
        </select>
      </div>
      {props.error && (
        <div className="alert-danger" data-testid="alert">
          {props.error}
        </div>
      )}
    </div>
  );
}

export default SelectField;
