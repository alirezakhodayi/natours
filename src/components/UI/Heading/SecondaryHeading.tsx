import styles from "./Heading.module.scss";

interface IProps {
  children: string;
}

function SecondaryHeading({ children }: IProps) {
  return <h2 className={styles.headingSecondary}>{children}</h2>;
}

export { SecondaryHeading };
