import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './components/App';
import WalletConnectPage from './components/WalletConnectPage';
import LanguageSelection from './components/LanguageSelection';
import TermsPage from './components/TermsPage';
import TestPage from './components/TestPage';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/" exact component={WalletConnectPage} />
        <Route path="/language" component={LanguageSelection} />
        <Route path="/terms" component={TermsPage} />
        <Route path="/app" component={App} />
        <Route path="/test" component={TestPage} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
