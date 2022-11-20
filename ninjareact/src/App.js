import Navbar from './Navbar'
import './index.css'
import Home from './Home'
import Create from './Create'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
      {/* The Navbar will always show as it is not in the switch statement */}
        <Navbar /> 
        <div className="content">
          {/* It is always a good idea to sorround the components/routes with the switch components. */}
          <Switch>
            {/* You need to add the exact part so that it does not mess uo the routes. */}
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
