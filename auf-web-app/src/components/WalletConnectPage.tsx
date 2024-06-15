import React from 'react';
import { useNavigate } from 'react-router-dom';

const WalletConnectPage: React.FC = () => {
  const navigate = useNavigate();

  const handleConnect = async () => {
    try {
      const connectedWallet = await tonConnectUI.connectWallet();
      console.log(connectedWallet);
      navigate('/language-selection');
    } catch (error) {
      console.error('Error connecting to wallet:', error);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div id="ton-connect"></div>
      <button onClick={handleConnect} style={{ margin: '20px' }}>Connect Wallet</button>
    </div>
  );
};

export default WalletConnectPage;
