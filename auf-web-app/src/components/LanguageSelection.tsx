import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const LanguageSelection: React.FC = () => {
  const history = useHistory();
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);

  const handleLanguageChange = (language: string) => {
    setSelectedLanguages(prev => 
      prev.includes(language) ? prev.filter(l => l !== language) : [...prev, language]
    );
  };

  const handleSubmit = () => {
    history.push('/terms');
  };

  const languages = ['English', 'Russian', 'Spanish', 'French', 'German', 'Chinese', 'Japanese', 'Korean'];

  return (
    <div style={{ padding: '20px' }}>
      <h1>Выберите язык приложения</h1>
      <select>
        <option value="en">English</option>
        <option value="ru">Russian</option>
      </select>

      <h2>Какими языками вы владеете?</h2>
      {languages.map(language => (
        <div key={language}>
          <input 
            type="checkbox" 
            id={language} 
            name={language} 
            value={language} 
            onChange={() => handleLanguageChange(language)} 
          />
          <label htmlFor={language}>{language}</label>
        </div>
      ))}

      <button onClick={handleSubmit}>Далее</button>
    </div>
  );
};

export default LanguageSelection;
