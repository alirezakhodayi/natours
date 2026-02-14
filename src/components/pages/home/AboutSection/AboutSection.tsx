import { SecondaryHeading } from "@/components/UI";
import { AboutSectionContent } from "./AboutSectionContent";
import styles from "./AboutSection.module.scss";

function AboutSection() {
  return (
    <section className={styles.aboutSection}>
      <div className="u-center-text u-margin-b-large">
        <SecondaryHeading>
          Exciting tours for adventurous people...
        </SecondaryHeading>
      </div>
      <div className="row">
        <AboutSectionContent />
        <div className="col-1-of-2">Image Composition</div>
      </div>
    </section>
  );
}

export { AboutSection };
