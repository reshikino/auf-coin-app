import React from 'react';
import { useHistory } from 'react-router-dom';

const languages = ['Русский', 'English', 'Español', 'Français', 'Deutsch', '中文', '日本語', '한국어'];

const LanguageSelectionPage = () => {
  const history = useHistory();

  const handleNext = () => {
    history.push('/terms');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh' }}>
      <h1>Выберите язык приложения</h1>
      {languages.map(lang => (
        <label key={lang}>
          <input type="checkbox" value={lang} /> {lang}
        </label>
      ))}
      <button onClick={handleNext}>Далее</button>
    </div>
  );
};

export default LanguageSelectionPage;
