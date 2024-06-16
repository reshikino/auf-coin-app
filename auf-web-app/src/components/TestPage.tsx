import React from 'react';
import { useHistory } from 'react-router-dom';

const TestPage = () => {
  const history = useHistory();

  const handleBack = () => {
    history.push('/');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh' }}>
      <h1>Проверочное окно</h1>
      <button onClick={handleBack}>Вернуться</button>
    </div>
  );
};

export default TestPage;

