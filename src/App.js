import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import NotFound from "./components/NotFound";
import ProtectedRoute from './components/ProtectedRoute';

import './App.scss';

function App() {
  return (
    <div className="App">
          <BrowserRouter>
          <Switch>
          <ProtectedRoute exact path="/components/Dashboard" component={Dashboard} />
          <Route exact path="/" component={Login} />
          <Route path="*" component={NotFound} />
          </Switch>
          </BrowserRouter>
        </div>
  );
}

export default App;