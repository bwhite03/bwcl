import React from "react";
import "./toggleswitch.css";

export interface ToggleSwitchProps {
  id: string;
  handleClick: (id: string, check: boolean) => void;
  active: boolean;
}

function ToggleSwitch(props: ToggleSwitchProps) {
  const { id, handleClick, active } = props;

  const onClick = (e: React.MouseEvent<HTMLInputElement>) => {
    // @ts-ignore
    handleClick(id, e.target.checked);
  };

  return (
    <div className="toggle-switch">
      <input
        type="checkbox"
        className="toggle-switch-checkbox"
        name={id}
        data-testid={`toggle-switch-checkbox-${id}`}
        id={id}
        // @ts-ignore
        onChange={onClick}
        checked={active}
      />
      <label className="toggle-switch-label" htmlFor={id}>
        <span className="toggle-switch-inner"></span>
        <span className="toggle-switch-switch"></span>
      </label>
    </div>
  );
}

export default ToggleSwitch;
