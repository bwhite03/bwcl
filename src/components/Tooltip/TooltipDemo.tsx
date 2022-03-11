import React from 'react';
import ToolTip from './Tooltip';
import { ToolTipPosition } from './Tooltip';
import './tooltipdemo.css';

export interface ToolTipDemoProps {
  position: ToolTipPosition;
  message: string;
}

const TooltipDemo = (props: ToolTipDemoProps) => {
  return (
    <div>
      <ToolTip
        position={props.position}
        message={props.message}
        style={{ marginTop: '20px' }}
      >
        <button>{props.message}</button>
      </ToolTip>
    </div>
  );
};

export default TooltipDemo;
