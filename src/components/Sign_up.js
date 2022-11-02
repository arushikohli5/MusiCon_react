import React from 'react';
import "./detail_style.css";

class SignUpComp extends React.Component {
    render(){
        return(
            <div>
                <div className="sign_up">
                    <div className = "contact-us-box2">
                        <h1 class="sign_up_heading">Welcome!</h1>
                        <div className="organiser-button">
                            <button className="btn">Sign up as an Organiser</button>
                        </div>
                        <p className="or">- OR -</p>
                        <div className="band-button">
                            <button className="btn">Sign up as an Band</button>
                        </div>
                        <p className="last">Already have a account?<span class="link"><a href=""> Sign in </a></span></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUpComp;
