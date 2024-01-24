import React from 'react';
import "./style.css";
import img from "./imges/4logo.png";
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route, Link, Redirect, Navigate, useNavigate } from 'react-router-dom';


class NavbarComp extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <nav className="navbar navbar-fixed-top navbar-dark navbar-expand-lg nava secondary">
                        <div className="container">
                            <div className="row">
                                {/*<!--for putting the logo--> */}
                                <div className="navbar-header">
                                    <a href="." className="navbar-brand"><img src={img} /></a>
                                    {/*<!--button for collapse--> */}
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                </div>

                                {/* <!--for navbar collapsing--> */}
                                <div className="nava collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                                    <ul className="nav navbar-nav navbar-right justify-content-end navi">
                                        <li><a href=""><Link to="/">Home</Link></a></li>
                                        <hr className='hr_line'></hr>
                                        <li><a href=""><Link to="/about-us"  >About Us</Link></a></li>
                                        <hr className='hr_line'></hr>
                                        <li><a href=""><Link to="/schedule"  >Schedule</Link></a></li>
                                        <hr className='hr_line'></hr>
                                        <li><a href=""><Link to="/contact"  >Contact US</Link></a></li>
                                        <hr className='hr_line'></hr>
                                        <li><a href=""  ><Link to="/sign_in"  ><span className="login">Sign In</span></Link></a></li>
                                        <hr className='hr_line'></hr>
                                        <li><a href=""  ><Link to="/sign_up"  ><span className=" login">Sign Up</span></Link></a></li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </nav>

                </div>
            </div>
        )
    }
}

export default NavbarComp;