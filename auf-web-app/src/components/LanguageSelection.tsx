import React, { useState } from 'react';

const languages = [
  "English", "Russian", "Spanish", "French", "German", "Chinese", "Japanese", "Korean", "Italian", "Portuguese", 
  "Arabic", "Dutch", "Polish", "Turkish", "Swedish", "Danish", "Finnish", "Norwegian", "Greek", "Czech",
  // Добавьте другие языки по необходимости
];

interface Props {
  onNext: () => void;
}

const LanguageSelection: React.FC<Props> = ({ onNext }) => {
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);

  const handleLanguageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSelectedLanguages((prev) =>
      prev.includes(value)
        ? prev.filter((lang) => lang !== value)
        : [...prev, value]
    );
  };

  return (
    <div>
      <h2>Выберите язык приложения:</h2>
      <div>
        {languages.map((lang) => (
          <label key={lang}>
            <input
              type="checkbox"
              value={lang}
              checked={selectedLanguages.includes(lang)}
              onChange={handleLanguageChange}
            />
            {lang}
          </label>
        ))}
      </div>
      <button onClick={onNext}>Далее</button>
    </div>
  );
};

export default LanguageSelection;
