import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTonWallet, TonConnectButton } from '@tonconnect/ui-react';

const WalletConnectPage: React.FC = () => {
  const wallet = useTonWallet();
  const navigate = useNavigate();

  useEffect(() => {
    if (wallet) {
      navigate('/language');
    }
  }, [wallet, navigate]);

  return (
    <div id="root">
      <TonConnectButton />
    </div>
  );
};

export default WalletConnectPage;
