import React from 'react';
import { useHistory } from 'react-router-dom';

const TermsPage: React.FC = () => {
  const history = useHistory();

  const handleAccept = () => {
    history.push('/app');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Условия использования</h1>
      <p>Примите условия использования, чтобы продолжить.</p>
      <button onClick={handleAccept}>Принять</button>
    </div>
  );
};

export default TermsPage;
