import React from 'react';
import { Link } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <Link to="/wallet-connect">
        <button style={{ padding: '10px 20px', fontSize: '16px' }}>Connect Wallet</button>
      </Link>
    </div>
  );
};

export default App;
