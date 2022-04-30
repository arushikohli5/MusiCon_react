import React from 'react';
import "./style.css";
import arrow from "./imges/arrow.png"
import aboutUs from "./imges/abut-us.png"
import d3 from "./imges/d3.png"

class aboutUsComp extends React.Component {
    render(){
        return(
            <div>
            <div className="about-us">
                <div className="container">
                    <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 about-us-image">
                        <img src={aboutUs} className="image responsive"/>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 ">
                            <div className="about-us-text">
                            <div className="section-heading"><p>About<span className="blue"> MusiCon</span></p></div>
                            <p>Fusce justo mi, vehicula id arcu et, dapibus tristique lectus. Vivamus a elit sodales, tincidunt nunc non, maximus lacus. Fusce a augue sed dolor auctor iaculis vitae id mauris. Integer ut lectus non neque suscipit luctus. Mauris et erat id ipsum condimentum cursus. Sed tempus enim non massa mattis iaculis. In quis massa risus</p>
                            </div>
                            <div className="aboutus-button">
                                <button className="btn">Learn More <img src={arrow}/></button>
                            </div>
                    </div>  
                    
                    </div>
                </div>
                </div><br/>
                <div className="confetti3"><img src={d3} className="image-responsive"/></div>
                </div>
        );
    }
}

export default aboutUsComp;