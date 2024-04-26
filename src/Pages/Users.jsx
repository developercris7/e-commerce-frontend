import React, { useState } from "react";
import Styles from "../Assets/css/admin.module.css";
import Style from "../Assets/css/wishlist.module.css"

import { LuActivitySquare } from "react-icons/lu";
import { MdBlock } from "react-icons/md";
import { IoCaretBack } from "react-icons/io5";
import { FaRegHeart, FaBagShopping } from "react-icons/fa6";
import { Products } from "../Context/Data";
const Users = () => {
  const [nav, setNav] = useState(false);
   const product = Products[0];
  const [bagItemsShow,setBagItemsShow] = useState(null)
  const arr = [1,1,1]
  return (
    <div className={`${Styles.adminElements}`}>
      <h3>Users</h3>

      {nav ? (
       <div>
          <button className={Styles.backBtn} onClick={() => setNav(false)}>
            <IoCaretBack /><span>Back</span></button>

            <div className={`${Styles.userWrapper}`}>
          <div className={`${Styles.userAccount}`}>
            <p className={`${Styles.logoText}`}>V</p>
          </div>
          <div className={`${Styles.userInfoWrapper}`}>
            <div className={`${Styles.userInfo}`}>
              <span>Name : Cristiano</span>
              <br />
              <span>Email &nbsp;: devcris@gmail.com</span>
            </div>
            <div className={`${Styles.userButtons}`}>
              <button className={`${Styles.bagButton}`} >
                {" "}
                <FaBagShopping />
                <span>Bag</span>
              </button>
              <button className={`${Styles.wishlistButton}`}>
                <FaRegHeart /> <span>Wishlist</span>
              </button>
            </div>
          </div>
        </div>

        <hr />
      {arr.map((item,map)=>(
            <div key={product.product_id} className={`${Style.productWrapper}`}>
            <div className={`${Style.productImg}`}>
              <img
                src={product.product_images[0]}
                alt="productImg"
                className="img-fluid "
              />
            </div>
            <div className={`${Style.productDetails}`}>
              <div className={`${Style.productText}`}>
                <p className={`${Style.productName}`}>{product.product_name}</p>
                <p className="m-0 my-md-2">{product.product_description}</p>
              </div>
              <div className={`${Style.productPrices}`}>
                <span className={`${Style.productPrice}`}>Rs.{product.price}</span>
                <span className={`${Style.productMrpPrice}`}>Rs.{product.mrp}</span>
                <span className={`${product.productStock ? 'stockIn' : 'stockOut'}`}>In Stock</span>
              </div>
              </div>
              </div>
      ))}
        
       </div>
      ) : (
        <div className={`${Styles.userWrapper}`}>
          <div className={`${Styles.userAccount}`}>
            <p className={`${Styles.logoText}`}>V</p>
          </div>
          <div className={`${Styles.userInfoWrapper}`}>
            <div className={`${Styles.userInfo}`}>
              <span>Cristiano</span>
              <br />
              <span>devcris@gmail.com</span>
            </div>
            <div className={`${Styles.userButtons}`}>
              <button className={`${Styles.activityBtn}`} onClick={()=> setNav(true)} >
                {" "}
                <LuActivitySquare />
                <span>Activity</span>
              </button>
              <button className={`${Styles.blockBtn}`}>
                <MdBlock /> <span>Block</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;
