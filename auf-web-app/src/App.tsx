import React from 'react';
import { TonConnectButton, TonConnectUIProvider } from '@tonconnect/ui-react';
import './App.css';

const App: React.FC = () => {
  return (
    <TonConnectUIProvider manifestUrl="https://raw.githubusercontent.com/reshikino/auf-coin-app/main/tonconnect-manifest.json">
      <div className="App">
        <header className="App-header">
          <h1>AUF Web App</h1>
          <TonConnectButton />
        </header>
      </div>
    </TonConnectUIProvider>
  );
}

export default App;
