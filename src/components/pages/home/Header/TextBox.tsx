import { CallToAction } from "../../../UI";
import styles from "./Header.module.scss";

export default function TextBox() {
  return (
    <div className={styles.textBox}>
      <h1 className={styles.headingPrimary}>
        <span className={styles.headingPrimaryMain}>Outdoors</span>
        <span className={styles.headingPrimarySub}>is where life happens</span>
      </h1>
      <CallToAction text="Discover our tours" animated />
    </div>
  );
}
