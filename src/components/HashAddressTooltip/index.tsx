import styles from "./style.module.scss";
import { ReactNode, useRef, useState } from "react";
import {
  offset,
  flip,
  shift,
  autoUpdate,
  useFloating,
  useInteractions,
  useRole,
  useDismiss,
  arrow,
  useHover,
  size,
} from "@floating-ui/react";
import CopyToClipboard from "react-copy-to-clipboard";
import { ReactComponent as CopyIcon } from "../../assets/icons/copy.svg";
import { ReactComponent as MetaMaskFoxIcon } from "../../assets/icons/metaMaskFox.svg";

interface HashAddressTooltipProps {
  hashAddress: string;
  children: ReactNode;
}

export default function HashAddressTooltip({
  hashAddress,
  children,
}: HashAddressTooltipProps) {
  const [open, setOpen] = useState(false);
  const arrowRef = useRef<HTMLDivElement | null>(null);

  const {
    x,
    y,
    reference,
    floating,
    placement,
    strategy,
    context,
    middlewareData: { arrow: { x: arrowX, y: arrowY } = {} },
  } = useFloating({
    open,
    onOpenChange: setOpen,
    middleware: [
      offset(6),
      flip({ padding: 6 }),
      shift({ padding: 6 }),
      arrow({ element: arrowRef, padding: 6 }),
      size({
        padding: 6,
        apply({availableWidth, elements}) {
          Object.assign(elements.floating.style, {
            maxWidth: `${availableWidth}px`,
          });
        },
      }),
    ],
    whileElementsMounted: autoUpdate,
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    useHover(context),
    useRole(context),
    useDismiss(context),
  ]);

  const staticSide =
    {
      top: "bottom",
      bottom: "top",
    }[placement.split("-")[0]] || "top";

  return (
    <>
      <div
        ref={reference}
        {...getReferenceProps({
          className: styles.Reference,
        })}
      >
        {children}
        {open && (
          <div
            ref={floating}
            className={styles.HashAddressTooltip}
            style={{
              position: strategy,
              top: y ?? 0,
              left: x ?? 0,
            }}
            data-static-side={staticSide}
            {...getFloatingProps()}
          >
            <div className={styles.HashAddressTooltipContent} role="tooltip">
              <div className={styles.HashAddress} role="tooltip">
                {hashAddress}
              </div>
              <CopyToClipboard text={hashAddress}>
                <CopyIcon className={styles.CopyIcon} />
              </CopyToClipboard>
              <MetaMaskFoxIcon className={styles.MetaMaskFoxIcon} />
            </div>
            <div
              ref={arrowRef}
              className={styles.Arrow}
              data-static-side={staticSide}
              style={{
                left: arrowX != null ? `${arrowX}px` : "",
                top: arrowY != null ? `${arrowY}px` : "",
                right: "",
                bottom: "",
                [staticSide]: "-6px",
              }}
            />
          </div>
        )}
      </div>
    </>
  );
}
