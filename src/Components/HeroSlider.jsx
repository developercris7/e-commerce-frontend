import React from "react";
import Slider from "react-slick";
import Style from '../Assets/css/hero.module.css'


function HeroSlider({ images }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <></>,
    nextArrow: <></>,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((img,index) => (
          <div className={`${Style.imageContainer}`} key={index}>
            <img src={img} alt="" className="w-100"/>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default HeroSlider;