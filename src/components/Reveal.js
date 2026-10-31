import React, { useEffect, useRef, useState } from "react";

const STAGGER_MS = 90;
const MAX_STAGGER_STEPS = 6;

// One observer is shared by every Reveal; elements that enter the viewport together
// are revealed in reading order with a small stagger between them.
const revealCallbacks = new WeakMap();
let sharedObserver = null;

function getObserver() {
  if (sharedObserver) return sharedObserver;

  sharedObserver = new IntersectionObserver(
    (entries, observer) => {
      entries
        .filter((entry) => entry.isIntersecting)
        .sort(
          (a, b) =>
            a.boundingClientRect.top - b.boundingClientRect.top ||
            a.boundingClientRect.left - b.boundingClientRect.left
        )
        .forEach((entry, index) => {
          const reveal = revealCallbacks.get(entry.target);
          observer.unobserve(entry.target);
          revealCallbacks.delete(entry.target);
          if (reveal) reveal(Math.min(index, MAX_STAGGER_STEPS) * STAGGER_MS);
        });
    },
    { threshold: 0.1, rootMargin: "0px 0px -8% 0px" }
  );

  return sharedObserver;
}

function prefersReducedMotion() {
  return (
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

function Reveal({ as: Component = "div", className = "", style, children, ...rest }) {
  const ref = useRef(null);
  // null until the element has scrolled into view, then the stagger delay in ms
  const [delay, setDelay] = useState(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;

    if (!("IntersectionObserver" in window) || prefersReducedMotion()) {
      setDelay(0);
      return undefined;
    }

    const observer = getObserver();
    revealCallbacks.set(element, setDelay);
    observer.observe(element);

    return () => {
      observer.unobserve(element);
      revealCallbacks.delete(element);
    };
  }, []);

  const isVisible = delay !== null;
  const classes = ["reveal", isVisible && "is-visible", className].filter(Boolean).join(" ");

  return (
    <Component
      ref={ref}
      className={classes}
      style={isVisible ? { ...style, "--reveal-delay": `${delay}ms` } : style}
      {...rest}
    >
      {children}
    </Component>
  );
}

export default Reveal;
