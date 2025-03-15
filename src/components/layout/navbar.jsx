import { Link, useNavigate } from "react-router-dom";
import styles from "./navbar.module.css";
import logo from "../../assets/images.png"
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../module/redux/auth/authSlice"

// import { useState } from "react";

const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  console.log("Redux User State",user);
  
  //  const [showModel, setShowModel] = useState(false);


  const handleClick = (e) => {
    e.preventDefault();
    navigate("/login")
  

    
    // setShowModel(true);
  };
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login")
  };

  return (
    <>
      <nav className={styles.nav}>
        <img src={logo} className={styles.logo} alt="Logo" />
        <div className={styles.navbar}>
          <Link to="/" className={styles.navItems}>
            Home
          </Link>
          <Link to="/book-appointment" className={styles.navItems}>
            Book Appointment
          </Link>
          <Link to="/consultation" className={styles.navItems}>
            Consultation
          </Link>
          {/* <Link to="/dashboard" className={styles.navItems}>
            Dashboard
          </Link> */}
          {user ? (
            <button className={styles.button} onClick={handleLogout}>Logout</button>
          ):(
            <button className={styles.button} onClick={handleClick}>
            Login
          </button>

          )}

          
          {/* <Link to="/auth-model" className={styles.button}>
          Login
          </Link > */}

    
        </div>
      </nav>
    </>
  );
  
};


export default NavBar;

