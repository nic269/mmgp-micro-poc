import React from 'react';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Micro front-end POC
        </p>
        <a
          className="App-link"
          href="https://hub.messagemedia.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hub link
        </a>
        <button onClick={() => props.history.push('/messages/new-message')}>Go to New Message</button>
      </header>
    </div>
  );
}

export default App;
