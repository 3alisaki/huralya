import styles from "./style.module.scss";
import { useEffect, useState } from "react";
import { ReactComponent as Logo } from "../../assets/images/Header/logo.svg";
import { ReactComponent as Huralya } from "../../assets/images/Header/huralya.svg";
import { ReactComponent as LoginIcon } from "../../assets/icons/login.svg";
import { ReactComponent as WhitePaperIcon } from "../../assets/images/Header/whitePaper.svg";
import { ReactComponent as GenesisIcon } from "../../assets/images/Header/genesis.svg";
import { ReactComponent as AboutUsIcon } from "../../assets/images/Header/aboutUs.svg";
import { ReactComponent as InsigniaNFTIcon } from "../../assets/images/Header/insigniaNFT.svg";
import { ReactComponent as LyaTokenIcon } from "../../assets/images/Header/lyaToken.svg";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(window.scrollY !== 0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      setIsScrolled(window.scrollY !== 0);
    };

    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <>
      <header
        className={styles.Header}
        data-is-scrolled={isScrolled}
        data-is-menu-open={isMenuOpen}
      >
        <div className={styles.HeaderContent}>
          <div className={styles.Start}>
            <div className={styles.Logo}>
              <Logo />
              <Huralya />
            </div>
          </div>
          <div className={styles.End}>
            <nav className={styles.Menu}>
              <ul>
                <li>
                  <a href="https://www.google.com">blog</a>
                </li>
                <li>
                  <a href="https://www.google.com">
                    <WhitePaperIcon />
                    White paper
                  </a>
                </li>
                <li>
                  <a href="https://www.google.com">
                    <GenesisIcon />
                    GENESIS
                  </a>
                </li>
                <li>
                  <a href="#AboutUs">
                    <AboutUsIcon />
                    About us
                  </a>
                </li>
                <li>
                  <a href="#InsigniaNFT">
                    <InsigniaNFTIcon />
                    Insignia NFT
                  </a>
                </li>
                <li>
                  <a href="#LyaToken">
                    <LyaTokenIcon />
                    LYA TOKEN
                  </a>
                </li>
              </ul>
            </nav>
            <a href="https://www.google.com" className={styles.LoginButton}>
              <LoginIcon /> LOGIN
            </a>
            <div
              className={styles.MenuButton}
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              <div className={styles.MenuIcon} data-is-menu-open={isMenuOpen}>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
