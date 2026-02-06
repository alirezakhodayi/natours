import styles from "./CallToAction.module.css";

interface IProps {
  text: string;
  animated?: boolean;
}
function CallToAction({ text, animated }: IProps) {
  return (
    <a
      href="#"
      className={`${styles.callToAction} ${styles.callToActionWhite} ${animated ? styles.callToActionAnimated : ""}`}
    >
      {text}
    </a>
  );
}

export { CallToAction };
