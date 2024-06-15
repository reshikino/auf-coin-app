import React from 'react';
import { useHistory } from 'react-router-dom';

const LanguageSelection: React.FC = () => {
  const history = useHistory();

  const handleNext = () => {
    history.push('/terms');
  };

  return (
    <div>
      <h2>Select App Language</h2>
      <select>
        <option value="en">English</option>
        <option value="ru">Русский</option>
        {/* Add other languages */}
      </select>
      <h2>Select Languages You Speak</h2>
      <select multiple>
        <option value="en">English</option>
        <option value="ru">Русский</option>
        {/* Add other languages */}
      </select>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default LanguageSelection;
