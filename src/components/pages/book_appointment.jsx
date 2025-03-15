import styles from "./pages.module.css";
import Photo from "../../assets/book_appointment_web.png";
import { appointmentdata } from "../../data/appointment_data";
import AppointCard from "../card/appoint_card";

const BookAppointment = () => {
  return (
    <>
      <div className={styles.Wrapper}>
        <img src={Photo} className={styles.background}></img>
      </div>
      <div className={styles.appointcard_wrapper}>
        <div className={styles.appointcard_container}>
          {appointmentdata.map((item, index) => (
            <AppointCard key={index} {...item} />
          ))}
        </div>
      </div>
    </>
  );
};
export default BookAppointment;
