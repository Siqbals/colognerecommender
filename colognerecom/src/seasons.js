import './App.css';
import React, { useEffect, useState } from 'react';
import snowflake from './snowflake-png.png'
import sun from './sun.png'
import Checkheadertext from './checkheadertext';
import { getCologneArray } from './getarray.js'

function Seasons() {

  const [carr, setcarr] = useState([]);

  useEffect(() => {
    async function fetchData() {
        try {
            const data = await getCologneArray('Dior Sauvage');
            setcarr(data);
        } catch (error) {
            console.error('Error in MyComponent:', error);
        }
    }
    fetchData();
}, []);

console.log(carr)

  return (
    <div className='checkcontainer'>
        <Checkheadertext text="Seasons: "></Checkheadertext>
        <div className='imgscontainer'>
            <img src={snowflake} className='imgs'></img>
            <img src={sun} className='imgs'></img>
        </div>

    </div>
  );
}

export default Seasons;
