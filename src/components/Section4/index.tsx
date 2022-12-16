import styles from "./style.module.scss";

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
  return (
    <div className={styles.Section4}>
      <div>
        <div>
          <div>
            <div className={styles.SectionHeader}>
              <h1 className={styles.Title}>Smart Investment...</h1>
              <div className={styles.SubTitle}>
                Squirrel NFTs are a way to invest on Huralya
              </div>
            </div>
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
          <div></div>
        </div>
      </div>
    </div>
  );
}
