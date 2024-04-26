import React from "react";
import { Navbar } from "../Components/Navbar";
import Style from "../Assets/css/hero.module.css";
import HeroSlider from "../Components/HeroSlider";
import {
  Products,
  heroSliderImages,
  heroSliderMobileImages,
  shopByCategoriesData,
} from "../Context/Data";
import CategoryLink from "../Components/CategoryLink";
import Product from "../Components/Product";

const Hero = () => {
 
  return (
    <>
      <Navbar />
      <main>
        <div className="d-none d-md-block">
          <HeroSlider images={heroSliderImages} />
        </div>

        <div className="d-md-none">
          <HeroSlider images={heroSliderMobileImages} />
        </div>

        <div className="m-10">
          <h3>Shop By Category</h3>

          <div className={`${Style.categoryWrapper}`}>
            {shopByCategoriesData.map((data, index) => (
              <CategoryLink
                key={index}
                image={data.coverImg} 
                name={data.name}
                path={data.path}
              />
            ))}
          </div>
        </div>

        <div className="m-10">
          <h3>Products for you</h3>

          <div className={`${Style.productsSection}`}>
            {Products.map((product, index) => (
              <Product product={product} key={index} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
