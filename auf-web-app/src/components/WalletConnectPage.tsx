import React from 'react';
import { useNavigate } from 'react-router-dom';

const WalletConnectPage: React.FC = () => {
  const navigate = useNavigate();

  const handleConnect = () => {
    // Simulate successful wallet connection
    navigate('/language-selection');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <div id="ton-connect"></div>
      <button onClick={handleConnect} style={{ padding: '10px 20px', fontSize: '16px', marginTop: '20px' }}>
        Connect Wallet
      </button>
    </div>
  );
};

export default WalletConnectPage;
