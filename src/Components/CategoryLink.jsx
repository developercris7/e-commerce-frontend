import React from 'react'
import Style from '../Assets/css/hero.module.css'
import { Link } from 'react-router-dom'
const CategoryLink = ({image , name,path}) => {
  return (
    <Link className={`${Style.categoryLink} productLink`} to={path}>
         <div   className={`${Style.categoryLinkImage}`} style={{backgroundImage : `url(${image})`}}></div>
         <p className={`${Style.categoryName}`}>{name}</p>
    </Link>
  )
}

export default CategoryLink