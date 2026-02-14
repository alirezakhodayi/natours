import { SecondaryHeading } from "../../../UI";
import styles from "./AboutSection.module.scss";

function AboutSection() {
  return (
    <section className={styles.aboutSection}>
      <div className="u-center-text">
        <SecondaryHeading>
          Exciting tours for adventurous people...
        </SecondaryHeading>
      </div>
      <div className="row">
        <div className="col-1-of-2">TextContent</div>
        <div className="col-1-of-2">Image Composition</div>
      </div>
    </section>
  );
}

export { AboutSection };
