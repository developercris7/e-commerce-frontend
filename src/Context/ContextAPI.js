import { createContext, useState } from "react";

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [formData , setFormData] = useState({
    email : "",
    verificationCode : "",
    password : ""
  })

  const handleChange = (e) => {
    const {name ,value} = e.target;
    setFormData({...formData,[name]:value})
  }

  const [products,setProducts] = useState([])

  return <DataContext.Provider value={{formData,handleChange,products,setProducts}}>{children}</DataContext.Provider>;
};
