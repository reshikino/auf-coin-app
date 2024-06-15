import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const languages = ['English', 'Russian', 'Spanish', 'French', 'German', 'Chinese', 'Japanese', 'Korean', 'Italian', 'Portuguese'];

const LanguageSelection: React.FC = () => {
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const navigate = useNavigate();

  const handleLanguageChange = (language: string) => {
    if (selectedLanguages.includes(language)) {
      setSelectedLanguages(selectedLanguages.filter((lang) => lang !== language));
    } else {
      setSelectedLanguages([...selectedLanguages, language]);
    }
  };

  const handleNext = () => {
    navigate('/terms');
  };

  return (
    <div className="language-selection">
      <h2>Select Application Language</h2>
      <div>
        <label>
          <input
            type="radio"
            name="app-language"
            value="English"
            onChange={() => console.log('Selected English')}
          />
          English
        </label>
        <label>
          <input
            type="radio"
            name="app-language"
            value="Russian"
            onChange={() => console.log('Selected Russian')}
          />
          Russian
        </label>
      </div>
      <h2>Select Languages You Speak</h2>
      <div>
        {languages.map((language) => (
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
