import styles from "./Header.module.scss";

export default function Logo() {
  return (
    <div className={styles.logoBox}>
      <img className={styles.logo} src="/images/logo-white.png" alt="Logo " />
    </div>
  );
}
