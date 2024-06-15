import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WalletConnectPage from './WalletConnectPage';
import LanguageSelection from './LanguageSelection';
import TermsPage from './TermsPage';
import LoadingScreen from './LoadingScreen';
import TestPage from './TestPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<WalletConnectPage />} />
        <Route path='/language-selection' element={<LanguageSelection />} />
        <Route path='/terms' element={<TermsPage />} />
        <Route path='/loading' element={<LoadingScreen />} />
        <Route path='/test' element={<TestPage />} />
      </Routes>
    </Router>
  );
};

export default App;
