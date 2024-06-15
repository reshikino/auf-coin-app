import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import WalletConnectPage from './WalletConnectPage';
import LanguageSelection from './LanguageSelection';
import TermsPage from './TermsPage';
import TestPage from './TestPage';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={WalletConnectPage} />
      <Route path="/language-selection" component={LanguageSelection} />
      <Route path="/terms" component={TermsPage} />
      <Route path="/test" component={TestPage} />
    </Switch>
  );
}

export default App;
