import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Textbox from './textbox';
import Titletext from './titletext';

function App() {
  return (
    <div className="mainappcontainer">
        <Titletext></Titletext>
        <Textbox></Textbox>
    </div>
  );
}

export default App;
