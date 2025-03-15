import { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { login } from "../../module/redux/auth/authSlice"
import styles from "./form.module.css";
import { useNavigate } from "react-router-dom";


  const LoginForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onClose = () => {
    navigate("/")
    
  }

  const switchToRegister = (e) => {
    e.preventDefault();
    console.log(formData.email , formData.password)
    navigate("/register");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    if (
      formData.email === "uniquejack.br80@gmail.com" &&
      formData.password === "password123"
    ) {
      console.log("Authentication successful!");

      dispatch(login({name:"Admin"}));
      navigate("/");
      
    } else {
      setError("Invalid email or password.");
    }
  };

  

  return (
    <div className={styles.Container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <h2 className={styles.Title}>Login</h2>
        <p style={{ color: "red" }}>{error}</p>
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
          className={styles.inputField}
        />
        <button type="submit" className={styles.Button}>
          Login
        </button>
        <p className={styles.switchText}>
          Don&apos;t have an account?{" "}
          <span onClick={switchToRegister} className={styles.switchLink}>
            Sign up
          </span>
        </p>
      </form>
    </div>
  );
};

LoginForm.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default LoginForm;
