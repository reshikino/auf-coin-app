import React from 'react';
import { useHistory } from 'react-router-dom';

const TestPage: React.FC = () => {
  const history = useHistory();

  const handleBack = () => {
    history.push('/');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#282c34', color: 'white' }}>
      <h1>Проверочное окно</h1>
      <button onClick={handleBack} style={{ backgroundColor: '#61dafb', border: 'none', padding: '10px 20px', color: '#282c34', cursor: 'pointer' }}>Вернуться</button>
    </div>
  );
};

export default TestPage;
