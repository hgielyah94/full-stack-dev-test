import './App.scss';
import { useState } from 'react';
import SignIn from "./SignIn";
import ReactDOM from 'react-dom';
import Dashboard from "./Dashboard";
import NotFound from "./NotFound";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <div className="App">
          <BrowserRouter>
          <Switch>
          <Route exact path="/" component={SignIn} />
          <ProtectedRoute exact path="/Dashboard" component={Dashboard} isAuth={true} />
          <Route path="*" component={NotFound} />
          </Switch>
          </BrowserRouter>
        </div>
  );
}

export default App;
const rootElement = document.getElementById("root");
ReactDOM.render(<BrowserRouter><SignIn /></BrowserRouter>, rootElement);