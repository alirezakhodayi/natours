import { CallToAction, PrimaryHeading } from "../../../UI";
import styles from "./Header.module.scss";

export default function TextBox() {
  return (
    <div className={styles.headerTextBox}>
      <PrimaryHeading mainText="Outdoors" subText="is where life happens" />
      <CallToAction text="Discover our tours" animated />
    </div>
  );
}
