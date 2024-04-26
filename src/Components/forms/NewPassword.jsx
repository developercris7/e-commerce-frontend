import React, { useContext, useState } from "react";
import Styles from "../../Assets/css/forms.module.css";
import { FaLock } from "react-icons/fa";
import { DataContext } from "../../Context/ContextAPI";
import { useNavigate } from "react-router-dom";

const NewPassword = () => {
  const navigate = useNavigate()
  const [formError, setFormError] = useState(null);
const {formData,handleChange} = useContext(DataContext)

   const validation = () => {
    const { password } = formData;
    let error = "";
    if (password === "") {
      error = "Field can't be empty";
    } else if (password.length < 6 && password.length < 8) {
      error = "Length Should be min 6 and max 8";
    }
    setFormError(error);

    return formError === "";
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validation()) {
      console.log("valid Paasword");
      navigate("/signin")
    }
  };
  return (
    <div className={Styles.formContainer}>
      <div className={Styles.formSection}>
        <h3 className={Styles.title}>New Password</h3>
        <hr />
        <h5 className={Styles.welcomeText}>Enter your new password </h5>
        <p className={Styles.bodyText}>
          Enter a strong password , which you can remeber !
        </p>

        <form onSubmit={handleSubmit}>
          <div className={Styles.formInputsSection}>
            <div>
              <div className={Styles.inputGroup}>
                <label htmlFor="password" className={Styles.iconLabel}>
                  <FaLock />
                </label>
                <input
                  name="password"
                  type="password"
                  id="password"
                  placeholder="Enter your new password"
                  autoComplete="off"
                  className={Styles.input1}
                  onChange={handleChange}
                />
              </div>
              <p className="errorText">{formError}</p>
            </div>
          </div>
          <button type="submit" className={Styles.formBtn}>
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewPassword;
