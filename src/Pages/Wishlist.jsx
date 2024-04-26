import React from "react";
import { Navbar } from "../Components/Navbar";
import Styles from "../Assets/css/wishlist.module.css";
import { Products } from "../Context/Data";
import { FaTrashAlt } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Wishlist = () => {
  return (
    <>
      <Navbar />
      <main>
        {Products.map((product) => (
          
            <div
              key={product.product_id}
              className={`${Styles.productWrapper}`}
            >
              <Link to={`/product/${product.product_id}`} className="productLink">
              <div className={`${Styles.productImg}`}>
                <img
                  src={product.product_images[0]}
                  alt="productImg"
                  className="img-fluid "
                />
              </div>
              </Link>
              <div className={`${Styles.productDetails}`}>
                <div className={`${Styles.productText}`}>
                  <p className={`${Styles.productName}`}>
                    {product.product_name}
                  </p>
                  <p className="m-0 my-md-2">{product.product_description}</p>
                </div>
                <div className={`${Styles.productPrices}`}>
                  <span className={`${Styles.productPrice}`}>
                    Rs.{product.price}
                  </span>
                  <span className={`${Styles.productMrpPrice}`}>
                    Rs.{product.mrp}
                  </span>
                  <span
                    className={`${
                      product.productStock ? "stockIn" : "stockOut"
                    }`}
                  >
                    In Stock
                  </span>
                </div>
                <div className={`${Styles.productButtons}`}>
                  <button className={`${Styles.moveBtn}`}>
                    <FaBagShopping />
                    <span>Move</span>
                  </button>
                  <button className={`${Styles.delBtn}`}>
                    <FaTrashAlt />
                    <span> Del</span>
                  </button>
                </div>
              </div>
            </div>
        ))}
      </main>
    </>
  );
};

export default Wishlist;
