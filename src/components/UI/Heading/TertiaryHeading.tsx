import styles from "./Heading.module.scss";

interface IProps {
  children: string;
  className?: string;
}

function TertiaryHeading({ children, className }: IProps) {
  return (
    <h3 className={`${styles.headingTertiary} ${className ? className : ""}`}>
      {children}
    </h3>
  );
}

export { TertiaryHeading };
