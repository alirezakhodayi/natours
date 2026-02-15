import { SecondaryHeading } from "@/components/UI";
import { AboutSectionContent } from "./AboutSectionContent";
import { ImageComposition } from "./ImageComposition";
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
        <ImageComposition />
      </div>
    </section>
  );
}

export { AboutSection };
