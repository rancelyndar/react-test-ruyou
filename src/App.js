import Palette from './pages/Palette'
import Form from './pages/Form'
import Header from './Header'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Form />
          </Route>
          <Route path="/palette">
            <Palette />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
