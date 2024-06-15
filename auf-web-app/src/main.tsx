import React from 'react';
import ReactDOM from 'react-dom/client';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import App from './components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TonConnectUIProvider manifestUrl='https://raw.githubusercontent.com/reshikino/auf-coin-app/main/auf-web-app/public/tonconnect-manifest.json'>
      <App />
    </TonConnectUIProvider>
  </React.StrictMode>
);
