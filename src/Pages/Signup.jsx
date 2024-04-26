import React, { useState } from "react";
import Styles from "../Assets/css/forms.module.css";
import { FaUserCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import URI from "../config";
import axios from "axios";

const Signup = () => {


  const inputs = [
    {
      name: "fullName",
      label: <FaUserCircle />,
      placeholder: "Enter your username",
      type: "text",
    },
    {
      name: "email",
      label: <MdEmail />,
      placeholder: "Enter your email",
      type: "text",
    },
    {
      name: "password",
      label: <FaLock />,
      placeholder: "Enter your username",
      type: "password",
    },
  ];

  const verifyInput = {
    name: "verifyCode",
    label: <FaShieldAlt />,
    placeholder: "Enter your verification code",
    type: "text",
  };

  const [showVerifyCode, setShowVerifyCode] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    verifyCode: "",
  });

  // const [verifyCode, setVerifyCode] = useState(null);

  const [formError, setFormError] = useState({
    fullName: "",
    email: "",
    password: "",
    verifyCode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validation = () => {
    const { fullName, email, password } = formData;
    const error = {};

    if (fullName === "") {
      error.fullName = "Field can't be empty";
    }
    const emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
    if (email === "") {
      error.email = "Field can't be empty";
    } else if (!emailRegex.test(email)) {
      error.email = "Oops! Check your email format.";
    }

    if (password === "") {
      error.password = "Field can't be empty";
    } else if (password.length < 6) {
      error.password = "Pass should be greater than 6 letter";
    } else if (password.length > 10) {
      error.password = "Pass should be less than 10 letter";
    }

    setFormError(error);

    return Object.keys(error).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validation()) {
      const response = await axios.post(`${URI}/signup`, formData);
      console.log(response);

      const { message, error } = response.data;

      if (error) {
        setFormError({ email: error });
      } else {
        setShowVerifyCode(true);
      }
    }
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    const { verifyCode } = formData;
    if (verifyCode === "") {
      setFormError({ verifyCode: "Field can't be empty" });
    } else {
      const payload = { email: formData.email, otp: formData.verifyCode };

      const response = await axios.post(`${URI}/signup/verify`, payload);

      const { message, error } = response.data;

      if (error) {
        setFormError({ verifyCode : error });
      } else if (message === "success") {
        setFormError({})
        console.log("User Verified Successfully!");
      }
    }
  };

  return (
    <div className={Styles.formContainer}>
      {showVerifyCode ? (
        <div className={Styles.formSection}>
          <h3 className={Styles.title}>Sign Up </h3>
          <hr />
          <h5 className={Styles.welcomeText}>Verify your account</h5>
          <p className={Styles.bodyText}>
            We have sent an verification code <br className="d-md-none" />
            to your email id !
          </p>

          <form onSubmit={handleVerify}>
            <div className={Styles.formInputsSection}>
              <div>
                <div className={Styles.inputGroup}>
                  <label
                    htmlFor={verifyInput.name}
                    className={Styles.iconLabel}
                  >
                    {verifyInput.label}
                  </label>
                  <input
                    name={verifyInput.name}
                    type={verifyInput.type}
                    id={verifyInput.name}
                    placeholder={verifyInput.placeholder}
                    autoComplete="off"
                    className={Styles.input1}
                    onChange={handleChange}
                  />
                </div>
                <p className="errorText">{formError && formError.verifyCode}</p>
              </div>
            </div>

            <button type="submit" className={Styles.formBtn}>
              Verify
            </button>
          </form>

          <p className="my-2">
            Don't receive code ?{" "}
            <Link onClick={() => setShowVerifyCode(false)} className="link">
              Go back
            </Link>
          </p>
        </div>
      ) : (
        <div className={Styles.formSection}>
          <h3 className={Styles.title}>Sign Up </h3>
          <hr />
          <h5 className={Styles.welcomeText}>Welcome to our store !</h5>
          <p className={Styles.bodyText}>
            Become a part of our community. Sign up and start shopping with us!
          </p>

          <form onSubmit={handleSubmit}>
            <div className={Styles.formInputsSection}>
              {inputs.map((input, index) => (
                <div key={index}>
                  <div className={Styles.inputGroup}>
                    <label htmlFor={input.name} className={Styles.iconLabel}>
                      {input.label}
                    </label>
                    <input
                      name={input.name}
                      type={input.type}
                      id={input.name}
                      placeholder={input.placeholder}
                      autoComplete="off"
                      className={Styles.input1}
                      onChange={handleChange}
                    />
                  </div>
                  <p className="errorText">
                    {formError && formError[input.name]}
                  </p>
                </div>
              ))}
            </div>

            <button type="submit" className={Styles.formBtn}>
              Sign Up
            </button>
          </form>

          <p className="my-2">
            Already have an account ?{" "}
            <Link to="/signin" className="link">
              Signin
            </Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default Signup;
