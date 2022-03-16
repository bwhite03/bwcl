import React from 'react';
import './textinput.css';

export type TextInputType = 'text' | 'number';

export interface TextInputProps {
  id: string;
  name: string;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: TextInputType;
  placeholder?: string;
  value: string | number;
  error?: string;
  readOnly?: boolean;
  autoComplete?: string;
}

function TextInput(props: TextInputProps) {
  let wrapperClass = 'c5cl-textInput';
  if (props.error && props.error.length > 0) {
    wrapperClass += ' has-error';
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={props.id}>{props.label}</label>
      <div className="field">
        <input
          id={props.id}
          type={props.type}
          name={props.name}
          onChange={props.onChange}
          className="form-control"
          value={props.value}
          placeholder={props.placeholder}
          readOnly={props.readOnly}
          autoComplete={props.autoComplete}
        />
      </div>
      {props.error && (
        <div className="alert alert-danger" data-testid="alert">
          {props.error}
        </div>
      )}
    </div>
  );
}
export default TextInput;
