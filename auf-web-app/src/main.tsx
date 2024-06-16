import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './components/App';
import WalletConnectPage from './components/WalletConnectPage';
import LanguageSelectionPage from './components/LanguageSelectionPage';
import TermsPage from './components/TermsPage';
import LoadingPage from './components/LoadingPage';
import './index.css';

const rootElement = document.getElementById('root')!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/wallet-connect" element={<WalletConnectPage />} />
        <Route path="/language-selection" element={<LanguageSelectionPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/loading" element={<LoadingPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
