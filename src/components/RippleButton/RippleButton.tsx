import React, { useEffect, useRef } from 'react';
import './ripplebutton.css';

export interface RippleButtonProps {
  text: string;
  onClick: (e: React.MouseEvent) => void;
  color?: string;
  hoverColor?: string;
  textColor?: string;
  style?: React.CSSProperties;
}
function RippleButton(props: RippleButtonProps) {
  const btn = useRef<HTMLButtonElement>(null);
  const {
    color = '#2952e3',
    hoverColor = '#2546bd',
    textColor = '#fff',
  } = props;

  const mouseEnter = (e: MouseEvent) => {
    // @ts-ignore
    e.target.style.backgroundColor = hoverColor;
  };

  const mouseLeave = (e: MouseEvent) => {
    // @ts-ignore
    e.target.style.backgroundColor = color;
  };

  const click = (e: MouseEvent) => {
    const x = e.clientX;
    const y = e.clientY;

    // @ts-ignore
    const buttonTop = e.target?.offsetTop;
    // @ts-ignore
    const buttonLeft = e.target?.offsetLeft;

    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;

    const circle = document.createElement('span');
    circle.classList.add('ripple-button-circle');
    circle.style.top = yInside + 'px';
    circle.style.left = xInside + 'px';
    if (btn.current) {
      btn.current.appendChild(circle);
    }
    setTimeout(() => {
      circle.remove();
    }, 500);
  };

  useEffect(() => {
    if (btn.current) {
      btn.current.style.backgroundColor = color;
      btn.current.style.color = textColor;

      btn.current.addEventListener('mouseenter', mouseEnter);
      btn.current.addEventListener('mouseleave', mouseLeave);
      btn.current.addEventListener('click', click);
    }

    return () => {
      if (btn.current) {
        btn.current.removeEventListener('mouseenter', mouseEnter);
        btn.current.removeEventListener('mouseleave', mouseLeave);
        btn.current.removeEventListener('click', click);
      }
    };
  }, []);

  return (
    <button
      ref={btn}
      className="ripple-button"
      onClick={props.onClick}
      style={props.style}
    >
      {props.text}
      <span className="ripple-button-circle"></span>
    </button>
  );
}

export default RippleButton;
