import React from 'react'
import './style.css'

class FooterComp extends React.Component{
    render(){
        return(
            <section className="footer">
            <div className="container align-self-center">
                <div className="col-xs-12 col-lg-12 col-md-12 col-sm-12 align-self-center">
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fab fa-google-plus fa-lg"></i></a>
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fab fa-facebook-f fa-lg" size="lg"></i></a>
                        <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fab fa-linkedin-in fa-lg"></i></a>
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fab fa-twitter fa-lg"></i></a>
                        <a className="btn btn-social-icon btn-youtube" href="http://youtube.com/"><i className="fab fa-youtube fa-lg"></i></a>
                        <a className="btn btn-social-icon btn-envelope" href="mailto:"><i className="fa-solid fa-envelope fa-lg"></i></a>
                    </div>
                </div>

                <div className="footer-txt text-center footer-links">
                    <ul className="ml-auto">
                        <li><a href="">HOME</a></li>
                        <li><a href="">COMPANY</a></li>
                        <li><a href="">BLOG</a></li>
                        <li><a href="">CONTACT US</a></li>   
                    </ul>
                </div>

                            
                    <div className="col-xs-12 col-lg-12 col-md-12 col-sm-12 text-center">
                        <p className="footer-mark">  ©Copyright 2022 MusiCon</p>
                    </div>
            </div>
        </section>
        )
    }
}

export default FooterComp