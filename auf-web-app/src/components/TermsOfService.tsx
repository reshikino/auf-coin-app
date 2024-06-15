import React from 'react';
import { useNavigate } from 'react-router-dom';

const TermsOfService = () => {
  const navigate = useNavigate();

  const handleAccept = () => {
    navigate('/coming-soon');
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Terms of Service</h1>
      <p>Please accept our terms of service to continue.</p>
      <button onClick={handleAccept}>Accept</button>
    </div>
  );
};

export default TermsOfService;
