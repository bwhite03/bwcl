import React, { useEffect, useRef } from "react";
import "./ripplebutton.css";

export interface RippleButtonProps {
  text: string;
  onClick: (e: React.MouseEvent) => void;
}
function RippleButton(props: RippleButtonProps) {
  const btn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (btn.current) {
      btn.current.addEventListener("click", (e: MouseEvent) => {
        const x = e.clientX;
        const y = e.clientY;

        // @ts-ignore
        const buttonTop = e.target?.offsetTop;
        // @ts-ignore
        const buttonLeft = e.target?.offsetLeft;

        const xInside = x - buttonLeft;
        const yInside = y - buttonTop;

        const circle = document.createElement("span");
        circle.classList.add("ripple-button-circle");
        circle.style.top = yInside + "px";
        circle.style.left = xInside + "px";
        if (btn.current) {
          btn.current.appendChild(circle);
        }
        setTimeout(() => {
          circle.remove();
        }, 500);
      });
    }
  }, []);

  return (
    <button ref={btn} className="ripple-button" onClick={props.onClick}>
      {props.text}
      <span className="ripple-button-circle"></span>
    </button>
  );
}

export default RippleButton;
