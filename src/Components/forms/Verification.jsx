import React, { useContext, useState } from "react";
import Styles from "../../Assets/css/forms.module.css";
import { FaShieldAlt } from "react-icons/fa";
import { DataContext } from "../../Context/ContextAPI";
import { useNavigate } from "react-router-dom";

const Verification = () => {
  const navigate = useNavigate();
  
  const [formError, setFormError] = useState(null);
const {formData,handleChange} = useContext(DataContext)

  const validation = () => {
    const { verificationCode } = formData;
    let error = "";
    if (verificationCode === "") {
      error = "Field can't be empty";
    }
    setFormError(error);

    return formError === "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validation()) {
      console.log("valid code");
      navigate("/signin/newpassword")
    }
  };
  return (
    <div className={Styles.formContainer}>
      <div className={Styles.formSection}>
        <h3 className={Styles.title}>Account verification</h3>
        <hr />
        <h5 className={Styles.welcomeText}>Enter Verification Code</h5>
        <p className={Styles.bodyText}>
          We have sent an 6-digit verification code to your account !
        </p>

        <form onSubmit={handleSubmit}>
          <div className={Styles.formInputsSection}>
            <div>
              <div className={Styles.inputGroup}>
                <label htmlFor="verificationCode" className={Styles.iconLabel}>
                  {" "}
                  <FaShieldAlt />
                </label>
                <input
                  name="verificationCode"
                  type="text"
                  id="verificationCode"
                  placeholder="Enter verification code"
                  autoComplete="off"
                  className={Styles.input1}
                  onChange={handleChange}
                />
              </div>
              <p className="errorText">{formError}</p>
            </div>
          </div>
          <button type="submit" className={Styles.formBtn}>
            Verify
          </button>
        </form>
      </div>
    </div>
  );
};

export default Verification;
