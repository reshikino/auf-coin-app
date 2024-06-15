import React from 'react';

interface Props {
  onNext: () => void;
}

const Terms: React.FC<Props> = ({ onNext }) => {
  return (
    <div>
      <h2>Условия использования</h2>
      <p>Здесь будут условия использования...</p>
      <button onClick={onNext}>Далее</button>
    </div>
  );
};

export default Terms;
