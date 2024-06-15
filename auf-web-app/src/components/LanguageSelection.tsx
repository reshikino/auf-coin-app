import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const languages = ['English', 'Русский', 'Español', 'Français', 'Deutsch', '中文', '日本語', '한국어', 'العربية', 'हिन्दी'];

const LanguageSelection: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>('');
  const [knownLanguages, setKnownLanguages] = useState<string[]>([]);
  const navigate = useNavigate();

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLanguage(event.target.value);
  };

  const handleKnownLanguagesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setKnownLanguages((prevKnownLanguages) =>
      event.target.checked
        ? [...prevKnownLanguages, value]
        : prevKnownLanguages.filter((lang) => lang !== value)
    );
  };

  const handleNext = () => {
    console.log('Selected Language:', selectedLanguage);
    console.log('Known Languages:', knownLanguages);
    navigate('/terms');
  };

  return (
    <div className="language-selection">
      <h2>Select Application Language</h2>
      <select onChange={handleLanguageChange} value={selectedLanguage}>
        <option value="">Select language</option>
        {languages.map((lang, index) => (
          <option key={index} value={lang}>
            {lang}
          </option>
        ))}
      </select>

      <h2>Select Known Languages</h2>
      {languages.map((lang, index) => (
        <div key={index}>
          <input
            type="checkbox"
            id={`lang-${index}`}
            value={lang}
            onChange={handleKnownLanguagesChange}
          />
          <label htmlFor={`lang-${index}`}>{lang}</label>
        </div>
      ))}

      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default LanguageSelection;
