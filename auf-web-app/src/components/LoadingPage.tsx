import React from 'react';

const LoadingPage: React.FC = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', flexDirection: 'column' }}>
      <h2>Coming Soon...</h2>
      <div className="loader"></div>
    </div>
  );
};

export default LoadingPage;
