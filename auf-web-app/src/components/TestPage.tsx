import React from 'react';
import { useHistory } from 'react-router-dom';

const TestPage: React.FC = () => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Test Page</h1>
      <button onClick={goBack}>Go Back</button>
    </div>
  );
};

export default TestPage;
