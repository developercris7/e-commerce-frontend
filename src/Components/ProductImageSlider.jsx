import React, { useRef } from "react";
import Slider from "react-slick";
import { HiMiniArrowSmallRight, HiMiniArrowSmallLeft } from "react-icons/hi2";
import Styles from '../Assets/css/productimageslider.module.css'

function ProductImageSlider({ productImages }) {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <></>,
    nextArrow: <></>,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <div className="slider-container mx-auto">
      <Slider
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...settings}
      >
        {productImages.map((img) => (
          <div className={`${Styles.productImageContainer}`}>
            <img src={img} alt="" className="img-fluid mx-auto " />
          </div>
        ))}
      </Slider>
      <div className={Styles.sliderButtonContainer}>
        <HiMiniArrowSmallLeft className={`${Styles.button}`} onClick={previous} />
        <HiMiniArrowSmallRight className={`${Styles.button}`} onClick={next} />
      </div>
    </div>
  );
}

export default ProductImageSlider;