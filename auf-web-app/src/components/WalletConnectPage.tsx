import React from 'react';
import { useHistory } from 'react-router-dom';

const WalletConnectPage = () => {
  const history = useHistory();

  const handleConnect = () => {
    // Подключение кошелька
    history.push('/language');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <button onClick={handleConnect}>Подключить кошелек</button>
    </div>
  );
};

export default WalletConnectPage;
