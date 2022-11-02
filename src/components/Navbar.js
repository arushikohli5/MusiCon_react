import React from 'react';
import "./style.css";
import img from "./imges/4logo.png";
import 'bootstrap/dist/css/bootstrap.min.css'
import $ from "jquery";
import { BrowserRouter as Router, Routes, Route, Link, Redirect, Navigate,useNavigate} from 'react-router-dom';
import Home from '../components/home'
import Category from '../components/categories'
import AboutUs from '../components/aboutUs'
import Organisers from '../components/organisers'
import ContactUs from '../components/contactUs'
import Footer from '../components/footer'


const NavbarComp = () => {
    $(window).scroll(function () {
        "use strict"
        var top = $(window).scrollTop();
        if (top >= 80) {
            $(".nava").addClass("secondary");
        }
        else
            if ($(".nava").hasClass("secondary")) {
                $(".nava").removeClass("secondary");
            }
    });
    return (
        <div>
        <div>
            <nav className="navbar navbar-fixed-top navbar-inverse navbar-expand-lg nava">
                <div className="container">
                    <div className="row">
                        {/*<!--for putting the logo--> */}
                        <div className="navbar-header">
                            <a href="." className="navbar-brand"><img src={img} /></a>
                            {/*<!--button for collapse--> */}
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                                <i className="fa-solid fa-dash"></i>
                            </button>
                        </div>

                        {/* <!--for navbar collapsing--> */}
                        <div className="nava collapse navbar-collapse justify-content-end" id="navbarTogglerDemo01">
                            {/* <!--navigation menus--> */}
                            <ul className="nav navbar-nav navbar-right justify-content-end navi">
                                <li><a href=""><Link to="/">Home</Link></a></li>
                                <li><a href=""><Link to="/about-us" target="_blank">About Us</Link></a></li>
                                <li><a href=""><Link to="/schedule" target="_blank">Schedule</Link></a></li>
                                <li><a href=""><Link to="/contact" target="_blank">Contact US</Link></a></li>
                                <li><a href="" target="_blank"><Link to="/sign_in" target="_blank"><span className="login">Login</span></Link></a></li>
                                <li><a href="" target="_blank"><Link to="/sign_up" target="_blank"><span className=" login">Sign Up</span></Link></a></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </nav>

        </div>
        {/* <Home/>
        <AboutUs/>
        <Category/>
        <Organisers/>
        <ContactUs/>
        <Footer/> */}
        </div>
    )
}

export default NavbarComp;