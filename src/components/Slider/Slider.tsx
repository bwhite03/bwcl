import React, { useEffect } from "react";
import "./slider.css";

export interface SliderProps {
  id: string;
  name: string;
  onChange: () => React.ChangeEventHandler<HTMLElement>;
  min: number;
  max: number;
  step: number;
  value?: number;
  image?: string;
  trackColor?: string;
}

function Slider(props: SliderProps) {
  useEffect(() => {
    let myElement = document.querySelector(".slider") as HTMLBodyElement;

    if (props.trackColor) myElement.style.background = props.trackColor;
    if (props.image) {
      let style = document.createElement("style");
      document.head.appendChild(style);
      style.textContent = `.slider-style::-webkit-slider-thumb{background-image: url("${props.image}")}`;
    }
  }, []);

  let sliderClass = "slider";

  if (props.trackColor) {
    sliderClass += " slider-style-track";
  } else {
  }

  if (props.image) {
    sliderClass += " slider-style-track slider-style";
  } else {
  }

  return (
    <div className="slide-container">
      <input
        className={sliderClass}
        onChange={props.onChange}
        type="range"
        id={props.id}
        name={props.name}
        min={props.min}
        max={props.max}
        step={props.step}
        value={props.value}
      />
    </div>
  );
}

export default Slider;
