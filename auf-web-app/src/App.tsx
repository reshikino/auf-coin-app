// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WalletConnectPage from './components/WalletConnectPage';
import LanguageSelection from './components/LanguageSelection';
import Terms from './components/Terms';
import LoadingScreen from './components/LoadingScreen';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={WalletConnectPage} />
        <Route path="/language-selection" component={LanguageSelection} />
        <Route path="/terms" component={Terms} />
        <Route path="/loading" component={LoadingScreen} />
      </Switch>
    </Router>
  );
};

export default App;
