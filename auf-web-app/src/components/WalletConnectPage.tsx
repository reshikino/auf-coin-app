import React from 'react';
import { TonConnectButton } from '@tonconnect/ui-react';

const WalletConnectPage = ({ onConnect }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <TonConnectButton onClick={onConnect} />
    </div>
  );
};

export default WalletConnectPage;
