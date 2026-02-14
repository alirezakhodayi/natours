import styles from "./Paragraph.module.scss";

interface IProps {
  children: string;
}

function Paragraph({ children }: IProps) {
  return <p className={styles.paragraph}>{children}</p>;
}

export { Paragraph };
