import React from 'react';
import { useHistory } from 'react-router-dom';

const WalletConnectPage: React.FC = () => {
  const history = useHistory();

  const handleConnect = async () => {
    const tonConnectUI = new (window as any).TON_CONNECT_UI.TonConnectUI({
      manifestUrl: 'https://raw.githubusercontent.com/reshikino/auf-coin-app/main/auf-web-app/public/tonconnect-manifest.json',
      buttonRootId: 'ton-connect'
    });

    await tonConnectUI.connectWallet();

    history.push('/language');
  };

  return (
    <div>
      <div id="ton-connect" onClick={handleConnect}>Connect Wallet</div>
    </div>
  );
};

export default WalletConnectPage;
