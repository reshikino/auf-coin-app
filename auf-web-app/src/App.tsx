import React, { useState } from 'react';
import { TonConnectButton } from '@tonconnect/ui-react';
import { LanguageSelection, Terms, LoadingScreen } from './components';

function App() {
  const [isConnected, setIsConnected] = useState(false);
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handleConnect = () => {
    setIsConnected(true);
    setStep(2);
  };

  return (
    <div className="container">
      {step === 1 && (
        <div className="ton-connect-button">
          <TonConnectButton />
          <button onClick={handleConnect} className="next-button">Далее</button>
        </div>
      )}
      {step === 2 && <LanguageSelection onNext={handleNextStep} />}
      {step === 3 && <Terms onNext={handleNextStep} />}
      {step === 4 && <LoadingScreen />}
    </div>
  );
}

export default App;
