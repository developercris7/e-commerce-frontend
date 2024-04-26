import React from "react";
import Styles from '../Assets/css/product.module.css'
import { Link } from "react-router-dom";


const Product = ({ product }) => {
  return (
    <Link className="productLink" to={`/product/${product._id}`}>
        <div className={`${Styles.productContainer}`}>
      <div className={`${Styles.productImgSection}`}>
        <img src={product.productImages[0]} alt="" className="img-fluid" />
        <div className={`${Styles.productRatings}`}>
          <span>{product.customerRatings}</span>
          <span>★</span>
        </div>
      </div>

      <div className={`${Styles.productDeatils}`}>
        <span className={`${Styles.productName}`}>{product.productName}</span>
        <span className={`${Styles.productDescription}`}>{product.productDescription.substr(0,35)}...</span>
      </div>
      <div>
        <span className={`${Styles.productPrice}`} >Rs.{product.productPrice}</span>
        <span className={`${Styles.productMrpPrice}`}>Rs.{product.productMrpPrice}</span>
        <span className={`${Styles.productOffer}`}>{product.productDiscountPercentage} </span>
        {/* {product.discount} */}
      </div>
    </div>
    </Link>

  );
};

export default Product;