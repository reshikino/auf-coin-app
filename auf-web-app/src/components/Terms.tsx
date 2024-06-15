import React from 'react';
import { useNavigate } from 'react-router-dom';

const Terms = () => {
  const navigate = useNavigate();

  const handleAccept = () => {
    navigate('/loading');
  };

  return (
    <div>
      <h1>Terms and Conditions</h1>
      <p>Please accept our terms and conditions to proceed.</p>
      <button onClick={handleAccept}>Accept</button>
    </div>
  );
};

export default Terms;
