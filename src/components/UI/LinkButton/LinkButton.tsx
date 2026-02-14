import styles from "./LinkButton.module.scss";

interface IProps {
  href: string;
  children: string;
}
function LinkButton({ href, children }: IProps) {
  return (
    <a href={href} className={styles.linkButton}>
      {children}
    </a>
  );
}

export { LinkButton };
