import React, { Component } from "react";
import Slider from "react-slick";
import ActiveClientCard from "../../Dashboard/client-cards/ActiveClientCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slick.css";
import AllClientCard from "../../Dashboard/client-cards/AllClientCard";
import InactiveClientCard from "../../Dashboard/client-cards/InactiveClientCard";
class ProductSlider extends Component {

  
  // constructor() {
  //   super();
  // }

  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
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
          breakpoint: 912,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 540,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        
        <Slider {...settings}>
        <ActiveClientCard clientData={this.props.clientData} />
        <AllClientCard clientData={this.props.clientData}  />
        <InactiveClientCard clientData={this.props.clientData} />
        <ActiveClientCard clientData={this.props.clientData} />
        {/* <ProductCard /> */}

          {/* {this.props.items.map((item, index) => {
            //console.log(index, item,'www');
            return (
              <div key={index}>
                <ProductCard 
                title={item.title} 
                subtitle={item.subtitle} 
                client={item.client} 
                cardcolor={item.cardcolor}
                selectValue={this.props.selectValue}
                setSelectValue={this.props.setSelectValue}
                valueSelect={this.props.valueSelect}
                clientData={this.props.clientData}
                />
                <img src={slide.img} alt={`slide${index}`} />
              </div>
            );
          })} */}
        </Slider>
      </div>
    );
  }
}

export default ProductSlider;
