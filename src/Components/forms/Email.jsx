import React, { useContext, useState } from "react";
import Styles from "../../Assets/css/forms.module.css";
import { MdEmail } from "react-icons/md";
import { DataContext } from "../../Context/ContextAPI";
import { useNavigate } from "react-router-dom";

const Email = () => {
  const navigate = useNavigate()
  const [formError, setFormError] = useState(null);
  const {formData,handleChange} = useContext(DataContext)

  const validation = () => {
    const { email } = formData;
    let error ="";
    const emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
    if (email === "") {
        error = "Field can't be empty" ;
    } else if (!emailRegex.test(email)) {
        error = "Oops! Check your email format." ;
    }

    setFormError(error)

    return formError === "";
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validation()) {
      console.log("valid Email");
      navigate("/signin/forgotpassword/verify")
    }
  };

  return (
    <div className={Styles.formContainer}>
    <div className={Styles.formSection}>
      <h3 className={Styles.title}>Forgot passowrd</h3>
      <hr />
      <h5 className={Styles.welcomeText}>Enter your email </h5>
      <p className={Styles.bodyText}>
        Provide the valid email , which you have account for !
      </p>

      <form onSubmit={handleSubmit}>
        <div className={Styles.formInputsSection}>
          <div>
            <div className={Styles.inputGroup}>
              <label htmlFor="email" className={Styles.iconLabel}>
                <MdEmail />
              </label>
              <input
                name="email"
                type="text"
                id="email"
                placeholder="Enter your email"
                autoComplete="off"
                className={Styles.input1}
                onChange={handleChange}
              />
            </div>
            <p className="errorText">{formError}</p>
          </div>
        </div>
        <button type="submit" className={Styles.formBtn}>
          Next
        </button>
      </form>
    </div>
    </div>
  );
};

export default Email;
