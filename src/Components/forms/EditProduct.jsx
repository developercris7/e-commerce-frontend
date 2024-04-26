import React, { useState } from "react";
import Styles from "../../Assets/css/adminforms.module.css";
import { Products } from "../../Context/Data";
import { FaTrashAlt } from "react-icons/fa";

const EditProduct =  ({ setShowEditForm ,productId}) => {

   const product = Products.find((product) => product.product_id === productId)

  let [formData, setFormData] = useState({
    productImages: product.product_images,
    productName: product.product_name,
    productDescription: product.product_description,
    productCategory:product.product_category,
    productType: product.product_type,
    productMrp: product.mrp,
    productPrice: product.price,
    productStock: true,
  });

  const handleChange = (e) => {
    const { name, files, value } = e.target;
    if (name === "productImages") {
      const images = [];
      for (let i = 0; i < files.length; i++) {
        images[i] = files[i];
      }
      setFormData({ ...formData, [name]: images });
    } else {
      setFormData({ ...formData, [name]: value });
    }
    console.log(formData);
  };
  return (
    <div>
      <div className={Styles.editFormImageSection}>
        {formData.productImages
          .map((img) => (
            <div className={Styles.formImage} key={img} >
              <img src={img} alt="" className={Styles.image} />
              <FaTrashAlt className={Styles.deleteIcon} />
            </div>
          ))}
      </div>

      <form method="post" className={Styles.form}>
        <label htmlFor="productImages">Product Images</label>
        <input
          type="file"
          name="productImages"
          id="productImages"
          onChange={handleChange}
          multiple
        />

        <label htmlFor="productName">Product Name</label>
        <input
          type="text"
          name="productName"
          placeholder="Enter your productname"
          id="producName"
          autoComplete="off"
          onChange={handleChange}
          value={formData.productName}
        />

        <label htmlFor="productDescription">Product Description</label>

        <textarea
          name="productDescription"
          placeholder="Enter your productDescription"
          id="productDescription"
          autoComplete="off"
          cols="30"
          rows="2"
          onChange={handleChange}
          value={formData.productDescription}
        ></textarea>

        <div className={Styles.fiedWrapper}>
          <div className={Styles.field}>
            <label htmlFor="productCategory">Product Category</label> <br />
            <select
              name="productCategory"
              id="productCategory"
              onChange={handleChange}
              value={formData.productCategory}
            >
              <option value="">-- select --</option>
              <option value="mens">Mens</option>
              <option value="womens">Womens</option>
              <option value="kids">Kids</option>
              <option value="electronics">Electronics</option>
            </select>
          </div>
          <div className={Styles.field}>
            <label htmlFor="productType">Product Type</label> <br />{" "}
            <select
              name="productType"
              id="productType"
              onChange={handleChange}
              value={formData.productType}
            >
              <option value="">-- select --</option>
              <option value="shirt">Shirt</option>
              <option value="tshirt">T-Shirt</option>
              <option value="casualshirt">Casual shirt</option>
              <option value="pants">Panst</option>
            </select>
          </div>
        </div>
        <div className={Styles.fiedWrapper}>
          <div className={Styles.field}>
            <label htmlFor="productMrp">Product Mrp</label> <br />
            <input
              type="text"
              name="productMrp"
              placeholder="Enter your productMrp"
              id="productMrp"
              autoComplete="off"
              onChange={handleChange}
              value={formData.productMrp}
            />
          </div>
          <div className={Styles.field}>
            <label htmlFor="productPrice">Product Price</label> <br />
            <input
              type="text"
              name="productPrice"
              placeholder="Enter your product price"
              id="productPrice"
              autoComplete="off"
              onChange={handleChange}
              value={formData.productPrice}
            />
          </div>
        </div>

        <div className="d-flex gap-2 my-3 align-items-center">
          <input
            type="checkBox"
            id="productStock"
            className={Styles.checkbox}
            checked={formData.productStock}
            onChange={() =>
              setFormData({
                ...formData,
                ["productStock"]: !formData.productStock,
              })
            }
          />
          <label htmlFor="productStock">Product Instock</label>
        </div>

        <div className={Styles.formButtonsSection}>
          <button
            className={Styles.cancelButton}
            onClick={() => setShowEditForm(false)}
          >
            Cancel
          </button>
          <button className={Styles.createButton}>Create</button>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
