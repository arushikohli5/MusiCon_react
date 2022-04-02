import React from 'react';
import "./style.css";
import img from "./imges/4logo.png";
import 'bootstrap/dist/css/bootstrap.min.css'

const NavbarComp=()=>{
    return(
            <div>
            <nav className="navbar navbar-fixed-top navbar-inverse navbar-expand-lg nava">
            <div className="container">
                <div className="row">
                {/* <!--for putting the logo--> */}
                {/* <div className="navbar-header">
                    {/* <a href="." className="navbar-brand"><img src="imges/4logo.png"/></a> 

                    {/* <!--button for collapse--> *
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navi">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                </div> */}

                {/* <!--for navbar collapsing--> */}
                <div className="nava collapse navbar-collapse" id="navi">
                    {/* <!--navigation menus--> */}
                    <ul className="nav navbar-nav navbar-right ml-auto">
                        <li><a href="">Home</a></li>
                        <li><a href="">About Us</a></li>
                        <li><a href="">Shedule</a></li>
                        <li><a href="">Contact US</a></li>   
                        <li><a href="" target="_blank"><span className="login">Login</span></a></li>
                        <li><a href="./sign_up.html" target="_blank"><span className=" login">Sign Up</span></a></li>
                    </ul>
                </div>

            </div>
            </div>
        </nav>
            
        </div>
    )
}

export default NavbarComp;