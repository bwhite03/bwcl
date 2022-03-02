import React from "react";
import "./button.css";

export interface ButtonProps {
  label: string;
  style: React.CSSProperties;
  onClick: () => React.MouseEvent<HTMLButtonElement>;
}

const Button = (props: ButtonProps) => {
  const { label, style, onClick } = props;
  return (
    <button onClick={onClick} style={style}>
      {label}
    </button>
  );
};

export default Button;
