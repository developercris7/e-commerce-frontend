import React, { useState } from 'react'
import Styles from '../Assets/css/productsize.module.css'

const ProductSize = () => {
    const sizes = ['M','L','XL','XXL']
    const [productSize,setProductSize] = useState('M')
  return (
    <div className={`${Styles.sizeContainer}`}>
        {sizes.map((size) => (
         <div className={`${Styles.productSize} ${size === productSize ? Styles.sizeSelected : ''}`} onClick={()=>setProductSize(size)}>{size}</div>
        ))}
    </div>
  )
}

export default ProductSize