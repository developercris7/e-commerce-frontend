import React, { useState } from "react";
import { Navbar } from "../Components/Navbar";
import Styles from "../Assets/css/wishlist.module.css";
import Style from "../Assets/css/admin.module.css";
import { Products as products } from "../Context/Data";
import { FaTrashAlt } from "react-icons/fa";
import { BiEdit } from "react-icons/bi";
import EditProduct from "../Components/forms/EditProduct";
import { Link } from "react-router-dom";

const Products = () => {
  const [showEditForm, setShowEditForm] = useState(false);
  const [editProductId,setEditProductId] = useState(null)
  const handleEdit = (id) => {
    setShowEditForm(true)
    setEditProductId(id)
  }
  return (
    <>
      <Navbar />
      <div className={`${Style.adminElements}`}>
        {showEditForm ? (
          <EditProduct setShowEditForm={setShowEditForm} productId = {editProductId} />
        ) : (
          <>
            <h3>All Products</h3>

            {products.map((product) => (
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
                    <button
                      className={`${Styles.moveBtn}`}
                      onClick={() => handleEdit(product.product_id)}
                    >
                      <BiEdit />
                      <span>Edit</span>
                    </button>
                    <button className={`${Styles.delBtn}`}>
                      <FaTrashAlt />
                      <span> Del</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default Products;
