import logo from './logo.svg';
import './components/loder'
import Navbar from './components/Navbar';
import Home from './components/home'
import Category from './components/categories'
import AboutUs from './components/aboutUs'
import Organisers from './components/organisers'
import ContactUs from './components/contactUs'
import Footer from './components/footer'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link, } from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/contact" element={<ContactUs/>} >
          </Route>
          <Route path="/" exact element={<Navbar/>}>
          </Route>
        </Routes>
      </Router>
      {/* <Navbar/>
      <Home/>
      <Category/>
      <AboutUs/>
      <Organisers/>
      <ContactUs/>
      <Footer/> */}
    </>
  );
}

export default App;
