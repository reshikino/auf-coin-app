import React from 'react';
import { Route, Switch } from 'react-router-dom';
import WalletConnectPage from './components/WalletConnectPage';
import LanguageSelection from './components/LanguageSelection';
import TermsAndConditions from './components/TermsAndConditions';
import LoadingScreen from './components/LoadingScreen';
import TestPage from './components/TestPage';

const App: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={WalletConnectPage} />
      <Route path="/language" component={LanguageSelection} />
      <Route path="/terms" component={TermsAndConditions} />
      <Route path="/loading" component={LoadingScreen} />
      <Route path="/test" component={TestPage} />
    </Switch>
  );
};

export default App;
