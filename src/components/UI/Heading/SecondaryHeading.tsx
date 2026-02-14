import styles from "./Heading.module.scss";

interface IProps {
  children: string;
  className?: string;
}

function SecondaryHeading({ children, className }: IProps) {
  return (
    <h2 className={`${styles.headingSecondary} ${className ? className : ""}`}>
      {children}
    </h2>
  );
}

export { SecondaryHeading };
