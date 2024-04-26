import React from "react";
import Styles from "../Assets/css/filters.module.css";
import { filters } from "../Context/Data";
const Filters = ({handleClose}) => {
  return (
    <div >
      <div className={`${Styles.filterButtons}`}>
        <button className={`${Styles.clearButton}`}>Clear</button>
        <button className={`${Styles.applyButton}`} onClick={handleClose}>Apply</button>
      </div>
      <hr />

      {filters.map((filter) => (
        <div key={filter.id}>
          <h5>{filter.head}</h5>
          {filter &&
            filter.field.map((field) => (
              <div key={field} className={`${Styles.filterOptions}`}>
                <input type="checkbox" id={field} className={`${Styles.checkBox}`} />
                <label htmlFor={field}>{field}</label>
              </div>
            ))}
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Filters;
