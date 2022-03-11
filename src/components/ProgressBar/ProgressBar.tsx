import React, { useEffect, useState } from 'react';
import './progressbar.css';

export interface ProgressBarProps {
  msg: string;
  max: number;
  progress: number;
  opacity?: number;
  msgStyle?: React.CSSProperties;
}

const ProgressBar = (props: ProgressBarProps) => {
  const [style, setStyle] = useState<React.CSSProperties>({});
  const [progress, setProgress] = useState(0);
  const {
    msgStyle = {
      color: 'rgb(22, 10, 90)',
      transform: 'translateY(-135%) translateX(100px)',
    },
  } = props;

  useEffect(() => {
    const currentProgress = (props.progress / props.max) * 100;
    setProgress(currentProgress);
    const newStyle = {
      width: `${currentProgress}%`,
    };

    const newMsgStyle = {
      ...props.msgStyle,
    };

    setStyle(newStyle);
  }, [props.progress]);

  return (
    <div className="bwcl-progress-bar">
      <div className="bwcl-progress-done" style={style} />
      <div
        className="bwcl-progress-msg"
        style={msgStyle}
      >{`${props.msg} ${progress}`}</div>
    </div>
  );
};

export default ProgressBar;
