import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import WalletConnectPage from './components/WalletConnectPage';
import LanguageSelectionPage from './components/LanguageSelectionPage';
import TermsOfServicePage from './components/TermsOfServicePage';
import ComingSoonPage from './components/ComingSoonPage';
import TestPage from './components/TestPage';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={WalletConnectPage} />
        <Route path="/language-selection" component={LanguageSelectionPage} />
        <Route path="/terms-of-service" component={TermsOfServicePage} />
        <Route path="/coming-soon" component={ComingSoonPage} />
        <Route path="/test-page" component={TestPage} />
      </Switch>
    </Router>
  );
}
