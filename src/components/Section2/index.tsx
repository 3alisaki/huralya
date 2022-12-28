import styles from "./style.module.scss";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import FirstCardImageSrc from "../../assets/images/Section2/1.png";
import SecondCardImageSrc from "../../assets/images/Section2/2.png";
import ThirdCardImageSrc from "../../assets/images/Section2/3.png";
import { ReactComponent as FirstCardBG } from "../../assets/images/Section2/1BG.svg";
import { ReactComponent as SecondCardBG } from "../../assets/images/Section2/2BG.svg";
import { ReactComponent as ThirdCardBG } from "../../assets/images/Section2/3BG.svg";

export default function Section2() {
  const [isViewed, setIsViewed] = useState(false);
  const [inViewRef, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
    onChange: (inView) => inView && setIsViewed(true),
  });

  return (
    <div
      className={styles.Section2}
      ref={inViewRef}
      data-is-viewed={inView || isViewed}
    >
      <div>
        <div>FEATURED NEWS</div>
      </div>
      <div>
        <div>
          <div className={styles.BG}>
            <FirstCardBG />
          </div>
          <div className={styles.Card}>
            <div className={styles.Thumbnail}>
              <img src={FirstCardImageSrc} />
            </div>
            <div className={styles.Content}>
              <h3>genesis airdrop</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et
                massa mi..
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.BG}>
            <SecondCardBG />
          </div>
          <div className={styles.Card}>
            <div className={styles.Thumbnail}>
              <img src={SecondCardImageSrc} />
            </div>
            <div className={styles.Content}>
              <h3>3rd round of mint</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing</p>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.BG}>
            <ThirdCardBG />
          </div>
          <div className={styles.Card}>
            <div className={styles.Thumbnail}>
              <img src={ThirdCardImageSrc} />
            </div>
            <div className={styles.Content}>
              <h3>market launch</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et
                massa mi..
                <br />
                nsectetur adipiscing e
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div></div>
      </div>
    </div>
  );
}
