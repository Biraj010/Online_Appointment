import PropTypes from "prop-types";
import styles from "./consult_card.module.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Card = ({ title, rs, price, image }) => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  const handleClick = (e) => {
    e.preventDefault();

    if(user) {
      navigate("/consult")
    }else{
      navigate("/login")
    }
  };

  return (
    <div className={styles.consult_card}>
      <div className={styles.card_header}></div>
      <img src={image} alt={title} className={styles.card_image} />
      <div className={styles.card_body}>
        <h4>{title}</h4>
        <p>
          {rs}
          {price}
        </p>
        <button className={styles.consult_button} onClick={handleClick}>
          Consult
        </button>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  rs: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired, // image prop added
};

export default Card;
