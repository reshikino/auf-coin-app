import React from 'react';
import { Link } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div>
      <h1>Приложение AUF Web</h1>
      <Link to="/">Вернуться на главную</Link>
    </div>
  );
};

export default App;
