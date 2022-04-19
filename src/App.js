import './App.css';
import AppNavbar from './Components/AppNavbar.js';
import HeaderCarousel from './Components/HeaderCarousel.js';
import CardRow from './Components/CardRow.js';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductPage from './Pages/ProductPage';



function App() {
  return (
    <Router>
        <div className="App">
          <div className="Page">
            <AppNavbar name="Jarvis Foods" />
            <HeaderCarousel />
            <Switch>
              <Route path="/product/:upc" component={ProductPage} />
              <Route path="/" component={CardRow} />
            </Switch>
          </div>

          <footer>
            <p>Cool</p>
          </footer>
        </div>
    </Router>
  );
}

export default App;
