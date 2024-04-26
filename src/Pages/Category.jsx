import React, {useContext, useState } from "react";
import { Navbar } from "../Components/Navbar";
import Styles from "../Assets/css/category.module.css";
import {sortOptions } from "../Context/Data";
import Product from "../Components/Product";
import { IoColorFilterSharp } from "react-icons/io5";
import { LuArrowUpDown } from "react-icons/lu";
import Filters from "../Components/Filters";
import Offcanvas from "react-bootstrap/Offcanvas";
import { DataContext } from "../Context/ContextAPI";



const Category = () => {
  const {products} = useContext(DataContext)


  const [show, setShow] = useState(false);  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showSort, setShowSort] = useState(false); // handle dropdown of sort options

  const [value, setValue] = useState("LH");  // handles sortby values

  const handleOptionClick = (value) => {
    setValue(value);
    setShowSort(false);
  };

   return (
    <>
      <Navbar />
      <main>
        <p className={`${Styles.totalProducts}`}>
          Total Products<span> ( 12000 )</span>
        </p>

        <div className={`${Styles.productDataSection}`}>
          <div className={`${Styles.filterSection} d-none d-md-block`}>
            <Filters />
          </div>

          <Offcanvas
            show={show}
            onHide={handleClose}
            style={{ width: "300px" }}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Filters</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Filters handleClose={handleClose} />
            </Offcanvas.Body>
          </Offcanvas>

          <div className={`${Styles.productSection}`}>
            <div className={`${Styles.sectionHead}`}>
              <h3>Collections for men</h3>
              <div className={`${Styles.filterOptions}`}>
                <button className="d-md-none" onClick={handleShow}>
                  {" "}
                  <IoColorFilterSharp /> <span>Filters</span>
                </button>
                <button onClick={() => setShowSort(!showSort)}>
                  {" "}
                  <LuArrowUpDown /> <span>Sort </span>
                </button>

                {showSort && (
                  <div className={`${Styles.sortOptions}`}>
                    {sortOptions.map((option, index) => (
                      <p
                        key={index}
                        className={`${Styles.option} ${
                          value === option.value ? Styles.optionActive : ""
                        }`}
                        onClick={() => handleOptionClick(option.value)}
                      >
                        {option.option}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className={`${Styles.sectionBody} m-10`}>
              {products.map((product, index) => (
                <Product product={product} key={index} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Category;
