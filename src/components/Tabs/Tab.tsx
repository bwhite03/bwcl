import React from "react";
import { TableProps } from "../Grid/DataGrid";
import "./tab.css";

export interface TabProps {
  className: string;
  onClick: (e: string) => void;
  label: string;
  activeTab: string;
  disabled: boolean;
  id: string;
}

const Tab = (props: TabProps) => {
  let className = "tab-list-item";
  if (props.label === props.activeTab) {
    className += " tab-list-active";
  }

  return (
    <li
      onClick={() => props.onClick(props.label)}
      className={className}
      id={props.id}
    >
      {props.label}
    </li>
  );
};

export default Tab;
