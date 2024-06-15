import React from 'react';
import { useHistory } from 'react-router-dom';

const Terms: React.FC = () => {
  const history = useHistory();

  const handleAccept = () => {
    history.push('/loading');
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
