import React from 'react';
import "./detail_style.css";
import { BrowserRouter as Router, Routes, Route, Link, Redirect, Navigate,useNavigate} from 'react-router-dom';


class SignUpComp extends React.Component {
    render(){
        return(
            <div>
                <div className="sign_up">
                    <div className = "contact-us-box2">
                        <h1 class="sign_up_heading">Welcome!</h1>
                        <div className="organiser-button">
                        <Link to="/sign_up_organiser">
                            <button className="btn">Sign up as an Organiser</button>
                        </Link>
                        </div>
                        <p className="or">- OR -</p>
                        <div className="band-button">
                            <Link to="/sign_up_band">
                                <button className="btn">Sign up as a Band</button>
                            </Link>
                        </div>
                        <p className="last">Already have a account?<span class="link"><a href=""> Sign in </a></span></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUpComp;
