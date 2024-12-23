import './App.css';
import React, { useEffect, useState } from 'react';
import { getCologneArray } from './getarray.js'
import sweet from './sweet.png'
import spicy from './spicy.png'
import gourmand from './gourmand.png'
import floral from './floral.png'


import Checkheadertext from './checkheadertext';

function Notes(props) {
  const carr = props.carr

  return (
    <div className='checkcontainer'>
        <Checkheadertext text="Notes: "></Checkheadertext>
        <div className='imgscontainer'>
            <img
              src={sweet} 
              className='imgs' 
              style={{ opacity: carr && carr[0] === 1 ? 1 : 0.3 }} 
            ></img>
            <img
              src={spicy} 
              className='imgs' 
              style={{ opacity: carr && carr[1] === 1 ? 1 : 0.3 }} 
            ></img>
            <img
              src={gourmand} 
              className='imgs' 
              style={{ opacity: carr && carr[2] === 1 ? 1 : 0.3 }} 
            ></img>
            <img
              src={floral} 
              className='imgs' 
              style={{ opacity: carr && carr[3] === 1 ? 1 : 0.3 }} 
            ></img>
        </div>

    </div>
  );
}

export default Notes;
