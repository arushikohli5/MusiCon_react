import logo from './logo.svg';
import './components/loder'
import Navbar from './components/Navbar';
import Home from './components/home'
import Category from './components/categories'
import AboutUs from './components/aboutUs'
import Organisers from './components/organisers' 
import ContactUs from './components/contactUs'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Category/>
      <AboutUs/>
      <Organisers/>
      <ContactUs/>
    </div>
  );
}

export default App;
