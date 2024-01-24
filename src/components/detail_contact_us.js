import React from 'react'
import './style.css'
import Navbar from '../components/Black-Navbar';
import Footer from '../components/footer'
import map from "./imges/setail_about_us_map.png"

class DetailContactUsComp extends React.Component {
  render() {

    return (
      <div className="detail_contact">
        <div className='navbar-contact-us'><Navbar /></div>
        <section className="detail-contact-us container-fluid">
          {/* <div className="confetti6"><img src={d6} className="image responsive"/></div> */}
          <div className="contact-us-box">
            <div className="detail-contact-heading text-center">
              Get In Touch
            </div>
            <div className="row ">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 detail-contact-us-box1">
                <div className="detail-cont1-heading"><p>Leave us a message</p></div>
                <div className="detail-cont1 form form-group-row">
                  <form>
                    <div className="detail-cont-1">
                      <div className="field col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <label for="name"></label>
                        <input type="text" name="name" id="name" placeholder="Name" required />
                      </div>
                      <div className="field col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <label for="email"> </label>
                        <input type="email" name="email" id="email" placeholder="Email" required />
                      </div>
                      <div className="field col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <label for="message"></label>
                        <textarea className="form_input" id="message" placeholder="Message" name="message" rows="2"></textarea>
                      </div>
                      <div className='button-align'>
                        <button className="btn detail-cont-btn">Save</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 detail-contact-us-box2">
                <div className='temp'>
                  <i className="fa fa-map-marker-alt"></i>
                  <span className="text">Infomation technologies building,
                    Victoria Island, Lagos, Nigeria.</span><br></br>
                </div>
                <div className='temp'>
                  <i className="fa fa-phone"></i>
                  <span className="text">+234 081-1236-4568</span><br></br>
                </div>
                <div className='templast'>
                  <i className="fa fa-envelope"></i>
                  <span className="text">hello@info.com.ng<br /></span><br></br>
                </div>
                <div className='icons detail-cont-us'>
                  <i className="fab fa-youtube fa-lg"></i>
                  <i className="fab fa-facebook-f fa-lg" ></i>
                  <i className="fab fa-twitter fa-lg"></i>
                  <i class="fab fa-instagram"></i>
                </div>
                <img src={map} className="map" />
              </div>
            </div>
          </div>
        </section>
        <div class="detail-contact-us-footer"><Footer /></div>
      </div>
    )
  }
}
export default DetailContactUsComp;