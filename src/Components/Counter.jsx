import React, { useState } from "react";
import Styles from "../Assets/css/counter.module.css";
import { FaPlus, FaMinus } from "react-icons/fa6";

const Counter = () => {
  const [productCount, setProductCount] = useState(0);

  const handleIncrement = () => {
    setProductCount(productCount + 1);
  };
  const handleDecrement = () => {
    if (productCount > 0) {
      setProductCount(productCount - 1);
    }
  };
  return (
    <div className={`${Styles.counterWrapper}`}>
      <FaMinus onClick={handleDecrement} />
      <span className={`${Styles.productCount}`}>{productCount}</span>
      <FaPlus onClick={handleIncrement} />
    </div>
  );
};

export default Counter;
