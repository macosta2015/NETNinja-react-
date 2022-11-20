import Navbar from './Navbar'
import './index.css'
import Home from './Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  const title = "Welcome to the new blog"
  const likes=50;
  const link = "https://github.com"

  return (
    <Router>
      <div className="App">
      {/* The Navbar will always show as it is not in the switch statement */}
        <Navbar /> 
        <div className="content">
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
