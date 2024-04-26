import React, {useState } from 'react'
import Styles from '../Assets/css/forms.module.css'
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import URI from '../config'
import axios from 'axios'
import Cookies from 'js-cookie'


const Signin = () => {

  const navigate = useNavigate();

    const inputs = [
    {name : 'email' , label : <MdEmail /> ,placeholder : "Enter your email",type:"text"},
    {name : 'password' , label : <FaLock /> ,placeholder : "Enter your passwored",type:"password"}
]

const [formData,setFormData] = useState({
    email : "",
    password : ""
})

const [formError,setFormError] = useState({})

const handleChange = (e) => {
   const {name , value} = e.target;
   setFormData({...formData,[name]:value})
}

const validation = () => {
    const {email,password} = formData;
    const error = {};
  
    const emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
  ;
    if(email === ""){
      error.email = "Field can't be empty"
    }else if(!emailRegex.test(email)){
      error.email = "Oops! Check your email format."
    }
    if(password === ""){
      error.password = "Field can't be empty"
    }
    setFormError(error)
    return Object.keys(error).length === 0;
}

const handleSubmit = async(e) => {
  e.preventDefault();
   if(validation()){
    const response = await axios.post(`${URI}/signin`,formData)
    console.log(response);
    const {message,error,token} = response.data;
    if(error === "not found"){
      setFormError({email : "User not found ! please create your account"}) ;
   }else if(error === "invalid") {
    setFormError({password:"Oops ! Invalid password !"})
   }else if(message === "success"){
    Cookies.set("token",token)
    navigate("/")
    console.log("User Loggend in ")
   }
  }
}

  return (
    <div className={Styles.formContainer}>
          <div className={Styles.formSection}>
            <h3 className={Styles.title}>Sign In</h3>
            <hr />
            <h5 className={Styles.welcomeText}>Welcome Back !</h5>
            <p className={Styles.bodyText}>Your cart is waiting! Sign in and let's get started.</p>

            <form onSubmit={handleSubmit} >
                <div className={Styles.formInputsSection}>
             {inputs.map((input,index)=> (
                <div key={index}>
                 <div className={Styles.inputGroup}>
                 <label htmlFor={input.name} className={Styles.iconLabel}>{input.label}</label>
                 <input name={input.name} type={input.type}  id={input.name} placeholder={input.placeholder} autoComplete='off' 
                 className={Styles.input1} onChange={handleChange}/>
                 </div>
                 <p className='errorText'>{formError && formError[input.name]}</p>
              </div>
             ))}
             <p className='float-end'><Link  className='link' to="/signin/forgotpassword" >Forgot Password ? </Link></p>
             </div>      
             <button type='submit' className={Styles.formBtn}>Sign In</button>
            
            </form>

            <p className='my-2'>Don't have an account ? <Link to="/signup" className='link' >Signup</Link></p>
          </div>
    </div>
  )
}

export default Signin;