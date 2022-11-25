import React from 'react';
import "./detail_style.css";
import img1 from "./imges/about-us-img-1.png"
import Navbar from '../components/Black-Navbar';

class DetailAboutUsComp extends React.Component {
    render(){
        return(
            <div className="about-us1">
                <div className='navbar-contact-us'><Navbar/></div>
                <img src={img1} className="img1 img-responsive"/>
                <p className="description">WHO WE ARE</p>
                <p className="sub-heading1">Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                    Suspendisse vitae ligula.
                </p>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and  industry. Lorem Ipsum has been the industry's standard text ever since the 1500s, 
                    when an unknown printer took of type.
                </p>
            </div>
        )
    }
}
export default DetailAboutUsComp;
