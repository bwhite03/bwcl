import React, { useState } from "react";
import ToastContainer from "../ToastContainer/ToastContainer";
import RippleButton from "../RippleButton";
import "../../../dist/css/bwcl.css";
import { toast } from "../../core";

const ToastDemo = () => {
  const [message, setMessage] = useState("");

  const handleSuccess = () => {
    toast.success("🐱‍🏍" + message);
  };

  const handleInfo = () => {
    toast.info("🐱‍🏍" + message);
  };

  const handleWarning = () => {
    toast.warning("🐱‍🏍" + message);
  };

  const handleError = () => {
    toast.error("🐱‍🏍" + message);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMessage = e.target.value;
    setMessage(newMessage);
  };

  return (
    <div>
      <ToastContainer />
      <div>
        <input type="text" value={message} onChange={handleTextChange} />
      </div>
      <div>
        <RippleButton
          text="Success"
          color={"#07bc0c"}
          onClick={handleSuccess}
        />
        <RippleButton text="Error" color={"#e74c5c"} onClick={handleError} />
        <RippleButton text="Info" color={"#0000FF"} onClick={handleInfo} />
        <RippleButton
          text="Warning"
          color={"#FFFF00"}
          onClick={handleWarning}
        />
      </div>
    </div>
  );
};

export default ToastDemo;
