import './App.css';
import AppNavbar from './Components/AppNavbar.js';
import HeaderCarousel from './Components/HeaderCarousel.js';
import CardRow from './Components/CardRow.js';



function App() {
  return (
    <div className="App">
      <div className="Page">
        <AppNavbar name="Jarvis Foods" />
        <HeaderCarousel />
        <CardRow />
      </div>

      <footer>
        <p>Cool</p>
      </footer>
    </div>
  );
}

export default App;
