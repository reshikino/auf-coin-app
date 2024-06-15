import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const languages = ['English', 'Russian', 'Spanish', 'French', 'German', 'Chinese', 'Japanese', 'Korean'];

const LanguageSelection: React.FC = () => {
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const navigate = useNavigate();

  const toggleLanguage = (language: string) => {
    setSelectedLanguages(prev =>
      prev.includes(language) ? prev.filter(l => l !== language) : [...prev, language]
    );
  };

  const handleNext = () => {
    navigate('/terms');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Select Application Language</h1>
      <div>
        <button onClick={() => toggleLanguage('English')}>English</button>
        <button onClick={() => toggleLanguage('Russian')}>Russian</button>
      </div>
      <h2>Select Your Languages</h2>
      <div>
        {languages.map(language => (
          <label key={language}>
            <input
              type="checkbox"
              value={language}
              onChange={() => toggleLanguage(language)}
              checked={selectedLanguages.includes(language)}
            />
            {language}
          </label>
        ))}
      </div>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default LanguageSelection;
