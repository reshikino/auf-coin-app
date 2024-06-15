import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const WalletConnectPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const tonConnectUI = new (window as any).TON_CONNECT_UI.TonConnectUI({
      manifestUrl: 'https://raw.githubusercontent.com/reshikino/auf-coin-app/main/auf-web-app/public/tonconnect-manifest.json',
      buttonRootId: 'ton-connect'
    });

    tonConnectUI.onStatusChange((wallet: any) => {
      if (wallet) {
        navigate('/language-selection');
      }
    });
  }, [navigate]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div id="ton-connect"></div>
    </div>
  );
};

export default WalletConnectPage;
