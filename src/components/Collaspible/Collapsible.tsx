import React from 'react';
import './collapsible.css';

export interface CollapsibleProps {
  label: string;
  children: React.ReactNode;
}

const Collapsible = (props: CollapsibleProps) => {
  return (
    <div className="wrap-collapsible">
      <input id="collapsible" className="toggle-collapsible" type="checkbox" />
      <label className="lbl-toggle-collapsible" htmlFor="collapsible">
        {props.label}
      </label>
      <div className="collapsible-content">
        <div className="inner-content-collapsible">{props.children}</div>
      </div>
    </div>
  );
};

export default Collapsible;
