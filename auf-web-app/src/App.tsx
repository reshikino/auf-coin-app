import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WalletConnectPage from './components/WalletConnectPage';
import LanguageSelection from './components/LanguageSelection';
import Terms from './components/Terms';
import LoadingScreen from './components/LoadingScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WalletConnectPage />} />
        <Route path="/language" element={<LanguageSelection />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/loading" element={<LoadingScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
