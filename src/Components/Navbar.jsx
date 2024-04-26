import React, { useContext, useEffect, useState } from "react";
import Style from "../Assets/css/navbar.module.css";
import Cookies from "js-cookie";
import { FiLogIn, FiMenu } from "react-icons/fi";
import { FaRegHeart, FaBagShopping } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FaUserCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import { DataContext } from "../Context/ContextAPI";
import {Products} from "../Context/Data"

export const Navbar = () => {
   
 const path= useParams();
 const {setProducts} = useContext(DataContext)

  const userInfo = {fullName : "cris",email :"devcris"}; //replace this by actual data ;
  var token = Cookies.get("token");

  const [userInfoShow,setUserInfoShow ] = useState(false)
  const [show,setShow] = useState(false)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(()=> {
    console.log(token)
   
  },[token])

  useEffect(()=>{
    if(path){
      // replace this with request of backend
  const filteredProducts = Products.filter((products)=> products.productCategory === path.category)
  console.log(path)
  setProducts(filteredProducts)
}
  },[path,setProducts])


  const handleLogout = () => {
    token = ""
    Cookies.remove("token");
   
  };

  return (
    <header>
      <FiMenu className={`${Style.menuBar} d-lg-none`} onClick={handleShow} />

      <Offcanvas show={show} onHide={handleClose} style={{ width: "300px" }}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <nav className="d-flex flex-column gap-4 d-lg-none">
            <Link className={`${Style.navLink}`} to="/">
              Home
            </Link>
            <Link className={`${Style.navLink}`} to="/mens" >
              Mens
            </Link>
            <Link className={`${Style.navLink}`} to="/womens" >
              Womens
            </Link>
            <Link className={`${Style.navLink}`} to="/kids" >
              Kids
            </Link>
            <Link className={`${Style.navLink}`} to="/electronics">
              Elctronics
            </Link>
            <Link className={`${Style.navLink}`} to="/admin">
              Admin
            </Link>
          </nav>
        </Offcanvas.Body>
      </Offcanvas>

      <div className={`${Style.navBrand}`}>
        <span className={`${Style.brandName}`}>E-commerce Store</span>
        <span className={`${Style.brandSlogan}`}>shop smart ! live smart</span>
      </div>

      <nav className="d-none d-lg-flex">
        <Link className={`${Style.navLink}`} to="/" >
          Home
        </Link>
        <Link className={`${Style.navLink}`} to="/mens" >
          Mens
        </Link>
        <Link className={`${Style.navLink}`} to="/womens" >
          Womens
        </Link>
        <Link className={`${Style.navLink}`} to="/kids" >
          Kids
        </Link>
        <Link className={`${Style.navLink}`} to="/electronics">
          Electronics
        </Link>
        <Link className={`${Style.navLink}`} to="/admin">
          Admin
        </Link>
      </nav>

      <div className={`${Style.navButtons}`}>
        {!token ? (
          <button className={`${Style.loginButton}`}>
            <FiLogIn />
            <span className="d-none d-md-block">Login/Signup</span>
          </button>
        ) : (
          <>
            <button className={`${Style.bagButton}`}>
              <FaBagShopping />
              <span className="d-none d-md-block">Bag</span>
            </button>
            <button className={`${Style.wishlistButton}`}>
              <FaRegHeart />
              <span className="d-none d-md-block">Wishlist</span>
            </button>
          </>
        )}

        {token ? (
          <div
            className={`${Style.userAccount}`}
            onClick={() => setUserInfoShow(!userInfoShow)}
          >
            <p className={`${Style.logoText}`}>{userInfo && userInfo.fullName[0]}</p>
            {userInfoShow && (
              <div className={`${Style.accountInfo}`}>
                <IoClose
                  className="float-end fs-5"
                  onClick={() => setUserInfoShow(false)}
                />
                <div className="clearFix"></div>
                <p className={`${Style.userName} m-0`}>
                  <FaUserCircle className="mx-2 fs-5" />
                  {userInfo && userInfo.fullName}
                </p>
                <p className={`${Style.userEmail} m-0 my-2`}>
                  
                  <MdEmail className="mx-2 fs-5 " />{userInfo && userInfo.email} 
                </p>
                <hr></hr>
                <button
                  className={`${Style.logoutButton}`}
                  onClick={handleLogout}
                >
                  <FiLogIn />
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>
        ) : (
          <></>
        )}
      </div>
    </header>
  );
};
