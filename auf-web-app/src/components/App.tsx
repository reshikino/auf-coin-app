import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WalletConnectPage from './WalletConnectPage';
import LanguageSelectionPage from './LanguageSelectionPage';
import TermsPage from './TermsPage';
import LoadingPage from './LoadingPage';
import TestPage from './TestPage';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={WalletConnectPage} />
      <Route path="/language" component={LanguageSelectionPage} />
      <Route path="/terms" component={TermsPage} />
      <Route path="/loading" component={LoadingPage} />
      <Route path="/test" component={TestPage} />
    </Switch>
  </Router>
);

export default App;
