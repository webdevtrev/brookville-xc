import { HashRouter as Router, Switch, Route } from "react-router-dom";

//Import Components
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

//Import Pages
import Home from './Pages/Home/Home'
import Contact from './Pages/Contact/Contact'
import Info from './Pages/Info/Info'

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* Followed Alex's structure to potentiall add pages with no header or footer */}
          <Route path="*">
            <Header />
            <div className="Container">
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/contact">
                  <Contact />
                </Route>
                <Route exact path="/info">
                  <Info />
                </Route>
              </Switch>
            </div>
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
