import styles from "./style.module.scss";
import { useEffect, useState } from "react";
import CharactersImageSrc from "../../assets/images/IntroSection/characters.png";
import MouseImageSrc from "../../assets/images/IntroSection/mouse.gif";
import { ReactComponent as AppButtonBG } from "../../assets/images/IntroSection/appButtonBG.svg";
import { ReactComponent as SecondBG } from "../../assets/images/IntroSection/secondBG.svg";
import { ReactComponent as AppleIcon } from "../../assets/icons/apple.svg";
import { ReactComponent as AndroidIcon } from "../../assets/icons/android.svg";
import { ReactComponent as PlayIcon } from "../../assets/icons/play.svg";

export default function IntroSection() {
  const [hideMouseImage, setHideMouseImage] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setHideMouseImage(window.scrollY >= window.innerHeight / 3);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  });

  return (
    <div className={styles.IntroSection}>
      <div>
        <div>
          WORLD OF <span>HURALYA</span>
        </div>
        <img src={CharactersImageSrc} alt="Characters" />
      </div>
      <div>
        <div className={styles.Buttons}>
          <div className={styles.AppButtonContainer}>
            <div>
              <AppButtonBG />
              <a
                href="https://island3d.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <AppleIcon />
              </a>
              <a
                href="https://island3d.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <AndroidIcon />
              </a>
            </div>
            <div className={styles.TryMessage}>TRY FREE</div>
          </div>
          <div className={styles.SecondContainer}>
            <div>
              <SecondBG />
              <a href="https://www.google.com">
                <div>White paper</div>
              </a>
              <a
                href="https://island3d.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <div>Trailer</div>
                <PlayIcon />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.MouseImage}>
          <img
            src={MouseImageSrc}
            alt="Mouse"
            style={{ opacity: hideMouseImage ? 0 : 1 }}
          />
        </div>
      </div>
    </div>
  );
}
