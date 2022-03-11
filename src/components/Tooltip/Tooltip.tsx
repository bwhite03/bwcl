import React, { useState, useRef, useEffect } from 'react';
import './tooltip.css';

export type ToolTipPosition = 'top' | 'bottom' | 'left' | 'right';

export interface ToolTipProps {
  position: ToolTipPosition;
  children: React.ReactNode;
  message: string;
  style?: React.CSSProperties;
}

const ToolTip = (props: ToolTipProps) => {
  const [displayToolTip, setDisplayToolTip] = useState(false);

  let internalStyle = {
    backgroundColor: '#fff',
    color: '#000',
    padding: '5px',
  } as React.CSSProperties;

  const tooltipRef = useRef<HTMLSpanElement>(null);
  const triggerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (props.style) {
      internalStyle = props.style;
    }

    if (tooltipRef.current) {
      tooltipRef.current.addEventListener('mouseleave', hideToolTip);
    }

    if (triggerRef.current) {
      triggerRef.current.addEventListener('mouseover', showToolTip);
    }

    return () => {
      if (tooltipRef.current) {
        tooltipRef.current.removeEventListener('mouseleave', hideToolTip);
      }

      if (triggerRef.current) {
        triggerRef.current.removeEventListener('mouseover', showToolTip);
      }
    };
  }, []);

  const showToolTip = () => {
    setDisplayToolTip(true);
  };

  const hideToolTip = () => {
    setDisplayToolTip(false);
  };

  return (
    <span className="bwcl-tool-tip-wrapper" ref={tooltipRef}>
      {displayToolTip ? (
        <div>
          <div className={`bwcl-tooltip-bubble bwcl-tooltip-${props.position}`}>
            <div className="bwcl-tooltip-message" style={internalStyle}>
              {props.message}
            </div>
          </div>
        </div>
      ) : null}
      <span ref={triggerRef} className="bwcl-tooltip-trigger">
        {props.children}
      </span>
    </span>
  );
};

export default ToolTip;
