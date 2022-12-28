import styles from "./style.module.scss";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { ReactComponent as CardBG } from "../../assets/images/Section4/cardBG.svg";
import AvatarSrc from "../../assets/images/Section4/avatar.png";
import { ReactComponent as AvatarBG } from "../../assets/images/Section4/avatarBG.svg";
import { ReactComponent as InfoIcon } from "../../assets/icons/info.svg";

const information = [
  {
    title: "Squirrel supply",
    description: [
      "The number of squirrels is limited by demand at the highest price, and no new squirrels are created as demand decreases. Even at peak demand, only 1,000 squirrels can be minted each month",
    ],
  },
  {
    title: "A useful pet in Genesis game",
    description: [
      "Squirrels are cute and useful pets that can collect food on your island",
    ],
  },
  {
    title: "NFT staking",
    description: [
      "You can get 10% profit per month (from minted price) by staking nfts for up to one year.",
      "In the 10th month, you have a valuable NFT that is risk free for you!!",
    ],
  },
  {
    title: "DAO",
    description: [
      "With each NFT you will have the right to vote in company decisions - we have democracy",
    ],
  },
  {
    title: "Airdrops",
    description: ["Holdings of NFTs may include airdrops in the future"],
  },
  {
    title: "Profile picture",
    description: [
      "Each squirrel has a unique avatar that you can use as your profile picture in our games",
    ],
  },
  {
    title: "Squirrel supply",
    description: [
      "The number of squirrels is limited by demand at the highest price, and no new squirrels are created as demand decreases. Even at peak demand, only 1,000 squirrels can be minted each month",
    ],
  },
  {
    title: "A useful pet in Genesis game",
    description: [
      "Squirrels are cute and useful pets that can collect food on your island",
    ],
  },
  {
    title: "NFT staking",
    description: [
      "You can get 10% profit per month (from minted price) by staking nfts for up to one year.",
      "In the 10th month, you have a valuable NFT that is risk free for you!!",
    ],
  },
  {
    title: "DAO",
    description: [
      "With each NFT you will have the right to vote in company decisions - we have democracy",
    ],
  },
  {
    title: "Airdrops",
    description: ["Holdings of NFTs may include airdrops in the future"],
  },
  {
    title: "Profile picture",
    description: [
      "Each squirrel has a unique avatar that you can use as your profile picture in our games",
    ],
  },
  {
    title: "Squirrel supply",
    description: [
      "The number of squirrels is limited by demand at the highest price, and no new squirrels are created as demand decreases. Even at peak demand, only 1,000 squirrels can be minted each month",
    ],
  },
  {
    title: "A useful pet in Genesis game",
    description: [
      "Squirrels are cute and useful pets that can collect food on your island",
    ],
  },
  {
    title: "NFT staking",
    description: [
      "You can get 10% profit per month (from minted price) by staking nfts for up to one year.",
      "In the 10th month, you have a valuable NFT that is risk free for you!!",
    ],
  },
  {
    title: "DAO",
    description: [
      "With each NFT you will have the right to vote in company decisions - we have democracy",
    ],
  },
  {
    title: "Airdrops",
    description: ["Holdings of NFTs may include airdrops in the future"],
  },
  {
    title: "Profile picture",
    description: [
      "Each squirrel has a unique avatar that you can use as your profile picture in our games",
    ],
  },
  {
    title: "Squirrel supply",
    description: [
      "The number of squirrels is limited by demand at the highest price, and no new squirrels are created as demand decreases. Even at peak demand, only 1,000 squirrels can be minted each month",
    ],
  },
  {
    title: "A useful pet in Genesis game",
    description: [
      "Squirrels are cute and useful pets that can collect food on your island",
    ],
  },
  {
    title: "NFT staking",
    description: [
      "You can get 10% profit per month (from minted price) by staking nfts for up to one year.",
      "In the 10th month, you have a valuable NFT that is risk free for you!!",
    ],
  },
  {
    title: "DAO",
    description: [
      "With each NFT you will have the right to vote in company decisions - we have democracy",
    ],
  },
  {
    title: "Airdrops",
    description: ["Holdings of NFTs may include airdrops in the future"],
  },
  {
    title: "Profile picture",
    description: [
      "Each squirrel has a unique avatar that you can use as your profile picture in our games",
    ],
  },
];

export default function Section4() {
  const [isViewed, setIsViewed] = useState(false);
  const [inViewRef, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
    onChange: (inView) => inView && setIsViewed(true),
  });

  return (
    <div
      id="InsigniaNFT"
      className={styles.Section4}
      ref={inViewRef}
      data-is-viewed={inView || isViewed}
    >
      <div>
        <div>
          <h1>Smart Investment...</h1>
          <div>
            Squirrel NFTs are a way to invest on Huralya
          </div>
        </div>
        <div>
          <div>
            <h2>Squirrel plan</h2>
            <p>
              The mint price of Squirrel nfts increases by 100 lya every month,
              So most likely you can sell your nfts at a higher price every
              month
            </p>
            <div className={styles.Information}>
              {information.map((item, index) => (
                <div key={index}>
                  <div className={styles.Title}>{item.title}</div>
                  <div className={styles.Description}>{item.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className={styles.CardBG}>
              <CardBG />
            </div>
            <div>
              <div className={styles.Avatar}>
                <div>
                  <img src={AvatarSrc} alt="Avatar" width={579} height={562} />
                </div>
                <div className={styles.AvatarBG}>
                  <AvatarBG />
                </div>
              </div>
              <div className={styles.Actions}>
                <div>
                  <button>Mint</button>
                  <button>Market place</button>
                </div>
                <div>
                  <InfoIcon /> Upcoming MINT on Mars-21-2023
                </div>
              </div>
              <div className={styles.Details}>
                <div className={styles.Detail}>
                  <h3>Circulating Supply</h3>
                  <div>1000</div>
                </div>
                <div className={styles.Detail}>
                  <h3>next mint price</h3>
                  <div>200 LYA</div>
                </div>
                <div className={styles.Detail}>
                  <h3>Mrket floor price</h3>
                  <div>250 LYA</div>
                </div>
                <div className={styles.Detail}>
                  <h3>Blockchain</h3>
                  <div>Polygan</div>
                </div>
                <div className={styles.Detail}>
                  <h3>contract Address</h3>
                  <div>0x60e...a7c6</div>
                </div>
                <div className={styles.Icons}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
