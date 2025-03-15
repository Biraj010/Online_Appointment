import Photo from "../../assets/online_consultation_web.png";
import styles from "../pages/pages.module.css";
import consultdata from "../../data/consult_data";
import Card from "../card/consult_card";
const Consultation = () => {
  return (
    <>
      <div className={styles.Wrapper}>
        <img src={Photo} className={styles.background}></img>
      </div>
      <div className={styles.consult_card_wrapper}>
        <div className={styles.consult_card_container}>
          {consultdata.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
      </div>
    </>
  );
};
export default Consultation;
