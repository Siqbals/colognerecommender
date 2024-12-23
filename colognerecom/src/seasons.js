import './App.css';
import React from 'react';
import snowflake from './snowflake-png.png'
import sun from './sun.png'
import Checkheadertext from './checkheadertext';
import { getCologneArray } from './getarray.js'


function Seasons(props) {
  const carr = props.carr;
  console.log(carr)

  return (
    <div className='checkcontainer'>
        <Checkheadertext text="Seasons: "></Checkheadertext>
        <div className='imgscontainer'>
        <img 
          src={snowflake} 
          className='imgs' 
          style={{ opacity: carr && carr[0] === 1 ? 1 : 0.3 }} 
        />
        <img 
          src={sun} 
          className='imgs' 
          style={{ opacity: carr && carr[1] === 1 ? 1 : 0.3 }} 
        />
        </div>

    </div>
  );
}

export default Seasons;
