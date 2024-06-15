import React from 'react';

const LoadingScreen = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
      <h1>Coming Soon</h1>
      <div className="loader"></div>
    </div>
  );
};

export default LoadingScreen;
