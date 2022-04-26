import React from 'react';
import "./style.css";
import d1 from"./imges/d1.png"
import pop from "./imges/pop.png"
import folk from "./imges/folk.png"
import instruments from "./imges/instruments.png"
import rock from "./imges/rock.png"
import jazz from "./imges/jazz.png"
import d2 from "./imges/d2.png"
import $ from "jquery";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


//const CategoryComp=()=>{ 
class CategoryComp extends React.Component {
    render(){
    var settings = {
        dots: true,
        infinite: true,
        speed: 150,
        slidesToShow: 5,
        slidesToScroll: 2,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 750,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return(
        <section className="categories">
            <div className="container-fluid">
                <div className="categories-text"><p>Explore <span className="blue">Bands By Category</span></p></div>
                {/* <!--confetti image1--> */}
                <div className="confetti1"><img src={d1} className="image responsive"/></div>
                {/* <!--------lightslider----------> */}
                <Slider {...settings}>
                <div>
                    <div className="item-a">
                        <div className="box">
                            <p className="music">
                                <img src={pop} className="model"/>
                                {/* <!--Details--> */}
                                <div className="details">
                                    <p className="details-text">
                                        <span className="heading">Pop</span><br/>
                                        <p>Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae</p>
                                    </p>
                                </div>
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="item-b">
                        <div className="box">
                            <p className="music">
                                <img src={folk} className="model"/>
                                {/* <!--Details--> */}
                                <div className="details">
                                    <p>
                                        <span className="heading">Folk</span><br/>
                                        <p>Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae</p>
                                    </p>
                                </div>
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="item-c">
                        <div className="box">
                            <p className="music">
                                <img src={instruments} className="model"/>
                                {/* <!--Details--> */}
                                <div className="details">
                                    <p>
                                        <span className="heading">Intrument</span><br/>
                                        <p>Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae</p>
                                    </p>
                                </div>
                            </p>
                        </div>
                    </div>
                </div>
                <div>   
                    <div className="item-d">
                        <div className="box">
                            <p className="music">
                                <img src={rock} className="model"/>
                                {/* <!--Details--> */}
                                <div className="details">
                                    <p>
                                        <span className="heading">Rock</span><br/>
                                        <p>Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae</p>
                                    </p>
                                </div>
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="item-e">
                        <div className="box">
                            <p className="music">
                                <img src={jazz} className="model"/>
                                {/* <!--Details--> */}
                                <div className="details">
                                    <p>
                                        <span className="heading">Jazz</span><br/>
                                        <p>Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae</p>
                                    </p>
                                </div>
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="item-f">
                        <div className="box">
                            <p className="music">
                                <img src={rock} className="model"/>
                                {/* <!--Details--> */}
                                <div className="details">
                                    <p>
                                        <span className="heading">Hip Hop</span><br/>
                                        <p>Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae</p>
                                    </p>
                                </div>
                            </p>
                        </div>
                    </div>
                </div>
                </Slider>
                <div className="confetti2"><img src={d2} className="image responsive"/></div>

                
            </div>
        </section>
    );
}
}
    
export default CategoryComp;