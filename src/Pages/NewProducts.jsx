import React from 'react'
import Styles from "../Assets/css/admin.module.css";
import NewProduct
 from '../Components/forms/NewProduct';
const NewProducts = () => {
  return (
    <div className={`${Styles.adminElements}`}>     
      <h3>Create New Product</h3>
      <NewProduct />
    </div>
  )
}

export default NewProducts