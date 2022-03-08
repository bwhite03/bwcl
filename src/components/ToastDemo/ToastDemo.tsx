import React, { useState } from "react";
import ToastContainer from "../ToastContainer/ToastContainer";
import RippleButton from "../RippleButton/RippleButton";
import { ToastPosition } from "../../types";
import "../../../dist/css/bwcl.css";
import { toast } from "../../core";

export interface ToastDemoProps {
  position: ToastPosition;
}

const ToastDemo = (props: ToastDemoProps) => {
  const [message, setMessage] = useState("");

  const handleSuccess = () => {
    toast.success("🚀" + message);
  };
  const handleError = () => {
    toast.error("😡" + message);
  };

  const handleInfo = () => {
    toast.info("🙈" + message);
  };

  const handleWarn = () => {
    toast.warning(message);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMessage = e.target.value;
    setMessage(newMessage);
  };

  return (
    <div>
      <ToastContainer position={props.position} />
      <div>
        <input type="text" value={message} onChange={handleTextChange} />
      </div>
      <div style={{ marginTop: "20px" }}>
        <RippleButton
          text="Success"
          color={"#07bc0c"}
          hoverColor={"#72c975"}
          textColor={"#fff"}
          onClick={handleSuccess}
        />
        <RippleButton
          text="Error"
          color={"#e74c3c"}
          hoverColor={"#d19f9a"}
          textColor={"#fff"}
          onClick={handleError}
          style={{ marginLeft: "10px" }}
        />
        <RippleButton
          text="INFO"
          color={"#3498db"}
          hoverColor={"#aecadd"}
          textColor={"#000"}
          onClick={handleInfo}
          style={{ marginLeft: "10px" }}
        />
        <RippleButton
          text="WARN"
          color={"#f1c40f"}
          hoverColor={"#cabe8f"}
          textColor={"#000"}
          onClick={handleWarn}
          style={{ marginLeft: "10px" }}
        />
      </div>
    </div>
  );
};

export default ToastDemo;
