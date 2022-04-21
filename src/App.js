import './App.css';
import AppNavbar from './Components/AppNavbar.js';
import HeaderCarousel from './Components/HeaderCarousel.js';
import ProductCards from './Components/ProductCards.js';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductPage from './Pages/ProductPage';
import AllProductsPage from './Pages/AllProductsPage';
import ProductsByDepartment from './Pages/ProductsByDepartment';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <Router>
        <div className="App">
          <div className="Page">
            <AppNavbar name="Jarvis Foods" />
            <Switch>
              <Route path="/products" component={AllProductsPage} />
              <Route path="/products/:department" component={ProductsByDepartment} />
              <Route path="/product/:upc" component={ProductPage} />
              <Route path="/" component={HomePage} />
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
