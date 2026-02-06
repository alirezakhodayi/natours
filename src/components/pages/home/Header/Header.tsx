import Logo from "./Logo";
import TextBox from "./TextBox";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <TextBox />
    </header>
  );
}

export { Header };
