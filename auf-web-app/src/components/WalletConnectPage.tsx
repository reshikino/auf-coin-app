import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const WalletConnectPage: React.FC = () => {
  const history = useHistory();

  useEffect(() => {
    const tonConnectUI = new TON_CONNECT_UI.TonConnectUI({
      manifestUrl: 'https://raw.githubusercontent.com/reshikino/auf-coin-app/main/auf-web-app/public/tonconnect-manifest.json',
      buttonRootId: 'ton-connect'
    });

    tonConnectUI.onStatusChange((wallet) => {
      if (wallet) {
        history.push('/language-selection');
      }
    });
  }, [history]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div id="ton-connect"></div>
    </div>
  );
};

export default WalletConnectPage;
