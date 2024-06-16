import React from 'react';
import { useNavigate } from 'react-router-dom';

const TermsPage: React.FC = () => {
  const navigate = useNavigate();

  const handleAccept = () => {
    navigate('/loading');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <h2>Terms of Service</h2>
      <p>Please accept our terms of service to proceed.</p>
      <button onClick={handleAccept} style={{ padding: '10px 20px', fontSize: '16px', marginTop: '20px' }}>
        Accept
      </button>
    </div>
  );
};

export default TermsPage;
