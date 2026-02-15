import { FeaturesBox } from "./FeaturesBox";
import styles from "./FeaturesSection.module.scss";

function FeaturesSection() {
  return (
    <section className={styles.featuresSection}>
      <div className="row">
        <FeaturesBox
          title="Explore the world"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam natus, dolor doloremque"
          iconClassName="icon-basic-world"
        />
        <FeaturesBox
          title="Meet nature"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam natus, dolor doloremque"
          iconClassName="icon-basic-compass"
        />
        <FeaturesBox
          title="Find your way"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam natus, dolor doloremque"
          iconClassName="icon-basic-map"
        />
        <FeaturesBox
          title="Live a healthier life"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam natus, dolor doloremque"
          iconClassName="icon-basic-heart"
        />
      </div>
    </section>
  );
}

export { FeaturesSection };
