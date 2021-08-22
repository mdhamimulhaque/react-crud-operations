import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import UserContext from './components/UserContext/UserContext';
import Home from './components/Home/Home';
import Error from './components/Error/Error';
import Read from './components/Read/Read';
import Delete from './components/Delete/Delete';
import Create from './components/Create/Create';
import Update from './components/Update/Update';

function App() {
  return (
    <div className="App">
       <UserContext>
          <Router>
            <Switch>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/read/:id">
                <Read />
              </Route>
              <Route path="/update/:id">
                <Update />
              </Route>
              <Route path="/delete/:id">
                <Delete />
              </Route>
              <Route path="/create">
                <Create />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="*">
                <Error />
              </Route>
            </Switch>
          </Router>
       </UserContext>
    </div>
  );
}

export default App;
