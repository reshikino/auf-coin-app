import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WalletConnectPage from './components/WalletConnectPage';
import LanguageSelection from './components/LanguageSelection';
import Terms from './components/Terms';
import LoadingScreen from './components/LoadingScreen';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={WalletConnectPage} />
        <Route path="/language" component={LanguageSelection} />
        <Route path="/terms" component={Terms} />
        <Route path="/loading" component={LoadingScreen} />
      </Switch>
    </Router>
  );
}

export default App;
