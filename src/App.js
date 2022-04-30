import logo from './logo.svg';
import './components/loder'
import Navbar from './components/Navbar';
import Home from './components/home'
import Category from './components/categories'
import AboutUs from './components/aboutUs'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CategoryComp from './components/categories';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Category/>
      <AboutUs/>
    </div>
  );
}

export default App;
