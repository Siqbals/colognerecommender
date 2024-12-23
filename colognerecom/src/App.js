import React, { useState, useEffect } from 'react';
import './App.css';
import Textbox from './textbox';
import Titletext from './titletext';
import Subtitletext from './subtitletext';
import Seasons from './seasons';
import Occasions from './Occasions';
import Durations from './durations';
import Notes from './notes';
import Overallrank from './overallrank';
import { getCologneArray } from './getarray.js';

function App() {
  const [inparr, setInparr] = useState([
    [0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0],
    [0, 0, 0, 0],
    [0],
  ]);
  const [textboxInput, setTextboxInput] = useState('');

  useEffect(() => {
    const handleKeyPress = async (event) => {
      if (event.key === 'Enter') {
        const updatedArray = await getCologneArray(textboxInput);
        if (updatedArray) {
          setInparr(updatedArray);
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [textboxInput]);

  const handleTextboxChange = (input) => {
    setTextboxInput(input);
  };

  

  return (
    <div className='background'>
      <div className="mainappcontainer">
        <Titletext />
        <Subtitletext />
        <Textbox onInputChange={handleTextboxChange} />
        <Seasons carr={inparr[0]} />
        <Occasions carr={inparr[1]} />
        <Durations carr={inparr[2]} />
        <Notes carr={inparr[3]} />
        <Overallrank carr={inparr[4]} />
      </div>
    </div>
  );
}

export default App;
