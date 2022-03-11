import React, { useState, useEffect, useRef } from 'react';
import './circularprogressbar.css';

export interface CircularProgressProps {
  size: number;
  progress: number;
  strokeWidth: number;
  circleStrokeOne: string;
  circleStrokeTwo?: string;
  showPercent: boolean;
}

const CircularProgress = (props: CircularProgressProps) => {
  const [offset, setOffset] = useState(0);
  const circleRef = useRef<SVGCircleElement>(null);
  const [progressText, setProgressText] = useState('');
  const [progressColor, setProgressColor] = useState('');

  const { size, progress, strokeWidth, circleStrokeOne, showPercent } = props;

  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const progressOffSet = ((100 - progress) / 100) * circumference;
    setProgressText(progress.toString());
    setOffset(progressOffSet);

    if (circleRef.current) {
      // @ts-ignore
      circleRef.current.style =
        'transition: stroke-dashoffset 850ms ease-in-out, stroke 500ms linear';
    }

    if (progress >= 75) {
      setProgressColor('#47e61c');
    } else if (progress < 25) {
      setProgressColor('#f00e0e');
    } else if (progress < 50) {
      setProgressColor('#f59b33');
    } else if (progress < 75) {
      setProgressColor('#f00e0e');
    }
  }, [setOffset, progress, circumference, offset]);

  return (
    <div>
      <svg className="circular-progress-bar" width={size} height={size}>
        <circle
          className="circular-progress-bar-bg"
          stroke={circleStrokeOne}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          fill="none"
        />
        <circle
          ref={circleRef}
          className="circular-progress-bar-circle"
          stroke={progressColor}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          fill="none"
        />
        <text
          x={center}
          y={center}
          className="circular-progress-bar-percentage"
        >
          {parseInt(progressText.toString() || '30')}
          {showPercent ? '%' : null}
        </text>
      </svg>
    </div>
  );
};

export default CircularProgress;
