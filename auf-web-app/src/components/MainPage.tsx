import React, { useState, useEffect } from 'react';

const MainPage: React.FC = () => {
  const [walletConnected, setWalletConnected] = useState(false);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [step, setStep] = useState(1);

  useEffect(() => {
    const tonConnectUI = new (window as any).TON_CONNECT_UI.TonConnectUI({
      manifestUrl: 'https://raw.githubusercontent.com/reshikino/auf-coin-app/main/auf-web-app/public/tonconnect-manifest.json',
      buttonRootId: 'ton-connect'
    });

    tonConnectUI.onStatusChange((wallet: any) => {
      if (wallet) {
        setWalletConnected(true);
      }
    });
  }, []);

  const languages = ['English', 'Русский', 'Español', 'Français', 'Deutsch', '中文', '日本語', '한국어'];

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLanguages(Array.from(event.target.selectedOptions, option => option.value));
  };

  const handleNext = () => {
    setStep(2);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      {step === 1 && (
        <>
          {!walletConnected && <div id="ton-connect" style={{ marginBottom: '20px' }} />}
          {walletConnected && (
            <>
              <h1>Select Application Language</h1>
              <select>
                <option value="en">English</option>
                <option value="ru">Русский</option>
              </select>
              <h1>Select Languages You Know</h1>
              <select multiple value={selectedLanguages} onChange={handleLanguageChange}>
                {languages.map(lang => (
                  <option key={lang} value={lang}>{lang}</option>
                ))}
              </select>
              <h1>Terms of Service</h1>
              <p>Please read and accept our terms of service.</p>
              <button onClick={handleNext}>Next</button>
            </>
          )}
        </>
      )}
      {step === 2 && (
        <>
          <h1>Loading...</h1>
          <p>Coming Soon</p>
        </>
      )}
    </div>
  );
};

export default MainPage;
