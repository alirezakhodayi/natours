import styles from "./ImageComposition.module.scss";

function ImageComposition() {
  return (
    <div className="col-1-of-2">
      <div className={styles.composition}>
        <img
          src="/images/nat-1-large.jpg"
          className={`${styles.compositionPhoto} ${styles.compositionPhotoP1}`}
        />
        <img
          src="/images/nat-2-large.jpg"
          className={`${styles.compositionPhoto} ${styles.compositionPhotoP2}`}
        />
        <img
          src="/images/nat-3-large.jpg"
          className={`${styles.compositionPhoto} ${styles.compositionPhotoP3}`}
        />
      </div>
    </div>
  );
}

export { ImageComposition };
