import React from "react";
import Styles from "../Assets/css/admin.module.css";

const Dashboard = () => {
  const arr = [1, 1, 1];
  return (
    <div className={`${Styles.adminElements}`}>
      <h3>Application Details</h3>

      <div className={`${Styles.dashboardWrapper}`}>
        {arr.map((item, index) => (
          <div className={`${Styles.dashboardElement}`} key={index}>
            <div className={`${Styles.dashboardImage}`}></div>

            <div className={`${Styles.dashboardText}`}>
              <p>All Products</p>
              <p>10+</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
