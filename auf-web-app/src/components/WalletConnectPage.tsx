// src/components/WalletConnectPage.tsx
import React from 'react';

const WalletConnectPage: React.FC = () => {
  React.useEffect(() => {
    const tonConnectUI = new (window as any).TON_CONNECT_UI.TonConnectUI({
      manifestUrl: 'https://raw.githubusercontent.com/reshikino/auf-coin-app/main/auf-web-app/public/tonconnect-manifest.json',
      buttonRootId: 'ton-connect'
    });
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div id="ton-connect"></div>
    </div>
  );
};

export default WalletConnectPage;
