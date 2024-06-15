import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TonConnectButton } from '@tonconnect/ui-react';

const WalletConnectPage: React.FC = () => {
  const navigate = useNavigate();

  const handleConnect = async () => {
    try {
      const connectedWallet = await (window as any).tonConnectUI.connectWallet();
      console.log(connectedWallet);
      navigate('/language-selection');
    } catch (error) {
      console.error('Error connecting to wallet:', error);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <TonConnectButton onClick={handleConnect} style={{ margin: '20px' }}>Connect Wallet</TonConnectButton>
    </div>
  );
};

export default WalletConnectPage;
