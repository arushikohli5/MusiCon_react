import React from 'react';
import "./style.css";
import Navbar from '../components/Navbar'
import Category from '../components/categories'
import AboutUs from '../components/aboutUs'
import Organisers from '../components/organisers'
import ContactUs from '../components/contactUs'
import Footer from '../components/footer'


const HomeComp=()=>{
    return(
        <div>
            <Navbar/>
        <section className="slider text-center" id="slider">
            <div className="slider-overlay">
                <div className="slider-content">
                    <div className="text">
                        <h1><span className="t1">The Best Experience Of</span>
                            <br/><span className="t2">Music</span></h1><br/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae 
                            ligula <br/>placerat, eleifend ex non, vehicula libero. Suspendisse eget tellus 
                            lectus.
                        </p>
                    </div>

                    <div className="cta-div">
                        <button className="btn signup"><a href="./sign_up.html" className="btn1" target="_blank">SIGN UP</a></button>
                        <i className="fa-solid fa-circle-play" size="lg"></i>
                        <a href="." className="btn2">WATCH VEDIO</a>
                    </div>

                    <div className="performances">

                    </div>
                </div>
            </div>
        </section>
        <AboutUs/>
        <Category/>
        <Organisers/>
        <ContactUs/>
        <Footer/>
        </div>
    )}
    export default HomeComp;