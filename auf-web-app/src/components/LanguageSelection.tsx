import React from 'react';
import { useNavigate } from 'react-router-dom';

const languages = ["English", "Russian", "Spanish", "French", "German", "Chinese", "Japanese", "Korean", "Italian", "Portuguese"];

const LanguageSelection = () => {
  const navigate = useNavigate();
  const [selectedLanguages, setSelectedLanguages] = React.useState<string[]>([]);

  const handleLanguageChange = (language: string) => {
    setSelectedLanguages(prev =>
      prev.includes(language) ? prev.filter(l => l !== language) : [...prev, language]
    );
  };

  const handleSubmit = () => {
    navigate('/terms');
  };

  return (
    <div>
      <h1>Select Languages</h1>
      <div>
        {languages.map(language => (
          <label key={language}>
            <input
              type="checkbox"
              value={language}
              onChange={() => handleLanguageChange(language)}
            />
            {language}
          </label>
        ))}
      </div>
      <button onClick={handleSubmit}>Next</button>
    </div>
  );
};

export default LanguageSelection;
