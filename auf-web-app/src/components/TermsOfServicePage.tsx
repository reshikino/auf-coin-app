import React from 'react';
import { useHistory } from 'react-router-dom';

const TermsOfServicePage: React.FC = () => {
  const history = useHistory();

  const handleAccept = () => {
    history.push('/coming-soon');
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Terms of Service</h1>
      <p>Please accept our terms of service to continue.</p>
      <button onClick={handleAccept}>Accept</button>
    </div>
  );
};

export default TermsOfServicePage;
