import React from 'react';
import "./style.css";
import arrow from "./imges/arrow.png"
import OrganisersImage from"./imges/organisers-image.png"
import d4 from "./imges/d4.png"

class OrganisersComp extends React.Component {
    render(){
        return(
            <div>
                <section className="organisers">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-5 col-md-5 col-lg-5">
                                <div className="organisers-text">
                                    <div className="section-heading"><p>Our <span className="blue">Organizers</span></p></div>
                                    <p>Fusce justo mi, vehicula id arcu et, dapibus tristique lectus. Vivamus a elit sodales, tincidunt nunc non, maximus lacus. Fusce a augue sed dolor auctor iaculis vitae id mauris. Integer ut lectus non neque suscipit luctus. Mauris et erat id ipsum condimentum cursus. Sed tempus enim non massa mattis iaculis. In quis massa risus</p>
                                    <div className="organisers-button">
                                        <button className="btn">View All Organizers <img src={arrow}/></button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-7 col-md-7 col-lg-7">
                                <div className="organisers-image"><img src={OrganisersImage} className="image-responsive"/></div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="confetti4"><img src={d4} className="image-responsive"/></div>
            </div>
        );
    }
}

export default OrganisersComp;