import { useEffect } from "react";

const ElementPrototype = window.Element.prototype as any;

// polyfill element.matches function

if (typeof ElementPrototype.matches !== "function") {
  if (typeof ElementPrototype.msMatchesSelector === "function") {
    ElementPrototype.matches = ElementPrototype.msMatchesSelector;
  } else if (typeof ElementPrototype.mozMatchesSelector === "function") {
    ElementPrototype.matches = ElementPrototype.mozMatchesSelector;
  } else if (typeof ElementPrototype.webkitMatchesSelector === "function") {
    ElementPrototype.matches = ElementPrototype.webkitMatchesSelector;
  } else {
    ElementPrototype.matches = function matches(selector: string) {
      let element = this;
      const elements = (
        element.document || element.ownerDocument
      ).querySelectorAll(selector);
      let index = 0;

      while (elements[index] && elements[index] !== element) {
        ++index;
      }

      return Boolean(elements[index]);
    };
  }
}

// polyfill element.closest function

if (typeof ElementPrototype.closest !== "function") {
  ElementPrototype.closest = function closest(selector: string) {
    let element = this;

    while (element && element.nodeType === 1) {
      if (element.matches(selector)) {
        return element;
      }

      element = element.parentNode;
    }

    return null;
  };
}

// fix hash scroll

function scrollToElement(element: HTMLElement) {
  if (!document.scrollingElement) return;
  const elementOffsetTop = element.getBoundingClientRect().top + window.scrollY;
  const newScrollTop =
    elementOffsetTop - (document.querySelector("header")?.clientHeight || 0);
  console.log(newScrollTop > 0 ? newScrollTop : 0);
  window.scroll({
    top: newScrollTop > 0 ? newScrollTop : 0,
    left: 0,
    behavior: "smooth",
  });
}

function getElementByHash(hash: string) {
  return document.getElementById(hash.substring(1));
}

export default function FixHashScroll() {
  useEffect(() => {
    const clickListener = (event: MouseEvent) => {
      if (!event.target || !(event.target instanceof window.Element)) return;
      const anchor = event.target.closest("a");
      const hash = anchor?.getAttribute("href");
      if (!hash?.startsWith("#")) return;
      const element = getElementByHash(hash);
      if (!element) return;

      event.preventDefault();
      scrollToElement(element);
    };

    document.addEventListener("click", clickListener);

    return () => {
      document.removeEventListener("click", clickListener);
    };
  }, []);

  return <></>;
}
