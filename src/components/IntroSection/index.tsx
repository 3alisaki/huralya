import styles from "./style.module.scss";
import CharactersImageSrc from "../../assets/images/IntroSection/characters.png";
import MouseImageSrc from "../../assets/images/IntroSection/mouse.gif";
import { ReactComponent as AppButtonBG } from "../../assets/images/IntroSection/appButtonBG.svg";
import { ReactComponent as GenesisButtonBG } from "../../assets/images/IntroSection/genesisButtonBG.svg";
import { ReactComponent as AppleIcon } from "../../assets/icons/apple.svg";
import { ReactComponent as AndroidIcon } from "../../assets/icons/android.svg";
import { ReactComponent as ThreeDIcon } from "../../assets/icons/3d.svg";

export default function IntroSection() {
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
          <div className={styles.GenesisButtonContainer}>
            <a
              href="https://island3d.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <GenesisButtonBG />
              <div>
                <div>Explore the genesis</div>
                <div>The first creation of Huralya</div>
              </div>
              <ThreeDIcon />
            </a>
          </div>
        </div>
        <div className={styles.MouseImage}>
          <img src={MouseImageSrc} alt="Mouse" />
        </div>
      </div>
    </div>
  );
}
