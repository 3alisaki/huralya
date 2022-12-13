import styles from "./style.module.scss";
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
          <a href="https://ww.google.com">Give Us Feedback</a>
          <a href="https://ww.google.com">Support Center</a>
          <a href="https://ww.google.com">Bug Bounty</a>
          <a href="https://ww.google.com">Jobs</a>
        </div>
      </div>
      <div>
        <div className={styles.Links}>
          <a href="https://ww.google.com">TERMS</a>
          <a href="https://ww.google.com">PRIVACY</a>
          <a href="https://ww.google.com">WHITEPAPER</a>
        </div>
        <div className={styles.Copyrights}>
          Huralya © 2022, All rights reserved
        </div>
        <div className={styles.SocialMedia}>
          <a href="https://ww.google.com">
            <TelegramIcon />
          </a>
          <a href="https://ww.google.com">
            <TwitterIcon />
          </a>
          <a href="https://ww.google.com">
            <DiscordIcon />
          </a>
          <a href="https://ww.google.com">
            <RedditIcon />
          </a>
          <a href="https://ww.google.com">
            <GithubIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
