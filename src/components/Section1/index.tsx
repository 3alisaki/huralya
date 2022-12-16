import styles from "./style.module.scss";
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
          <img src={GameplayImageSrc} alt="Gameplay" />
          <div className={styles.HomeBar} />
          <div className={styles.DynamicIsland}>
            <div className={styles.Camera} />
          </div>
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
