import React from 'react'
import './style.css'
import contactUs from "./imges/contact-us.png"
import $ from "jquery";

class ContactUsComp extends React.Component{
    render(){
        $(document).ready(function() {
        $("form input").on("blur input focus", function() {
            var $field = $(this).closest(".field");
            if (this.value) {
              $field.addClass("filled");
            } else {
              $field.removeClass("filled");
            }
          });
          
          $(".form_input").on("blur input focus", function() {
            var $field = $(this).closest(".field");
            if (this.value) {
              $field.addClass("filled");
            } else {
              $field.removeClass("filled");
            }
          });
      
          $("form input").on("focus", function() {
            var $field = $(this).closest(".field");
            if (this) {
              $field.addClass("filled");
            } else {
              $field.removeClass("filled");
            }
          });
          
          $(".form_input").on("focus", function() {
            var $field = $(this).closest(".field");
            if (this) {
              $field.addClass("filled");
            } else {
              $field.removeClass("filled");
            }
          });
        })
        return(
            <section className="contact-us">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 cont1">
                        <div className="text-heading">Contact Us</div>
                        <p className="line">Have an inquiry? We'll be happy to assist you</p>
                        <div className="contact-details">
                            <i className="fa fa-phone" aria-hidden="true"></i>
                            <span className="text">+9459283882<br/></span>
                            <i className="fa fa-envelope"></i>
                            <span className="text">shubhamtaneja2000@gmail.com<br/></span>
                            <i className="fa fa-map-marker" aria-hidden="true"></i>
                            <span className="text">sec9</span>

                        </div>
                        <div className="contact-us-image">
                            <img src={contactUs} className="image-responsive"/>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 cont2">
                        <div className="cont2-heading"><p>Fill In your details</p></div>
                        <div className="form form-group-row">
                            <form>
                                <div className="field col-xs-11 col-sm-11 col-md-11 col-lg-11">
                                    <label for="name">Name </label>
                                    <input type="text" name="name" id="name" required/>
                                </div>
                                <div className="field col-xs-11 col-sm-11 col-md-11 col-lg-11">
                                    <label for="email">Email </label>
                                    <input type="email" name="email" id="email" required/>
                                </div>
                                <div className="field col-xs-11 col-sm-11 col-md-11 col-lg-11">
                                    <label for="number">Number </label>
                                    <input type="number" name="number" id="number" required/>
                                </div>
                                <div className="field col-xs-11 col-sm-11 col-md-11 col-lg-11">
                                    <label for="message">Message </label>
                                    <textarea className="form_input" id="message" name="message" rows="2"></textarea>
                                </div>
                                <button className="btn">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        )
    }
}
export default ContactUsComp;