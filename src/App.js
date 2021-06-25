import './App.scss';
import Login from "./components/Login";
import ReactDOM from 'react-dom';
import Dashboard from "./components/Dashboard";
import NotFound from "./components/NotFound";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ProtectedRoute } from './components/ProtectedRoute';

function App() {
  return (
    <div className="App">
          <BrowserRouter>
          <Switch>
          <Route exact path="/" component={Login} />
          <ProtectedRoute exact path="/components/Dashboard" component={Dashboard} />
          <Route path="*" component={NotFound} />
          </Switch>
          </BrowserRouter>
        </div>
  );
}

export default App;
const rootElement = document.getElementById("root");
ReactDOM.render(<BrowserRouter><Login /></BrowserRouter>, rootElement);