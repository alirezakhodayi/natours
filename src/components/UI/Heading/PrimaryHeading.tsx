import styles from "./Heading.module.scss";
interface IProps {
  mainText: string;
  subText?: string;
}
function PrimaryHeading({ mainText, subText }: IProps) {
  return (
    <h1 className={styles.headingPrimary}>
      <span className={styles.headingPrimaryMain}>{mainText}</span>
      <span className={styles.headingPrimarySub}>{subText ? subText : ""}</span>
    </h1>
  );
}

export { PrimaryHeading };
