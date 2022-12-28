import styles from "./style.module.scss";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { ReactComponent as TelegramIcon } from "../../assets/images/Section3/telegram.svg";
import { ReactComponent as TwitterIcon } from "../../assets/images/Section3/twitter.svg";
import { ReactComponent as DiscordIcon } from "../../assets/images/Section3/discord.svg";
import { ReactComponent as RedditIcon } from "../../assets/images/Section3/reddit.svg";
import { ReactComponent as GithubIcon } from "../../assets/images/Section3/github.svg";
import { ReactComponent as OneIcon } from "../../assets/icons/1.svg";
import { ReactComponent as TwoIcon } from "../../assets/icons/2.svg";
import { ReactComponent as ThreeIcon } from "../../assets/icons/3.svg";
import { ReactComponent as FourIcon } from "../../assets/icons/4.svg";
import { ReactComponent as FiveIcon } from "../../assets/icons/5.svg";

export default function Section3() {
  const [isViewed, setIsViewed] = useState(false);
  const [inViewRef, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
    onChange: (inView) => inView && setIsViewed(true),
  });

  return (
    <div
      id="AboutUs"
      className={styles.Section3}
      ref={inViewRef}
      data-is-viewed={inView || isViewed}
    >
      <h2 className={styles.Title}>About Us</h2>
      <div className={styles.SmallLine}></div>
      <p className={styles.Content}>
        We, Huralya, are game creators; we build games based on your needs and
        styles. Our games WILL entertain you, WILL provide you income and WILL
        grant you great chances of investment.
        <br />
        Our plans and goals will not be limited only into creating games. By
        combining the power of Blockchain and Web3, we are building an optimal
        and adaptive platform, specially built for developers to help them
        develop, publish and support their monetization system for their games.
      </p>
      <div className={styles.SocialMediaContainer}>
        <div className={styles.SocialMedia}>
          <a href="https://www.google.com">
            <TelegramIcon />
          </a>
          <a href="https://www.google.com">
            <TwitterIcon />
          </a>
          <a href="https://www.google.com">
            <DiscordIcon />
          </a>
          <a href="https://www.google.com">
            <RedditIcon />
          </a>
          <a href="https://www.google.com">
            <GithubIcon />
          </a>
        </div>
      </div>
    </div>
  );
}
