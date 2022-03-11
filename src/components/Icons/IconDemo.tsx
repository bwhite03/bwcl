import React from 'react';
import { Icons } from './Icons';

import './IconsDemo.css';

const style = { height: '30px', width: '30px' };

const IconDemo = () => {
  const {
    info: Info,
    success: Success,
    warning: Warning,
    error: Error,
    backward: Backward,
    forward: Forward,
    previous: Previous,
    next: Next,
    circleLeft: CircleLeft,
    circleRight: CircleRight,
    circleNext: CircleNext,
    circlePrevious: CirclePrevious,
  } = Icons;
  return (
    <div>
      <h2>Icons Demo</h2>
      <div className="icon-container">
        <div>
          <div className="icon-div">
            <label>Info</label>
            <Info theme="dark" type="info" style={style} />
          </div>
          <div className="icon-div">
            <label>Success</label>
            <Success theme="dark" type="success" style={style} />
          </div>
          <div className="icon-div">
            <label>Warning</label>
            <Warning theme="dark" type="warning" style={style} />
          </div>
          <div className="icon-div">
            <label>Error</label>
            <Error theme="dark" type="error" style={style} />
          </div>
          <div className="icon-div">
            <label>Backward</label>
            <Backward theme="dark" type="dark" style={style} />
          </div>
          <div className="icon-div">
            <label>Forward</label>
            <Forward theme="dark" type="dark" style={style} />
          </div>
          <div className="icon-div">
            <label>Previous</label>
            <Previous theme="dark" type="dark" style={style} />
          </div>
          <div className="icon-div">
            <label>Next</label>
            <Next theme="dark" type="dark" style={style} />
          </div>
        </div>
        <div>
          <div className="icon-div">
            <label>Circle Left</label>
            <CircleLeft theme="dark" type="dark" style={style} />
          </div>
          <div className="icon-div">
            <label>Circle Right</label>
            <CircleRight theme="dark" type="dark" style={style} />
          </div>
          <div className="icon-div">
            <label>Circle Next</label>
            <CircleNext theme="dark" type="dark" style={style} />
          </div>
          <div className="icon-div">
            <label>Circle Previous</label>
            <CirclePrevious theme="dark" type="dark" style={style} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IconDemo;
