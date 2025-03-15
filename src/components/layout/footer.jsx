import React from "react";
import styles from "./footer.module.css"; // Import CSS module

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>© {new Date().getFullYear()} Online-Appointment. All Rights Reserved.</p>

        <div className={styles.contact}>
          <p>
            Email:{" "}
            <a href="mailto:support@online-appointment.com">
              support@online-appointment.com
            </a>
          </p>
          <p>Phone: +9779846892218</p>
        </div>

        <div className={styles.links}>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
