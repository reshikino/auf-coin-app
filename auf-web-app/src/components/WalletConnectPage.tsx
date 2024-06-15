// src/components/WalletConnectPage.tsx
import React, { useEffect } from 'react';

const WalletConnectPage: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://unpkg.com/@tonconnect/ui@latest/dist/tonconnect-ui.min.js";
    script.onload = () => {
      const tonConnectUI = new (window as any).TON_CONNECT_UI.TonConnectUI({
        manifestUrl: 'https://raw.githubusercontent.com/reshikino/auf-coin-app/main/auf-web-app/public/tonconnect-manifest.json',
        buttonRootId: 'ton-connect'
      });
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      <h1>Wallet Connect Page</h1>
      <div id="ton-connect"></div>
    </div>
  );
};

export default WalletConnectPage;
