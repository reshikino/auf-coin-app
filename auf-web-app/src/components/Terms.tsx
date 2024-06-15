import React from 'react';

const TermsPage = ({ onNext }) => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Terms and Conditions</h1>
      <p>
        {/* Вставьте здесь условия использования */}
        Эти условия использования описывают ваши права и обязанности при использовании нашего приложения...
      </p>
      <button onClick={onNext}>I Accept</button>
    </div>
  );
};

export default TermsPage;
