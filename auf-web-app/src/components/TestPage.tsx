import React from 'react';
import { useNavigate } from 'react-router-dom';

const TestPage: React.FC = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Test Page</h1>
      <button onClick={handleBack}>Back</button>
    </div>
  );
};

export default TestPage;
