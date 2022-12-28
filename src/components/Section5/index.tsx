import styles from "./style.module.scss";
import { Fragment, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { ReactComponent as TradeIcon } from "../../assets/icons/trade.svg";
import { ReactComponent as DocumentIcon } from "../../assets/icons/document.svg";
import { ReactComponent as LyaImgae } from "../../assets/images/Section5/lya.svg";
import { ReactComponent as CurrentStepBorder } from "../../assets/images/Section5/currentStep.svg";
import HashAddressTooltip from "../HashAddressTooltip";

const steps = [
  {
    icon: <TradeIcon />,
    title: "Allocation and release",
    desctiption: [
      "All consumption of Lya token is in the ecosystem and its mint and burning is done only based on the supply and demand of users.",
      "No percentage of the lya supply is initially owned by the huralya team and will be fully released to the ecosystem, and the company's fundraising is mostly done through the Insignia Collection.",
      "Now the supply of lya is only 10,000,000 read the whitepaper for more information",
    ],
  },
  {
    icon: <DocumentIcon />,
    title: "Token usage",
    desctiption: [
      "LYA is the cryptocurrency used in the huralya ecosystem, and all transactions, expenses and user earnings are covered by this coin.",
      "Also, NFTs are minted and traded with lya",
      "By attracting more users and offering better products, we will gradually increase the demand and use of this token",
    ],
  },
  {
    icon: <TradeIcon />,
    title: "how to buy & sell",
    desctiption: [
      "Currently, it can only be purchased from within the Genesis game via the App Store and Google Play. Soon it will be possible to buy and sell tokens from any reputable crypto exchanges and you so can exchange them with any common cryptocurrencies such as BTC, ETH, USDT or …",
    ],
  },
];

export default function Section5() {
  const [isViewed, setIsViewed] = useState(false);
  const [inViewRef, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
    onChange: (inView) => inView && setIsViewed(true),
  });

  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [dots, setDots] = useState(
    steps.map((_, index) => ({ belongsTo: index }))
  );
  const stepsContentRef = useRef<(HTMLParagraphElement | null)[]>([]);

  return (
    <div
      id="LyaToken"
      className={styles.Section5}
      ref={inViewRef}
      data-is-viewed={inView || isViewed}
    >
      <div className={styles.Bg}>
        <div />
      </div>
      <div>
        <div>THE</div>
        <div>
          <LyaImgae />
          <div>TOKEN</div>
        </div>
      </div>
      <div>
        <div className={styles.Switch}>
          <div className={styles.Icons}>
            {steps.map(({ icon, title }, index) => (
              <div key={index}>
                <button
                  disabled={index === currentStepIndex}
                  onClick={() => {
                    setDots((dots) => {
                      const newDots = [...dots];
                      const thisItemDotIndex = dots.findIndex(
                        ({ belongsTo }) => belongsTo === index
                      );
                      newDots[0] = dots[thisItemDotIndex];
                      newDots[thisItemDotIndex] = dots[0];
                      return newDots;
                    });

                    setCurrentStepIndex(index);
                  }}
                >
                  {icon}
                  <div>{title}</div>
                </button>
              </div>
            ))}
          </div>
          <div className={styles.CurrentStepBorder}>
            <div
              style={{
                left: `${(currentStepIndex / steps.length) * 100}%`,
                width: `${(1 / steps.length) * 100}%`,
              }}
            >
              <CurrentStepBorder />
            </div>
          </div>
          <div className={styles.Line}>
            {dots.map(({ belongsTo }, index) => (
              <div
                key={index}
                data-current={index === 0}
                style={{
                  left: `${(belongsTo / steps.length) * 100}%`,
                  width: `${(1 / steps.length) * 100}%`,
                }}
              >
                <div />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.ContentContainer}>
          {steps.map(({ title, desctiption }, index) => (
            <div
              key={index}
              data-current={index === currentStepIndex}
              ref={(element) => {
                stepsContentRef.current[index] = element;
              }}
            >
              <h2>{title}</h2>
              <p>
                {desctiption.map((line, index) => (
                  <Fragment key={index}>
                    {index !== 0 && <br />}
                    {line}
                  </Fragment>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className={styles.Exchanges}>
          <h2>Exchanges</h2>
          <div>
            <div>Mexc</div>
            <div>uniswap</div>
            <div>Pancakeswap</div>
          </div>
        </div>
        <div className={styles.ContractAddress}>
          <h2>Contract Address</h2>
          <div>
            <HashAddressTooltip hashAddress="0x3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy">
              polygan
            </HashAddressTooltip>
            <HashAddressTooltip hashAddress="0x3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy">
              SmartChain
            </HashAddressTooltip>
          </div>
        </div>
      </div>
    </div>
  );
}
