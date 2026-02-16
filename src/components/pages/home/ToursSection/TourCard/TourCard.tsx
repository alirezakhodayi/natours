import type { ITour } from "@/types";
import styles from "./TourCard.module.scss";
import { CallToAction } from "@/components/UI";

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
    price,
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
          <div className={styles.tourCardCta}>
            <div className={styles.tourCardPriceBox}>
              <p className={styles.tourCardPriceOnly}>Only</p>
              <p className={styles.tourCardPriceValue}>${price}</p>
            </div>
            <CallToAction text="Book now!" color="white" />
          </div>
        </div>
      </div>
      ;
    </div>
  );
}

export { TourCard };
