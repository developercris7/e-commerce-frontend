import React, { useContext } from "react";
import Styles from "../Assets/css/fullviewproduct.module.css";
import { Navbar } from "../Components/Navbar";
import ProductImageSlider from "../Components/ProductImageSlider";
import ProductSize from "../Components/ProductSize";
import Counter from "../Components/Counter";
import { FaBagShopping, FaRegHeart } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import { DataContext } from "../Context/ContextAPI";

const FullViewProduct = async () => {
  const {id} = useParams();  
  const {products} = useContext(DataContext)
  const product = await products.find((product)=> product._id === Number(id))

  return (
    <>
      <Navbar />
      <main>
        <div className="row mx-auto mt-lg-5 mt-2">
          <div className="col-lg-6 ">
            <ProductImageSlider productImages={product.productImages} />
          </div>
          <div className="col-lg-6">
            <div>
              <p className={Styles.ProductName}>{product.productName}</p>
              <p className={Styles.ProductDes}>{product.productDescription}</p>
              <p className={Styles.ProductRatings}>
                {product.ratings} <span>★</span>
              </p>
            </div>
            <hr />
            <div className={Styles.ProductPriceSection}>
              <span className={Styles.ProductPrice}>RS.{product.productPrice}</span>
              <span className={Styles.ProductMrpPrice}>RS.{product.productMrpPrice}</span>
              <span className={Styles.ProductDiscount}>
                {product.productDiscountPerentage}% OFF
              </span>
            </div>
            <p className={Styles.taxText}>inclusive all taxes</p>

            <div className={Styles.componentWrapper}>
            <div>
                <p className={Styles.componentHead}>QTY</p>
                <Counter />
              </div>
              <div>
                <p className={Styles.componentHead}>SELECT SIZE</p>
                <ProductSize />
              </div>
            </div>

            <div className={Styles.buttonsSection}>
              {product.productInCart ?      <button className={Styles.bagBtn}> <FaBagShopping /> Go to Bag</button> : <button className={Styles.bagBtn}> <FaBagShopping /> Add to Bag</button>}
              {product.productInWishlist ?     <button className={Styles.wishlistBtn}><FaRegHeart /> Go to Wishlist</button> :<button className={Styles.wishlistBtn}><FaRegHeart /> Add to Wishlist</button>}
            
              
              
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default FullViewProduct;
