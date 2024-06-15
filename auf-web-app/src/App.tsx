import React, { useState } from 'react';
import WalletConnectPage from './components/WalletConnectPage';
import LanguageSelectionPage from './components/LanguageSelectionPage';
import TermsPage from './components/Terms';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(prev => prev + 1);

  return (
    <>
      {step === 1 && <WalletConnectPage onConnect={nextStep} />}
      {step === 2 && <LanguageSelectionPage onNext={nextStep} />}
      {step === 3 && <TermsPage onNext={nextStep} />}
      {step === 4 && <LoadingScreen />}
    </>
  );
}

export default App;
