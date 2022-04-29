import logo from './logo.svg';
import './components/loder'
import Navbar from './components/Navbar';
import Home from './components/home'
import Category from './components/categories'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CategoryComp from './components/categories';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Category/>
    </div>
  );
}

export default App;
