import PropTypes from "prop-types";
import { useState } from "react";
import styles from "./form.module.css";
import { useNavigate } from "react-router-dom";

// const SignupForm = ({ onClose }) => {
  const SignupForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState(""); // State to hold error message

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (e.target.name === "password" || e.target.name === "confirmPassword") {
      setError(""); // Clear error message when user starts typing
    }
  };
  const onClose = () => {
    navigate("/")
    // window.history.back();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    console.log(formData.fullName, formData.email, formData.password);
    // Handle successful registration logic
  };

  const switchToLogin = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <div className={styles.Container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <h2 className={styles.Title}>Sign Up</h2>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
          className={styles.inputField}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className={styles.inputField}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          className={`${styles.inputField} ${error ? styles.errorInput : ""}`}
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          className={`${styles.inputField} ${error ? styles.errorInput : ""}`}
        />
        {error && <span className={styles.errorText}>{error}</span>}
        <button type="submit" className={styles.Button}>
          Sign Up
        </button>
        <p className={styles.switchText}>
          Already have an account?{" "}
          <span onClick={switchToLogin} className={styles.switchLink}>
            Login
          </span>
        </p>
      </form>
    </div>
  );
};

SignupForm.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default SignupForm;
