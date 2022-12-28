import styles from "./style.module.scss";
import { ReactComponent as CertikLogo } from "../../assets/images/Footer/certik.svg";
import { ReactComponent as CoinmarketcapLogo } from "../../assets/images/Footer/coinmarketcap.svg";
import { ReactComponent as UnityLogo } from "../../assets/images/Footer/unity.svg";
import { ReactComponent as Pegi12Logo } from "../../assets/images/Footer/pegi12.svg";
import { ReactComponent as TelegramIcon } from "../../assets/icons/telegram.svg";
import { ReactComponent as TwitterIcon } from "../../assets/icons/twitter.svg";
import { ReactComponent as DiscordIcon } from "../../assets/icons/discord.svg";
import { ReactComponent as RedditIcon } from "../../assets/icons/reddit.svg";
import { ReactComponent as GithubIcon } from "../../assets/icons/github.svg";

export default function Footer() {
  // TODO Change Links
  return (
    <footer className={styles.Footer}>
      <div>
        <div className={styles.ContactUs}>
          <h2>dubai</h2>
          <p>
            38 rue Legendre 75017
            <br />
            info@huralya.com
          </p>
        </div>
        <div className={styles.Links}>
          <a href="https://www.google.com">Give Us Feedback</a>
          <a href="https://www.google.com">Support Center</a>
          <a href="https://www.google.com">Bug Bounty</a>
          <a href="https://www.google.com">Jobs</a>
        </div>
        <div className={styles.Logos}>
          <CertikLogo />
          <CoinmarketcapLogo />
          <UnityLogo />
          <Pegi12Logo />
        </div>
      </div>
      <div>
        <div className={styles.Links}>
          <a href="https://www.google.com">TERMS</a>
          <a href="https://www.google.com">PRIVACY</a>
          <a href="https://www.google.com">WHITEPAPER</a>
        </div>
        <div className={styles.Copyrights}>
          Huralya © 2022, All rights reserved
        </div>
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
    </footer>
  );
}
