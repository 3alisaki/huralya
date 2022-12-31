import styles from "./style.module.scss";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { ReactComponent as TelegramIcon } from "../../assets/images/Section3/telegram.svg";
import { ReactComponent as TwitterIcon } from "../../assets/images/Section3/twitter.svg";
import { ReactComponent as DiscordIcon } from "../../assets/images/Section3/discord.svg";
import { ReactComponent as RedditIcon } from "../../assets/images/Section3/reddit.svg";
import { ReactComponent as GithubIcon } from "../../assets/images/Section3/github.svg";
import { ReactComponent as BackIcon } from "../../assets/images/Section3/back.svg";
import { ReactComponent as NextIcon } from "../../assets/images/Section3/next.svg";
import { ReactComponent as CurrentStepBorder } from "../../assets/images/Section3/currentStep.svg";
import { ReactComponent as InfoIcon } from "../../assets/icons/info.svg";

import { ReactComponent as OneIcon } from "../../assets/images/Section3/1.svg";
import { ReactComponent as TwoIcon } from "../../assets/images/Section3/2.svg";
import { ReactComponent as ThreeIcon } from "../../assets/images/Section3/3.svg";
import { ReactComponent as FourIcon } from "../../assets/images/Section3/4.svg";
import { ReactComponent as FiveIcon } from "../../assets/images/Section3/5.svg";

import Avatar1Src from "../../assets/images/Section3/avatar1.png";
import Avatar2Src from "../../assets/images/Section3/avatar2.png";
import Avatar3Src from "../../assets/images/Section3/avatar3.png";

import { ReactComponent as YahooLogo } from "../../assets/images/Section3/yahoo.svg";
import { ReactComponent as CoinDeskLogo } from "../../assets/images/Section3/coinDesk.svg";
import { ReactComponent as CoinMarketCapLogo } from "../../assets/images/Section3/coinMarketCap.svg";
import { ReactComponent as GameRantLogo } from "../../assets/images/Section3/gameRant.svg";

const roadmapStepsVisableItemCount = 5;
const roadmapSteps = [
  {
    label: "dev & designe",
    icon: <OneIcon />,
  },
  {
    label: "Beta Version",
    icon: <TwoIcon />,
  },
  {
    label: "cex listing",
    icon: <ThreeIcon />,
  },
  {
    label: "Stream",
    icon: <FourIcon />,
  },
  {
    label: "Moons",
    icon: <FiveIcon />,
  },
  {
    label: "dev & designe",
    icon: <OneIcon />,
  },
  {
    label: "Beta Version",
    icon: <TwoIcon />,
  },
  {
    label: "cex listing",
    icon: <ThreeIcon />,
  },
  {
    label: "Stream",
    icon: <FourIcon />,
  },
  {
    label: "Moons",
    icon: <FiveIcon />,
  },
];

const otherPlatformsPageSize = 4;
const otherPlatforms = [
  {
    link: "https://www.google.com",
    logo: <YahooLogo />,
  },
  {
    link: "https://www.google.com",
    logo: <CoinDeskLogo />,
  },
  {
    link: "https://www.google.com",
    logo: <CoinMarketCapLogo />,
  },
  {
    link: "https://www.google.com",
    logo: <GameRantLogo />,
  },
  {
    link: "https://www.google.com",
    logo: <CoinDeskLogo />,
  },
  {
    link: "https://www.google.com",
    logo: <YahooLogo />,
  },
  {
    link: "https://www.google.com",
    logo: <GameRantLogo />,
  },
  {
    link: "https://www.google.com",
    logo: <CoinMarketCapLogo />,
  },
  {
    link: "https://www.google.com",
    logo: <YahooLogo />,
  },
  {
    link: "https://www.google.com",
    logo: <CoinDeskLogo />,
  },
  {
    link: "https://www.google.com",
    logo: <CoinMarketCapLogo />,
  },
  {
    link: "https://www.google.com",
    logo: <GameRantLogo />,
  },
];

const teamAvatarsPageSize = 3;
const teamAvatars = [
  Avatar1Src,
  Avatar2Src,
  Avatar3Src,
  Avatar3Src,
  Avatar1Src,
  Avatar2Src,
  Avatar1Src,
  Avatar2Src,
  Avatar3Src,
];

const backers = [
  {
    label: "a16z",
    link: "https://www.google.com",
  },
  {
    label: "animaco brand",
    link: "https://www.google.com",
  },
  {
    label: "Ycombinator",
    link: "https://www.google.com",
  },
  {
    label: "binance labs",
    link: "https://www.google.com",
  },
  {
    label: "binance labs",
    link: "https://www.google.com",
  },
];

export default function Section3() {
  const [isViewed, setIsViewed] = useState(false);
  const [inViewRef, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
    onChange: (inView) => inView && setIsViewed(true),
  });

  const [roadmapCurrentStepIndex, setRoadmapCurrentStepIndex] = useState(0);
  const [roadmapCurrentOffset, setRoadmapCurrentOffset] = useState(0);

  const [teamAvatarsCurrentPageIndex, setTeamAvatarsCurrentPageIndex] =
    useState(0);

  const [otherPlatformsCurrentPageIndex, setOtherPlatformsCurrentPageIndex] =
    useState(0);

  return (
    <div
      id="AboutUs"
      className={styles.Section3}
      ref={inViewRef}
      data-is-viewed={inView || isViewed}
    >
      <h2 className={styles.Title}>About Us</h2>
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
      <p className={styles.Content}>
        <div className={styles.SmallLine}></div>
        We, Huralya, are game creators; we build games based on your needs and
        styles. Our games WILL entertain you, WILL provide you income and WILL
        grant you great chances of investment.
        <br />
        Our plans and goals will not be limited only into creating games. By
        combining the power of Blockchain and Web3, we are building an optimal
        and adaptive platform, specially built for developers to help them
        develop, publish and support their monetization system for their games.
      </p>
      <div className={styles.Roadmap}>
        <div>
          <div>Roadmap</div>
        </div>
        <div>
          <div className={styles.Switch}>
            <div className={styles.Icons}>
              {roadmapSteps.map(
                ({ icon, label }, index) =>
                  index >= roadmapCurrentOffset &&
                  index <
                    roadmapCurrentOffset + roadmapStepsVisableItemCount && (
                    <div key={index}>
                      <button
                        data-visited={index < roadmapCurrentStepIndex}
                        disabled={index === roadmapCurrentStepIndex}
                        onClick={() => {
                          setRoadmapCurrentStepIndex(index);
                        }}
                      >
                        {icon}
                        <div>{label}</div>
                      </button>
                    </div>
                  )
              )}
            </div>
            <div className={styles.CurrentStepBorder}>
              <div
                style={{
                  left: `${
                    ((roadmapCurrentStepIndex - roadmapCurrentOffset) /
                      roadmapStepsVisableItemCount) *
                    100
                  }%`,
                  width: `${(1 / roadmapStepsVisableItemCount) * 100}%`,
                }}
              >
                <CurrentStepBorder />
              </div>
            </div>
            <div className={styles.Line}>
              {roadmapSteps.map(
                (_, index) =>
                  index >= roadmapCurrentOffset &&
                  index <
                    roadmapCurrentOffset + roadmapStepsVisableItemCount && (
                    <div
                      key={index}
                      data-visited={index < roadmapCurrentStepIndex}
                      data-current={index === roadmapCurrentStepIndex}
                      style={{
                        left: `${
                          ((index - roadmapCurrentOffset) /
                            roadmapStepsVisableItemCount) *
                          100
                        }%`,
                        width: `${(1 / roadmapStepsVisableItemCount) * 100}%`,
                      }}
                    >
                      <div />
                    </div>
                  )
              )}
            </div>
          </div>
          <div className={styles.Arrows}>
            <button
              disabled={roadmapCurrentStepIndex === 0}
              onClick={() => {
                const newIndex = roadmapCurrentStepIndex - 1;
                setRoadmapCurrentStepIndex(newIndex);

                if (newIndex < roadmapCurrentOffset) {
                  setRoadmapCurrentOffset(newIndex);
                }
              }}
            >
              <BackIcon />
            </button>
            <button
              disabled={roadmapCurrentStepIndex + 1 === roadmapSteps.length}
              onClick={() => {
                const newIndex = roadmapCurrentStepIndex + 1;
                setRoadmapCurrentStepIndex(newIndex);

                if (
                  newIndex >=
                  roadmapCurrentOffset + roadmapStepsVisableItemCount
                ) {
                  setRoadmapCurrentOffset(
                    newIndex - (roadmapStepsVisableItemCount - 1)
                  );
                }
              }}
            >
              <NextIcon />
            </button>
          </div>
        </div>
      </div>
      <div className={styles.SideContent}>
        <div className={styles.OurTeam}>
          <div>
            <h3>Our Team</h3>
            <a href="https://www.google.com">Join Us</a>
          </div>
          <div>
            {teamAvatars.map(
              (item, index) =>
                index >= teamAvatarsCurrentPageIndex * teamAvatarsPageSize &&
                index <
                  teamAvatarsCurrentPageIndex * teamAvatarsPageSize +
                    teamAvatarsPageSize && <img src={item} key={index} alt="" />
            )}
          </div>
          <div className={styles.Arrows}>
            <button
              disabled={teamAvatarsCurrentPageIndex === 0}
              onClick={() => {
                setTeamAvatarsCurrentPageIndex(teamAvatarsCurrentPageIndex - 1);
              }}
            >
              <BackIcon />
            </button>
            <button
              disabled={
                teamAvatarsCurrentPageIndex + 1 ===
                Math.ceil(teamAvatars.length / teamAvatarsPageSize)
              }
              onClick={() => {
                setTeamAvatarsCurrentPageIndex(teamAvatarsCurrentPageIndex + 1);
              }}
            >
              <NextIcon />
            </button>
          </div>
        </div>
        <div className={styles.OurBackers}>
          <h3>Our Backers</h3>
          <p>
            To becpme a partner, Contact us <InfoIcon />
          </p>
          <div>
            {backers.map((item, index) => (
              <a key={index} href={item.link}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.OtherPlatformsContainer}>
        <div className={styles.Arrows}>
          <button
            disabled={otherPlatformsCurrentPageIndex === 0}
            onClick={() => {
              setOtherPlatformsCurrentPageIndex(
                otherPlatformsCurrentPageIndex - 1
              );
            }}
          >
            <BackIcon />
          </button>
          <button
            disabled={
              otherPlatformsCurrentPageIndex + 1 ===
              Math.ceil(otherPlatforms.length / otherPlatformsPageSize)
            }
            onClick={() => {
              setOtherPlatformsCurrentPageIndex(
                otherPlatformsCurrentPageIndex + 1
              );
            }}
          >
            <NextIcon />
          </button>
        </div>
        <div className={styles.OtherPlatforms}>
          {otherPlatforms.map(
            (item, index) =>
              index >=
                otherPlatformsCurrentPageIndex * otherPlatformsPageSize &&
              index <
                otherPlatformsCurrentPageIndex * otherPlatformsPageSize +
                  otherPlatformsPageSize && (
                <a href={item.link} key={index}>
                  {item.logo}
                </a>
              )
          )}
        </div>
        <h3>Other platforms</h3>
      </div>
    </div>
  );
}
