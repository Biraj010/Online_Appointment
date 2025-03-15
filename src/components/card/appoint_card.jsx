import PropTypes from "prop-types";
import styles from "./appoint_card.module.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const AppointCard = ({ title, catagory, image }) => {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();


  const handleClick = (e) => {
    e.preventDefault();

    if (user) {
      navigate("/");
    } else {
      navigate("/login");
    }

  };
  return (
    <>
      <div className={styles.appoint_Card}>
        <div className={styles.appointcard_header}></div>
        <img src={image} alt={title} className={styles.appointcard_image} />
        <div className={styles.appointcard_body}>
          <h4>{title}</h4>
          <p>{catagory}</p>
          <button className={styles.appoint_button} onClick={handleClick}>
            Book now
          </button>
        </div>
      </div>
    </>
  );
};
AppointCard.propTypes = {
  title: PropTypes.string.isRequired,

  //   link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  //   linkname: PropTypes.string.isRequired,
  catagory: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default AppointCard;
