import React from 'react';
import { useHistory } from 'react-router-dom';

const WalletConnectPage = () => {
  const history = useHistory();

  const handleConnect = async () => {
    try {
      // Логика подключения кошелька
      history.push('/language-selection');
    } catch (error) {
      console.error('Error connecting to wallet:', error);
    }
  };

  return (
    <div className="wallet-connect-page">
      <button onClick={handleConnect}>Connect Wallet</button>
    </div>
  );
};

export default WalletConnectPage;
