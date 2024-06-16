import React, { useState } from 'react';

const LanguageSelectionPage: React.FC<{ onNext: () => void }> = ({ onNext }) => {
    const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);

    const languages = ['English', 'Russian', 'Spanish', 'Chinese', 'French', 'German', 'Japanese'];

    const handleLanguageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const language = event.target.value;
        if (event.target.checked) {
            setSelectedLanguages([...selectedLanguages, language]);
        } else {
            setSelectedLanguages(selectedLanguages.filter(lang => lang !== language));
        }
    };

    return (
        <div>
            <h2>Select Languages</h2>
            {languages.map(lang => (
                <label key={lang}>
                    <input
                        type="checkbox"
                        value={lang}
                        onChange={handleLanguageChange}
                    />
                    {lang}
                </label>
            ))}
            <button onClick={onNext}>Next</button>
        </div>
    );
};

export default LanguageSelectionPage;
