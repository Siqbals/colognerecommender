import './App.css';
import React from 'react';
import Checkheadertext from './checkheadertext';

function Overallrank(props) {

  const carr = props.carr;

  const getDynamicStyle = (index) => {
    if (carr && carr[index] === 1) {
      return {
        opacity: 1,
        fontWeight: 'bold',
      };
    } else {
      return {
        opacity: 1,
        fontWeight: 'normal',
      };
    }
  };

  const baseStyle = {
    fontFamily: 'papyrus',
    fontSize: '40px',
    whiteSpace: 'nowrap',
  };

  return (
    <div className='checkcontainer'>
        <Checkheadertext text="Overall Rating: "></Checkheadertext>
        <div className='imgscontainer'>
        <span
            style={{ ...baseStyle, ...getDynamicStyle(0) }}
            className="imgs"
          >
            {carr && carr[0]}
          </span>
        </div>

    </div>
  );
}

export default Overallrank;
