import { Link, useNavigate } from "react-router-dom";
import styles from "./navbar.module.css";
import logo from "../../assets/images.png";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../module/redux/auth/authSlice";
import { useState } from "react";

const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <nav className={styles.nav}>
      {/* Logo */}
      <img
        src={logo}
        className={styles.logo}
        alt="Logo"
        onClick={() => navigate("/")}
      />

      {/* Hamburger Button (only visible on mobile) */}
      <button
        className={styles.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* Nav Links */}
      <div className={`${styles.navbar} ${menuOpen ? styles.showMenu : ""}`}>
        <Link
          to="/"
          className={styles.navItems}
          onClick={() => setMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/book-appointment"
          className={styles.navItems}
          onClick={() => setMenuOpen(false)}
        >
          Book Appointment
        </Link>
        <Link
          to="/consultation"
          className={styles.navItems}
          onClick={() => setMenuOpen(false)}
        >
          Consultation
        </Link>

        {user ? (
          <button className={styles.button} onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <button className={styles.button} onClick={handleClick}>
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
