import React, { useState } from 'react';

const languages = [
  'English', 'Russian', 'Spanish', 'Chinese', 'French', 'German', 'Japanese', 'Korean', 'Portuguese', 'Italian'
];

const LanguageSelectionPage = ({ onNext }) => {
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);

  const toggleLanguage = (language: string) => {
    setSelectedLanguages(prev =>
      prev.includes(language) ? prev.filter(lang => lang !== language) : [...prev, language]
    );
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Select Languages</h1>
      <div>
        {languages.map(lang => (
          <div key={lang}>
            <input
              type="checkbox"
              id={lang}
              checked={selectedLanguages.includes(lang)}
              onChange={() => toggleLanguage(lang)}
            />
            <label htmlFor={lang}>{lang}</label>
          </div>
        ))}
      </div>
      <button onClick={onNext}>Next</button>
    </div>
  );
};

export default LanguageSelectionPage;
