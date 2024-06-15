import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WalletConnectPage from './components/WalletConnectPage';
import LanguageSelection from './components/LanguageSelection';
import TermsAndConditions from './components/TermsAndConditions';
import LoadingScreen from './components/LoadingScreen';
import TestPage from './components/TestPage';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={WalletConnectPage} />
        <Route path="/language" component={LanguageSelection} />
        <Route path="/terms" component={TermsAndConditions} />
        <Route path="/loading" component={LoadingScreen} />
        <Route path="/test" component={TestPage} />
      </Switch>
    </Router>
  );
};

export default App;
