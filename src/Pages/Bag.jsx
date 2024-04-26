import React from "react";
import Styles from "../Assets/css/bag.module.css";
import { Navbar } from "../Components/Navbar";
import { Products } from "../Context/Data";
import { FaTrashAlt } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import Counter from "../Components/Counter";
import ProductSize from "../Components/ProductSize";
import { Link } from "react-router-dom";

const Bag = () => {
  return (
    <>
      <Navbar />
      <main>
        <div className="row">
          <div className="col-lg-6">
            {Products.map((product) => (
              <div
                key={product.product_id}
                className={`${Styles.productWrapper}`}
              >
                <Link
                  className="productLink"
                  to={`/product/${product.product_id}`}
                >
                  <div className={`${Styles.productImg}`}>
                    <img
                      src={product.product_images[0]}
                      alt="productImg"
                      className="img-fluid"
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

                  <div className={`${Styles.productComponents}`}>
                    <Counter />
                    <ProductSize />
                  </div>

                  <div className={`${Styles.productButtons}`}>
                    <button className={`${Styles.moveBtn}`}>
                      <FaRegHeart />
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
          </div>
          <div className="col-lg-6">
            <div className={`${Styles.priceContainer}`}>
              <h3>price details</h3>
              <hr />
              <div className={`${Styles.priceText}`}>
                <span>Total MRP (Inc. tax)</span>
                <span>Rs.1200</span>
              </div>
              <div className={`${Styles.priceText}`}>
                <span>Total MRP (Inc. tax)</span>
                <span>Rs.1200</span>
              </div>
              <div className={`${Styles.priceText}`}>
                <span>Total MRP (Inc. tax)</span>
                <span>Rs.1200</span>
              </div>
              <hr />
              <div className={`${Styles.priceText}`}>
                <span>Total MRP (Inc. tax)</span>
                <span>Rs.1200</span>
              </div>

              <button className={`${Styles.buyBtn}`}>Buy Now</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Bag;
