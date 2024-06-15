import React from 'react';
import { useHistory } from 'react-router-dom';

const TestPage: React.FC = () => {
  const history = useHistory();

  return (
    <div>
      <h2>Test Page</h2>
      <button onClick={() => history.push('/')}>Go Back</button>
    </div>
  );
};

export default TestPage;
