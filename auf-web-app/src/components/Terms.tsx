import React from 'react';
import { useNavigate } from 'react-router-dom';

const Terms: React.FC = () => {
  const navigate = useNavigate();

  const handleAccept = () => {
    navigate('/loading');
  };

  return (
    <div className="terms">
      <h2>Terms of Use</h2>
      <p>Here are the terms of use...</p>
      <button onClick={handleAccept}>Accept</button>
    </div>
  );
};

export default Terms;
