import type { ITour } from "@/types";
import styles from "./TourCard.module.scss";

interface IProps {
  tourData: ITour;
}
function TourCard({ tourData }: IProps) {
  const {
    lightColor,
    darkColor,
    imageSrc,
    heading,
    tourDuration,
    maxPeople,
    numberOfGuides,
    location,
    difficulty,
  } = tourData;

  return (
    <div className="col-1-of-3">
      <div className={styles.tourCard}>
        <div className={`${styles.tourCardSide} ${styles.tourCardSideFront}`}>
          <div
            className={styles.tourCardPicture}
            style={{
              backgroundImage: `url(${imageSrc}),linear-gradient(to right bottom, ${lightColor}, ${darkColor})`,
            }}
          >
            &nbsp;
          </div>
          <h4 className={styles.tourCardHeading}>
            <span
              className={styles.tourCardHeadingSpan}
              style={{
                backgroundImage: `linear-gradient(to right bottom, ${lightColor}dd, ${darkColor}dd)`,
              }}
            >
              {heading}
            </span>
          </h4>
          <div className={styles.tourCardDetails}>
            <ul>
              <li>{tourDuration} day tours</li>
              <li>Up to {maxPeople} people</li>
              <li>{numberOfGuides} tour guides</li>
              <li>{location}</li>
              <li>Difficulty : {difficulty}</li>
            </ul>
          </div>
        </div>
        <div
          className={`${styles.tourCardSide} ${styles.tourCardSideBack}`}
          style={{
            backgroundImage: `linear-gradient(to right bottom, ${lightColor}, ${darkColor})`,
          }}
        >
          Back
        </div>
      </div>
      ;
    </div>
  );
}

export { TourCard };
