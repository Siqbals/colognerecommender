import './App.css';
import React from 'react';
import Checkheadertext from './checkheadertext';

function Description(props) {

  const carr = props.carr;

  const baseStyle = {
    color: '#a5a5a5',
    fontFamily: 'papyrus',
    fontSize: '80px',
    whiteSpace: 'nowrap',
    width: '500px'
  };

  return (
    <div className='checkcontainer'>
        <Checkheadertext text="Description: "></Checkheadertext>
        <div className='imgscontainer'>
        <span
            className='desc'
          >
            {carr && carr[0]}
          </span>
        </div>

    </div>
  );
}

export default Description;
