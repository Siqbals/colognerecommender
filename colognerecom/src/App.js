import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Textbox from './textbox';
import Titletext from './titletext';
import Subtitletext from './subtitletext';
import Seasons from './seasons';
import Occasions from './Occasions';
import Durations from './durations';
import Notes from './notes';
import Overallrank from './overallrank';

function App() {
  return (
    <div className='background'>
        <div className="mainappcontainer">
          <Titletext></Titletext>
          <Subtitletext></Subtitletext>
          <Textbox></Textbox>
          <Seasons></Seasons>
          <Occasions></Occasions>
          <Durations></Durations>
          <Notes></Notes>
          <Overallrank></Overallrank>
      </div>
    </div>

  );
}

export default App;
