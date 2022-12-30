import styles from "./style.module.scss";
import { ReactComponent as MobileFrameImage } from "../../assets/images/Section1/mobileFrame.svg";
import GameplayImageSrc from "../../assets/images/Section1/gameplay.gif";

export default function Section1() {
  return (
    <div className={styles.Section1}>
      <div>
        <div>Gameplay</div>
      </div>
      <div>
        <div className={styles.Pad} />
        <div className={styles.GameplayContainer}>
          <MobileFrameImage />
          <img src={GameplayImageSrc} alt="Gameplay" />
        </div>
        <div className={styles.Tags}>
          <div>#MMORPG</div>
          <div>#CMS</div>
          <div>#P&E</div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
