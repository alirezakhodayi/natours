import { CallToAction, SecondaryHeading } from "@/components/UI";
import styles from "./ToursSection.module.scss";
import { TourCard } from "./TourCard";
import { toursData } from "./data";

function ToursSection() {
  return (
    <section className={styles.toursSection}>
      <div className="u-center-text u-margin-b-large">
        <SecondaryHeading>Most popular tours </SecondaryHeading>
      </div>
      <div className="row">
        {toursData.map((tour) => (
          <TourCard key={tour.id} tourData={tour} />
        ))}
      </div>
      <div className="u-center-text u-margin-t-xLarge">
        <CallToAction text="Discover all tours" />
      </div>
    </section>
  );
}

export { ToursSection };
