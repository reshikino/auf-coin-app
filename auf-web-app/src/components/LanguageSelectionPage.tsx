import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const languages = ['English', 'Russian', 'Spanish', 'Chinese', 'German', 'French', 'Japanese'];

const LanguageSelectionPage: React.FC = () => {
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const navigate = useNavigate();

  const handleLanguageChange = (language: string) => {
    setSelectedLanguages(prev => prev.includes(language) ? prev.filter(l => l !== language) : [...prev, language]);
  };

  const handleNext = () => {
    navigate('/terms');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <h2>Select Application Language</h2>
      <div>
        <select>
          <option value="en">English</option>
          <option value="ru">Russian</option>
        </select>
      </div>
      <h2>Select Languages You Know</h2>
      <div>
        {languages.map(lang => (
          <label key={lang}>
            <input type="checkbox" value={lang} onChange={() => handleLanguageChange(lang)} />
            {lang}
          </label>
        ))}
      </div>
      <button onClick={handleNext} style={{ padding: '10px 20px', fontSize: '16px', marginTop: '20px' }}>
        Next
      </button>
    </div>
  );
};

export default LanguageSelectionPage;
