import React from 'react';
import { useNavigate } from 'react-router-dom';

const languages = ['English', 'Русский', 'Español', 'Français', 'Deutsch', '中文', '日本語', '한국어', 'العربية', 'हिन्दी'];

const LanguageSelection: React.FC = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/terms');
  };

  return (
    <div className="language-selection">
      <h2>Select Application Language</h2>
      <select>
        {languages.map((lang, index) => (
          <option key={index} value={lang}>{lang}</option>
        ))}
      </select>
      <h2>Select Known Languages</h2>
      {languages.map((lang, index) => (
        <div key={index}>
          <input type="checkbox" id={`lang-${index}`} name="known-languages" value={lang} />
          <label htmlFor={`lang-${index}`}>{lang}</label>
        </div>
      ))}
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default LanguageSelection;
