import logo from './logo.svg';
import './components/loder'
import Navbar from './components/Navbar';
import DetailContactUComps from './components/detail_contact_us'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link, } from 'react-router-dom';
import DetailContactUsComp from './components/detail_contact_us';
import HomeComp from './components/home';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/contact" element={<DetailContactUsComp/>} >
          </Route>
          <Route path="/" exact element={<HomeComp/>}>
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
