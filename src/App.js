import Typing from 'react-typing-effect';
import React, { useState } from 'react';
import { welcomeMessage } from './welcome';
import './App.css';

function App() {
  const [input, setInput] = useState('');

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // submit input to server
  };

  return (
    <div className="terminal">
      <div className="scanlines"></div>
      <div className="noise"></div>
      <div className="header">
      <Typing speed={30} cursorClassName="blinking-cursor">
          {welcomeMessage}
      </Typing>
      </div>
      <div className="body">
        <form onSubmit={handleSubmit}>
          <span className="prompt">$</span>
          <input type="text" value={input} onChange={handleInputChange} autoFocus />
          <span className="blinking-cursor"></span>
        </form>
      </div>
    </div>
  );
}

export default App;
