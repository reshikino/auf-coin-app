import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const languages = [
  'English', 'Russian', 'Spanish', 'Chinese', 'French', 'German', 'Japanese', 'Korean', 'Portuguese', 'Italian'
];

const LanguageSelection = () => {
  const navigate = useNavigate();
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);

  const handleLanguageChange = (language: string) => {
    setSelectedLanguages(prev =>
      prev.includes(language) ? prev.filter(lang => lang !== language) : [...prev, language]
    );
  };

  const handleNext = () => {
    navigate('/terms-of-service');
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Select Your Language</h1>
      <div>
        {languages.map(language => (
          <label key={language}>
            <input
              type="checkbox"
              value={language}
              checked={selectedLanguages.includes(language)}
              onChange={() => handleLanguageChange(language)}
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
