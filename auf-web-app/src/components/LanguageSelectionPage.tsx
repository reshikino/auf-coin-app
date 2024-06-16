import React from 'react';
import { useHistory } from 'react-router-dom';

const LanguageSelectionPage: React.FC = () => {
  const history = useHistory();
  const languages = ['English', 'Russian', 'Spanish', 'Chinese', 'French', 'German', 'Japanese', 'Korean', 'Portuguese', 'Italian'];

  const handleNext = () => {
    history.push('/terms-of-service');
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Select Your Language</h1>
      <div id="languages">
        {languages.map(lang => (
          <label key={lang}>
            <input type="checkbox" value={lang} />
            {lang}
            <br />
          </label>
        ))}
      </div>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default LanguageSelectionPage;
