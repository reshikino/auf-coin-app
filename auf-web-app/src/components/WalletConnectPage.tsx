import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { TonConnectUIProvider, TonConnectButton } from '@tonconnect/ui-react';

const WalletConnectPage: React.FC = () => {
  const history = useHistory();

  useEffect(() => {
    const tonConnectUI = new TonConnectUI({
      manifestUrl: 'https://raw.githubusercontent.com/reshikino/auf-coin-app/main/auf-web-app/public/tonconnect-manifest.json',
      buttonRootId: 'ton-connect'
    });

    tonConnectUI.onStatusChange(wallet => {
      if (wallet) {
        history.push('/language');
      }
    });
  }, [history]);

  return (
    <TonConnectUIProvider manifestUrl="https://raw.githubusercontent.com/reshikino/auf-coin-app/main/auf-web-app/public/tonconnect-manifest.json">
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <TonConnectButton id="ton-connect" />
      </div>
    </TonConnectUIProvider>
  );
};

export default WalletConnectPage;
