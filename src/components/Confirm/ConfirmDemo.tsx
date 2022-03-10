import React, { useState, useEffect } from 'react';
import Confirm from './Confirm';
import './confirm.css';

const ConfirmDemo = () => {
  const [isShowing, setIsShowing] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (success) {
      handleDelete();
    }
  });

  const hide = () => {
    setIsShowing(false);
  };

  const handleDelete = () => {
    console.log('delete something');
  };

  return (
    <div>
      <div>
        <button onClick={() => setIsShowing(!isShowing)}>
          Show Confirm Delete
        </button>
      </div>
      <Confirm
        title="Delete"
        isShowing={isShowing}
        hide={hide}
        confirmText={'delete me'}
        // @ts-ignore
        setSuccess={success}
      />
    </div>
  );
};

export default ConfirmDemo;
