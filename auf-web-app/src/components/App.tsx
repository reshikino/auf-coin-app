import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WalletConnectPage from './WalletConnectPage';
import LanguageSelection from './LanguageSelection';
import TermsOfService from './TermsOfService';
import ComingSoon from './ComingSoon';
import TestPage from './TestPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WalletConnectPage />} />
        <Route path="/language-selection" element={<LanguageSelection />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </Router>
  );
};

export default App;
