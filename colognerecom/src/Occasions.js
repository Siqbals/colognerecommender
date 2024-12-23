import './App.css';
import React from'react';
import { getCologneArray } from './getarray.js'
import datenight from './datenight.png'
import everyday from './everyday.png'
import special from './special.png'
import nightout from './nightout.png'
import work from './work.png'
import gym from './gym.png'
import Checkheadertext from './checkheadertext';

function Occasions(props) {
  const carr = props.carr

  return (
    <div className='checkcontainer'>
        <Checkheadertext text="Occasions: "></Checkheadertext>
        <div className='imgscontainer'>
            <img 
              src={datenight}
              className='imgs' 
              style={{ opacity: carr && carr[0] === 1 ? 1 : 0.3 }}></img>
            <img 
              src={everyday}
              className='imgs' 
              style={{ opacity: carr && carr[1] === 1 ? 1 : 0.3 }}
            ></img>
            <img 
              src={special}
              className='imgs' 
              style={{ opacity: carr && carr[2] === 1 ? 1 : 0.3 }}
            ></img>
            <img 
              src={nightout}
              className='imgs' 
              style={{ opacity: carr && carr[3] === 1 ? 1 : 0.3 }}
            ></img>
            <img 
              src={work}
              className='imgs' 
              style={{ opacity: carr && carr[4] === 1 ? 1 : 0.3 }}
            ></img>
            <img 
              src={gym}
              className='imgs' 
              style={{ opacity: carr && carr[5] === 1 ? 1 : 0.3 }}
            ></img>
        </div>

    </div>
  );
}

export default Occasions;
