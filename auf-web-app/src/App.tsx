import React from 'react';
import { TonConnectButton } from '@tonconnect/ui-react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>AUF Web App</h1>
        <TonConnectButton />
      </header>
    </div>
  );
}

export default App;
