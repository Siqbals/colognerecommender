import './App.css';
import React from 'react';
import Checkheadertext from './checkheadertext';

function Durations(props) {
  const carr = props.carr;

  const getDynamicStyle = (index) => {
    if (carr && carr[index] === 1) {
      return {
        opacity: 1,
        fontWeight: 'bold', // Add boldness if true
      };
    } else {
      return {
        opacity: 0.3,
        fontWeight: 'normal',
      };
    }
  };

  const baseStyle = {
    fontFamily: 'papyrus',
    fontSize: '40px',
    whiteSpace: 'nowrap', // Prevent text from wrapping inside spans
  };

  return (
    <div className="checkcontainer">
      <Checkheadertext text="Duration: "></Checkheadertext>
      <div className="imgscontainer">
        <div className="imgs">
          <span
            style={{ ...baseStyle, ...getDynamicStyle(0) }}
            className="imgs"
          >
            1-2
          </span>
          <br />
          <span
            style={{ ...baseStyle, ...getDynamicStyle(1) }}
            className="imgs"
          >
            2-4
          </span>
          <br />
          <span
            style={{ ...baseStyle, ...getDynamicStyle(2) }}
            className="imgs"
          >
            6+
          </span>
        </div>
      </div>
    </div>
  );
}

export default Durations;
