import React from 'react';

const WalletConnectPage: React.FC = () => {
  return (
    <div>
      <h1>Wallet Connect Page</h1>
      <div id="ton-connect"></div>
      <script src="https://unpkg.com/@tonconnect/ui@latest/dist/tonconnect-ui.min.js"></script>
      <script>
        const tonConnectUI = new TON_CONNECT_UI.TonConnectUI({
          manifestUrl: 'https://raw.githubusercontent.com/reshikino/auf-coin-app/main/auf-web-app/public/tonconnect-manifest.json',
          buttonRootId: 'ton-connect'
        });
      </script>
    </div>
  );
};

export default WalletConnectPage;