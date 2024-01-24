import React from 'react';
import "./detail_style.css";
import img1 from "./imges/about-us-img-1.png"
import Navbar from '../components/Black-Navbar';

class DetailAboutUsComp extends React.Component {
    render() {
        return (
            <div className='overflow'>
                <div className="about-us1">
                    <div className='navbar-contact-us'><Navbar /></div>
                    <div className='row'>
                        <div>

                        </div>
                        <div className=' col-xs-12 col-sm-12 col-md-6 col-lg-6 detail-about-us-image'>
                            <img src={img1} className="image responsive" />
                            <div className="box-about-us">
                                <p className='box-text'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae ligula placerat, eleifend ex non, vehicula libero.Suspendisse eget tellus lectus.
                                </p>
                                <p className='box-text-description'>
                                    Arushi Kohli<br></br>
                                    CEO
                                </p>
                            </div>
                        </div>
                        <div className=' col-xs-12 col-sm-12 col-md-5 col-lg-5 detail-about-us-txt'>
                            <div className='row'>
                                {/* <div class="line"></div> */}

                                <div className="description">WHO WE ARE</div>
                            </div>
                            <div className="sub-heading1">Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit.
                                Suspendisse vitae ligula.
                            </div>
                            <div class="description-text">
                                Lorem Ipsum is simply dummy text of the printing and  industry. Lorem Ipsum has been the industry's standard text ever since the 1500s,
                                when an unknown printer took of type.
                            </div>

                        </div>

                    </div>

                    <div className='row'>
                        <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 detail-about-us-txt our-services'>
                            <div className="description ">OUR SERVICES</div>
                            <div className="sub-heading1">Grooves & Bands
                                Clubs & Friends
                            </div>
                            <div className="description-text">
                                Lorem Ipsum is simply dummy text of the printing and  industry. Lorem Ipsum has been the industry's standard text ever since the 1500s,
                                when an unknown printer took of type.
                            </div>
                        </div>
                        <div className="box4 container-fluid">
                            <div className='row mx-0'>
                                <div className="box4-1 col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                    <span>Public Performances</span>
                                </div>
                                <div className="box4-2 col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                    <span>Private Performances</span>
                                </div>
                            </div>
                            <div className="row mx-0">
                                <div className="box4-3 col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                    <span>Club Recognitions</span>
                                </div>
                                <div className="box4-4 col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                    <span>Band Recognitions</span>
                                </div>
                            </div>
                        </div>


                        <div className=' col-xs-12 col-sm-12 col-md-6 col-lg-6 detail-about-us-image'>
                            <img src={img1} className="image responsive" />
                            <div className="box-about-us">
                                <p className='box-text'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae ligula placerat, eleifend ex non, vehicula libero.Suspendisse eget tellus lectus.
                                </p>
                                <p className='box-text-description'>
                                    Arushi Kohli<br></br>
                                    CEO
                                </p>
                            </div>
                        </div>
                        <div className=' col-xs-12 col-sm-12 col-md-5 col-lg-5 detail-about-us-txt'>
                            <div className='row'>

                                <div className="description">OUR VALUE</div>
                            </div>
                            <div className="sub-heading1">Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit.
                                Suspendisse vitae ligula.
                            </div>
                            <div class="description-text">
                                Lorem Ipsum is simply dummy text of the printing and  industry. Lorem Ipsum has been the industry's standard text ever since the 1500s,
                                when an unknown printer took of type.
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default DetailAboutUsComp;