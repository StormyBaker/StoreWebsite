import './App.css';
import AppNavbar from './Components/AppNavbar.js';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductPage from './Pages/ProductPage';
import AllProductsPage from './Pages/AllProductsPage';
import HomePage from './Pages/HomePage';
import { AccountProvider } from './DataAPI/CTXProvider';
import MyAccount from './Pages/MyAccount';
import ShoppingList from './Pages/ShoppingList';
import ProductDemand from './Pages/ProductDemand';
import AddProductPage from './Pages/AddProductPage';

function App() {
  return (
    <AccountProvider>
      <Router>
          <div className="App">
            <div className="Page">
              <AppNavbar name="Jarvis Foods" />
              <main>
                <Switch>
                  <Route path="/products/:department?" component={AllProductsPage} />
                  <Route path="/product/:upc" component={ProductPage} />
                  <Route path="/account" component={MyAccount} />
                  <Route path="/list" component={ShoppingList} />
                  <Route path="/admin/demand" component={ProductDemand} />
                  <Route path="/" component={HomePage} />
                </Switch>
              </main>
              <footer>
                <div>
                  <p>&copy; Jarvis Foods 2022</p>
                </div>
              </footer>
            </div>
          </div>
      </Router>
      </AccountProvider>
  );
}

export default App;
