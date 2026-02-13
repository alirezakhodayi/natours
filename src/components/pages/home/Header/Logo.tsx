import styles from "./Header.module.scss";

export default function Logo() {
  return (
    <div className={styles.headerLogoBox}>
      <img
        className={styles.headerLogo}
        src="/images/logo-white.png"
        alt="Logo "
      />
    </div>
  );
}
