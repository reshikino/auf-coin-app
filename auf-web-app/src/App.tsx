// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WalletConnectPage from './components/WalletConnectPage';
import LanguageSelection from './components/LanguageSelection';
import Terms from './components/Terms';
import LoadingScreen from './components/LoadingScreen';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WalletConnectPage />} />
        <Route path="/language-selection" element={<LanguageSelection />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/loading" element={<LoadingScreen />} />
      </Routes>
    </Router>
  );
};

export default App;
