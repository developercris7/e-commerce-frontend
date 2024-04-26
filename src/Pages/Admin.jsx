import React, { useState } from 'react'
import Styles from '../Assets/css/admin.module.css'
import { adminOptions } from "../Context/Data";
import { Navbar } from '../Components/Navbar';
import Dashboard from './Dashboard';
import Products from './Products';
import NewProducts from './NewProducts';
import Users from './Users'

const Admin = () => {
    const [adminOption,setAdminOption] = useState('newProduct')

    const handleAdminOptions = () => {
        switch (adminOption) {
          case "dashboard":
            return <Dashboard />;
          case "products":
            return <Products />;
          case "newProduct":
            return <NewProducts />;
          case "users":
            return <Users />;
          default:
            return <Dashboard />;
        }
      };

  return (
    <>
   <Navbar />
    <main>
    <div className={`${Styles.adminOptionSection}`}>
          {adminOptions.map((option,index) => (
            <div
            className={`${Styles.adminOption} ${option.stateText === adminOption ? Styles.adminOptionActive : ''}`}
              onClick={() => setAdminOption(option.stateText)}
              key={index}
            >
              {option.icon}
              <span className="d-none d-md-block">{option.option}</span>
            </div>
          ))}
        </div>

        <div>
            {handleAdminOptions()}
        </div>
    </main>
    </>
  )
}

export default Admin