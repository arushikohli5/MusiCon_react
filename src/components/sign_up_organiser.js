import React from 'react';
import "./detail_style.css";

class SignUpOrganiserComp extends React.Component {
    render(){
        return(
            <div>
                <div className='sign_up_organiser'>
                    <div className="sign_in">
                        <div className="sign_in_box text-center">
                            <div className="heading">
                                Create Account
                            </div><button className="btn button1"><i className="fab fa-google"/><span className="btn-text">Sign In with Google</span></button>
                            <button className="btn button2"><i className="fab fa-facebook-f"></i><span className="btn-text">Sign In with facebook</span></button>
                            <p className="or">- OR -</p>
                            <div className="row">
                                <div className="field col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <input type="text" name="band_name" id="band_name" placeholder="Band Name" required/>
                                </div>
                                <div className="field col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <input type="email" name="email" id="email" placeholder="Email Address" required/>
                                </div>
                                <div className="field col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <input type="password" name="password" id="password" placeholder="Password" required/>
                                </div>
                            </div>
                            <button className="btn sign-in-btn">Create Account</button>
                            <div className=''></div>
                        </div>
                    </div>
                    </div>
            </div>
        );
    }
}

export default SignUpOrganiserComp;

