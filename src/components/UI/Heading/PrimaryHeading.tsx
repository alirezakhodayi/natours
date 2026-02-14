import styles from "./Heading.module.scss";
interface IProps {
  mainText: string;
  subText?: string;
  className?: string;
}
function PrimaryHeading({ mainText, subText, className }: IProps) {
  return (
    <h1 className={`${styles.headingPrimary} ${className ? className : ""}`}>
      <span className={styles.headingPrimaryMain}>{mainText}</span>
      <span className={styles.headingPrimarySub}>{subText ? subText : ""}</span>
    </h1>
  );
}

export { PrimaryHeading };
