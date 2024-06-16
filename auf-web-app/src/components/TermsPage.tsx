import React from 'react';
import { useHistory } from 'react-router-dom';

const TermsPage = () => {
  const history = useHistory();

  const handleNext = () => {
    history.push('/loading');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh' }}>
      <h1>Принятие условий использования</h1>
      <p>Текст условий использования...</p>
      <button onClick={handleNext}>Далее</button>
    </div>
  );
};

export default TermsPage;
