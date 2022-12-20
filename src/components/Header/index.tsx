import styles from "./style.module.scss";
import { useEffect, useState } from "react";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { ReactComponent as LoginIcon } from "../../assets/icons/login.svg";
import { ReactComponent as MenuIcon } from "../../assets/icons/menu.svg";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(window.scrollY !== 0);

  useEffect(() => {
    const scrollHandler = () => {
      setIsScrolled(window.scrollY !== 0);
    };

    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <header className={styles.Header} data-is-scrolled={isScrolled}>
      <div className={styles.Start}>
        <div className={styles.Logo}>
          <Logo />
        </div>
      </div>
      <div className={styles.End}>
        <button className={styles.loginButton}>
          <LoginIcon /> LOGIN
        </button>
        <div className={styles.MenuIcon}>
          <MenuIcon />
        </div>
      </div>
    </header>
  );
}
