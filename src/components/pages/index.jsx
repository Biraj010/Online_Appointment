import Photo from "../../assets/sliderfinal.png";
import styles from "./pages.module.css";

const HomePage = () => {
  return (
    <div className={styles.Wrapper}>
      <img src={Photo} className={styles.background}></img>
    </div>
  );
};

export default HomePage;
