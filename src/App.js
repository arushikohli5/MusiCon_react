import './components/loder'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link, } from 'react-router-dom';
import DetailContactUsComp from './components/detail_contact_us';
import HomeComp from './components/home';
import SignUpComp from './components/Sign_up';
import SignInComp from './components/Sign_in';
import DetailAboutUsComp from './components/detail_aboutUs';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/contact" element={<DetailContactUsComp/>} >
          </Route>
          <Route path="/" exact element={<HomeComp/>}>
          </Route>
          <Route path="/sign_up" exact element={<SignUpComp/>}>
          </Route>
          <Route path="/sign_in" exact element={<SignInComp/>}>
          </Route>
          <Route path="/about-us" exact element={<DetailAboutUsComp/>}>
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
