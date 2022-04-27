import './App.css';
import AppNavbar from './Components/AppNavbar.js';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductPage from './Pages/ProductPage';
import AllProductsPage from './Pages/AllProductsPage';
import HomePage from './Pages/HomePage';

function App() {
  return (
      <Router>
          <div className="App">
            <div className="Page">
              <AppNavbar name="Jarvis Foods" />
              <main>
                <Switch>
                  <Route path="/products/:department?" component={AllProductsPage} />
                  <Route path="/product/:upc" component={ProductPage} />
                  <Route path="/" component={HomePage} />
                </Switch>
              </main>
              <footer>
                <p>Cool</p>
              </footer>
            </div>
          </div>
      </Router>
  );
}

export default App;
