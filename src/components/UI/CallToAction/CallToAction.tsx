import styles from "./CallToAction.module.scss";

interface IProps {
  text: string;
  animated?: boolean;
  color?: "primary" | "white";
}
function CallToAction({ text, animated, color = "primary" }: IProps) {
  return (
    <a
      href="#"
      className={`${styles.callToAction} ${color === "white" ? styles.callToActionWhite : styles.callToActionPrimary} ${animated ? styles.callToActionAnimated : ""}`}
    >
      {text}
    </a>
  );
}

export { CallToAction };
