import React from 'react';
import { useHistory } from 'react-router-dom';

const TermsAndConditions: React.FC = () => {
  const history = useHistory();

  const handleAccept = () => {
    history.push('/loading');
  };

  return (
    <div>
      <h2>Terms and Conditions</h2>
      <p>Accept the terms and conditions to continue.</p>
      <button onClick={handleAccept}>Accept</button>
    </div>
  );
};

export default TermsAndConditions;
